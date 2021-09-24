"use strict";

const db = require("../config/db");

class Request{
    constructor(body){
        this.body = body;
    }
     async registerrequest(){
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO RequestPD(RequestInfo) VALUES(?);`;
            db.query(
                query,
                this.body.requestid,
                (err) => {
                    if(err) reject(`${err}`);
                    resolve({ success: true});
            });
        });
     }
     async showrequestPD(){
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM RequestPD ORDER BY RequestNum DESC`;
            db.query(
                query,
                (err, data) => {
                    if(err) reject(`${err}`);
                    resolve(data);
            });
        });
     }
    }

module.exports = Request;