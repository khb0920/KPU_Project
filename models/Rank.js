"use strict";

const db = require("../config/db");

class Rank{
    constructor(body){
        this.body = body;
    }
     async showrank(){
        return new Promise((resolve, reject) => {
            const query = "SELECT ProductNum, ProductName, ProductDetail, ProductImg, ProductCompo, ProductPrice, ProductSlevel, ProductAge FROM Product ORDER BY ProductCount desc LIMIT 2;";
            db.query(
                query,
                (err, data) => {
                    if(err) reject(`${err}`);
                    resolve(data);
                    //console.log(data);
            });
        });
    }

}

module.exports = Rank;
