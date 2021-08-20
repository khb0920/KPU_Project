"use strict";

const db = require("../config/db");

class Product {
    constructor(body) {
        this.body = body;

    }
     async registerproduct(){
            return new Promise((resolve, reject) => {
                const query = "INSERT INTO Product(ProductName, ProductDetail, ProductImg, ProductCompo, ProductPrice, ProductSLevel, ProductAge) VALUES(?, ?, ?, ?, ?, ?, ?);";
                db.query(
                    query,
                    this.body,
                    (err) => {
                        if(err) reject(`${err}`);
                        resolve({ success: true});
                });
            });
        }
     async showproduct(){
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM Product;";
            db.query(
                query,
                (err, data) => {
                    if(err) reject(`${err}`);
                    resolve(data);
            });
        });
    }
    async showdetailproduct(){
        //console.log(this.body);
        return new Promise((resolve, reject) => {
            const query1 = `SELECT Review.ProductNum, productName, productDetail, productImg, productCompo, productPrice, productSLevel, ReviewNum, ReviewTitle, ReviewDetail, ReviewScore, ReviewImg, Gender, Age_range, Nickname FROM Review, Product, Member 
            WHERE Review.ProductNum = Product.ProductNum AND Review.MemberNum = Member.MemberNum AND Review.ProductNum='&{this.body}';`;
            db.query(
                query1,
                (err, data) => {
                    if(err) reject(`${err}`);
                    console.log(data); 
            });
        });
    }
    }




module.exports = Product;
