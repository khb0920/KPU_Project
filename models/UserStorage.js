"use strict";
const { reject } = require("async");
const { response } = require("express");
const db = require("../config/db");

class UserStorage {
    constructor(body){
        this.body = body;
    }
        static getUserInfo(email) {
           return new Promise((resolve, reject) => {
                 const query = "SELECT * FROM Member WHERE Email = ?;";
                 db.query(query, [email], (err, data) => {
                 if (err) reject(err);
                 resolve(data[0]);   
              });
              });
            }
            
        static async save(userinfo){
             return new Promise((resolve, reject) => {
                 const query = "INSERT INTO Member(Nickname, Age_range, Birthday, Email, Gender) VALUES(?, ?, ?, ?, ?);";
             db.query(
                 query,
                 [userinfo.nickname, userinfo.age_range, userinfo.birth, userinfo.email, userinfo.gender],
                 (err) => {
                 if (err) reject(`${err}`);
                 resolve({ success: true });
             });
             });
                
            } 
        

        }
    
            module.exports = UserStorage;
    
    