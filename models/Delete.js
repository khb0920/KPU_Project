"use strict";

const db = require("../config/db");

class Delete{
    constructor(body){
        this.body = body;
    }
    async deletereview(){
            return new Promise((resolve, reject) => {
            const query = `DELETE from Review where ReviewNum = ${this.body[0]}; UPDATE Product SET ProductCount = ProductCount - 1 WHERE ProductNum=${this.body[1]};`;
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

module.exports = Delete;