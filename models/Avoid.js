"use strict";

const db = require("../config/db");

class Avoid{
    constructor(body){
        this.body = body;
    }
    async showavoid(){
            return new Promise((resolve, reject) => {
            const query = `SELECT * FROM Product WHERE ProductA = "${this.body.avoidid}";`;
            db.query(
                query,
                this.body,
                (err, data) => {
                    if(err) reject(`${err}`);
                    resolve(data);
            });
        });
     }
}

module.exports = Avoid;