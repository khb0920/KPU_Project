"use strict";

const { reject } = require("async");
const db = require("../config/db");

class UserStorage {

     static getUserInfo(id) {
            return new Promise((resolve, reject) => {
                const query = "SELECT * FROM Member WHERE MemberName = ?;";
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`);
                resolve(data[0]);   
            });
            });
        }

        static async save(userInfo){
            return new Promise((resolve, reject) => {
                const query = "INSERT INTO Member(MemberName, MemberPW) VALUES(?, ?);";
            db.query(
                query,
                [userInfo.id, userInfo.psword],
                (err) => {
                if (err) reject(`${err}`);
                resolve({ success: true });
            });
            });
                
        }
    }
    
    
    module.exports = UserStorage;