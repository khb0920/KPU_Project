"use strict";

const express = require("express");     //익스프레스 모듈
const app = express();                  
const url = require("url");             //url 모듈
const querystring = require("querystring");// querystring 모듈
const dotenv = require("dotenv");            //dotenv 모듈
dotenv.config();           
const bodyParser = require("body-parser");  //bodyParser 모듈 (express안에 내장)      
const home = require("./routes/home");

const cors = require("cors");                  //chrome의 cors정책 방지용
const corsOptions = {
    origin: "*",    
    credentials: true
}
app.use(cors(corsOptions));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Headers", "X-Requested-With");
       res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
       next();
   });

app.use(express.json());                        
app.use(express.urlencoded({extended: true}));   //url 한글
  
app.use("/image", express.static("./upload"));    //  이미지파일 업로드시 /image -> /upload로 보내겠다.
app.use("/", home);                              // 해당 루트 접속시 home실행


module.exports = app;
