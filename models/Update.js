"use strict";

const db = require("../config/db");

class Update{
    constructor(body){
        this.body = body;
    }
    async updatereview(){
        //console.log(this.body[4]);
        return new Promise((resolve, reject) => {
            const query = `UPDATE Review set ReviewTitle = "${this.body[1]}", ReviewDetail="${this.body[2]}", ReviewScore="${this.body[3]}", ReviewImg="${this.body[4]}" where ReviewNum = ${this.body[0]};`;
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
module.exports = Update;
