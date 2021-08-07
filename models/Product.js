"use strict";

//const UserStorage = require("./UserStorage");
const db = require("../config/db");
const fs = require('fs'); 

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
    }




module.exports = Product;
