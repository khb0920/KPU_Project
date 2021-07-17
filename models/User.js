"use strict";

const { response } = require("express");
const UserStorage = require("./UserStorage");

class User  {
    constructor(body){
        this.body =body;
    }

    async login() {
        
        const { id, psword} = await UserStorage.getUserInfo(this.body.id);
        if(id) {
            if(id === this.body.id && psword === this.body.psword){
                return {success: true, msg:"로그인 성공"};
            }
            return {success: false, msg:"비밀번호가 틀렸습니다"};
        }
        return {success: false, msg: "존재하지 않는 아이디입니다."};
    } 

    async register() {
        
            const response = await UserStorage.save(this.body);
            return(response);
        }
        
    }



module.exports =User;