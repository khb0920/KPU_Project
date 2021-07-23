"use strict";

const { response } = require("express");
const UserStorage = require("./UserStorage");

class User  {
    constructor(body){
        this.body =body;
        
    }

    async login() {
        
        try {
        const kakao_account = await UserStorage.getUserInfo(this.body.kakao_account);
        
        if(kakao_account) {
            if(kakao_account.Nickname === this.body.kakao_account ){
                return {success: true, msg:"로그인 성공"};
            }
            return {success: false, msg:"비밀번호가 틀렸습니다"};
        }
        return {success: false, msg: "존재하지 않는 아이디입니다."};
    } catch (err) {
        return {success: false, msg: err};
    } 
    }

    async register() {
        
        try{
        const kakao_account = await UserStorage.getUserInfo(this.body.kakao_account);
        const response = await UserStorage.save(this.body);
        if(kakao_account) {
            if(kakao_account.Nickname === this.body.kakao_account){
                return {success: false, msg:"이미 회원가입이 되어있습니다."};
            }
            return{response, msg:"회원가입 완료. "}; 
        }
        } catch (err) {
            return {success: false, msg: err};
            
        }
         }
        
    }



module.exports =User;