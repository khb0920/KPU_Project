"use strict";

const db = require("../config/db");

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
     async showreview(){
        return new Promise((resolve, reject) => {
            const query = "SELECT Distinct Review.ProductNum, ProductName, ProductDetail, ProductImg, ProductCompo, ProductPrice, ProductSLevel, ProductF1, ProductF2, ProductF3, ProductA, ReviewNum, ReviewTitle, ReviewDetail, ReviewScore, ReviewImg, Gender, Age_range, Nickname, Birthday, Member.Email FROM Review, Product, Member WHERE Review.ProductNum = Product.ProductNum AND Review.Email = Member.Email ORDER BY ReviewNum DESC;";
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
