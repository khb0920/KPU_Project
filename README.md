# 향수 성분 분석 리뷰 서비스(backend파트)


##### 개발환경:  node js 
##### 개발툴:    vsCode
##### DB:        RDS + mysqlworkbench

--------------


**해당 루트 접속시 home 실행**
```javascript
app.use("/", home);
```
<br>

**라우터**

```javascript
router.get("/", ctrl.output.root);
router.get("/Member/:memberid" ,ctrl.output.member);    
router.get("/Product", ctrl.output.product);
router.get("/Product/detail/:productid", ctrl.output.productdetail);
router.get("/Review", ctrl.output.review);
router.get("/Rank", ctrl.output.rank);
router.get("/Request", ctrl.output.requestPD);
router.get("/Avoid/:avoidid" ,ctrl.output.avoid);    

router.post("/Update/:reviewid", upload.single("image"), ctrl.process.update);

router.post("/Member", ctrl.process.registermember);
router.post("/Product", upload.single("image"), ctrl.process.registerproduct);
router.post("/Review", upload.single("image"), ctrl.process.registerreview);
router.post("/Request", ctrl.process.registerrequest);

router.post("/Delete/:reviewid", ctrl.process.delete);
```
<br>

**컨트롤러 해당 함수 실행**
*(ex)review등록*
```javascript
registerreview: async(req, res) => {
        try{
        const image ="/image/" +req.file.filename;
        const reviewinfo = [req.body.title, req.body.detail, req.body.score, image, req.body.product, req.body.email, req.body.id];
        const review = new Review(reviewinfo);
        const reviewresponse = await review.registerreview();
        return res.json(reviewresponse);
        }catch(err){
            return{success: false, msg:console.error()};
        }
    },
```
<br>

*이미지는 multer 모듈 사용 이미지 저장소로 저장*
<br>

**DB 연결(RDS)**
```javascript
const mysql = require("mysql");

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PSWORD,
    database: process.env.DB_DATABASE,
    multipleStatements: true
});
db.connect();
```
<br>

module.exports = db;
**리뷰 클래스 쿼리실행**
```javascript
class Review{
    constructor(body){
        this.body = body;
    }
     async registerreview(){
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO Review(ReviewTitle, ReviewDetail, ReviewScore, ReviewImg, ProductNum, Email, ID) VALUES(?, ?, ?, ?, ?, ?, ?); UPDATE Product SET ProductCount = ProductCount + 1 WHERE ProductNum=${this.body[4]};`;
            db.query(
                query,
                this.body,
                (err) => {
                    if(err) reject(`${err}`);
                    resolve({ success: true});
            });
        });
     }
```
<br>

*insert될 때마다 카운트실행, 리뷰많은순 랭킹에 활용*

**회원 관리**
<br>

```javascript
async register() {
        try {

            const id = await UserStorage.getUserInfo(this.body.email);
            if (typeof id === "undefined") {
                const response = await UserStorage.save(this.body);
                return (response);
            } else {
                return { success: false, alert: "이메일이 존재합니다." };
            }
        }
        catch (err) {
            return { success: false, msg: err };
            
        }
    }
 ```
 <br>
 
 *카카오아이디로 로그인 DB에 해당 유저가 존재하면 로그인*
 <br>
 
 ```javascript
 class UserStorage {
    constructor(body){
        this.body = body;
    }
        static getUserInfo(email) {
           return new Promise((resolve, reject) => {
                 const query = "SELECT * FROM Member WHERE Email = ?;";
                 db.query(query, [email], (err, data) => {
                 if (err) reject(err);
                 resolve(data[0]);   
              });
              });
            }
            
        static async save(userinfo){
             return new Promise((resolve, reject) => {
                 const query = "INSERT INTO Member(ID, Nickname, Age_range, Birthday, Email, Gender) VALUES(?, ?, ?, ?, ?, ?);";
             db.query(
                 query,
                 [userinfo.id, userinfo.nickname, userinfo.age_range, userinfo.birth, userinfo.email, userinfo.gender],
                 (err) => {
                 if (err) reject(`${err}`);
                 resolve({ success: true });
             });
             });
                
            } 
        

        }
   ```
   <br>
   
   *해당 유저가 존재하지 않으면 회원가입 후 로그인*
   
   <br>
   
   
  
