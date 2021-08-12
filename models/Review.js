"use strict";

const db = require("../config/db");

class Review{
    constructor(body){
        this.body = body;
    }
     async registerreview(){
         //console.log("good");
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO Review(ReviewTitle, ReviewDetail, ReviewScore, ReviewImg, MemberNum, ProductNum) VALUES(?, ?, ?, ?, ?, ?);";
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
            const query = "SELECT * FROM Review;";
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
