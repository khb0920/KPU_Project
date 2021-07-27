"use strict";

const { response } = require("express");
const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;

    }
    async register() {
        try {

            const id = await UserStorage.getUserInfo(this.body.email);
            if (typeof id === "undefined") {
                const response = await UserStorage.save(this.body);
                return (response);
            } else {
                return { success: false, alert: "이메일이 존재합니다." };
            }
        }
        catch (err) {
            return { success: false, msg: err };
            
        }
    }

}



module.exports = User;