"use strict";

const db = require("../config/db");

class Product {
    constructor(body) {
        this.body = body;

    }
     async registerproduct(){
            return new Promise((resolve, reject) => {
                const query = "INSERT INTO Product(ProductName, ProductDetail, ProductImg, ProductCompo, ProductPrice, ProductSLevel, ProductAge, ProductF1, ProductF2, ProductF3, ProductA) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
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
            const query = "SELECT * FROM Product ORDER BY ProductNum DESC;";
            db.query(
                query,
                (err, data) => {
                    if(err) reject(`${err}`);
                    resolve(data);
            });
        });
    }
    async showdetailproduct(){
        return new Promise((resolve, reject) => {
            const query1 = `SELECT Review.ProductNum, ProductName, ProductDetail, ProductImg, ProductCompo, ProductPrice, ProductSLevel, ProductF1, ProductF2, ProductF3, ReviewNum, ReviewTitle, ReviewDetail, ReviewScore, ReviewImg, Gender, Age_range, Nickname FROM Review, Product, Member 
            WHERE Review.ProductNum = Product.ProductNum AND Review.Email = Member.Email AND Review.ProductNum=${this.body.productid};`;
            const query2 = `SELECT * FROM Product WHERE Product.ProductNum = ${this.body.productid};`;
            db.query(
                query1+query2,
                (err, data) => {
                    if(err) reject(`${err}`);
                    resolve(data); 
            });
        });
    }
    }


module.exports = Product;
