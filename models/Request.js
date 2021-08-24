"use strict";

const db = require("../config/db");

class Request{
    constructor(body){
        this.body = body;
    }
     async registerreview(){
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO RequestPD(RequestInfo) VALUES(?);`;
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

module.exports = Request;