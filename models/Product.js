"use strict";

const reviewrespon = require("express");

const UserStorage = require("./UserStorage");
const db = require("../config/db");
 
class ProductInfo {
    constructor(body) {
        this.body = body;

    }
     async registerproduct(){
           // console.log(body);
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
    }




module.exports = ProductInfo;
