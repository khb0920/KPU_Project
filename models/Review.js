"use strict";

const db = require("../config/db");

class Review{
    constructor(body){
        this.body = body;
    }
     async registerreview(){
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO Review(ReviewTitle, ReviewDetail, ReviewScore, ReviewImg, MemberNum, ProductNum) VALUES(?, ?, ?, ?, ?, ?); UPDATE Product SET ProductCount = ProductCount + 1 WHERE ProductNum=${this.body[5]};`;
            db.query(
                query,
                this.body,
                (err) => {
                    if(err) reject(`${err}`);
                    resolve({ success: true});
            });
        });
     }
     async showreview(){
        return new Promise((resolve, reject) => {
            const query = "SELECT Distinct Review.ProductNum, productName, productDetail, productImg, productCompo, productPrice, productSLevel, ReviewNum, ReviewTitle, ReviewDetail, ReviewScore, ReviewImg, Gender, Age_range, Nickname, Birthday, Email FROM Review, Product, Member WHERE Review.ProductNum = Product.ProductNum AND Review.MemberNum = Member.MemberNum ;";
            db.query(
                query,
                (err, data) => {
                    if(err) reject(`${err}`);
                    resolve(data);
            });
        });
    }











}

module.exports = Review;
