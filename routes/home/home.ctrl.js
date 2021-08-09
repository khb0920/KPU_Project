"use strict";

const User = require("../../models/User");
const Product = require("../../models/Product");

const db = require("../../config/db");
const { response } = require("express");

const url = require("url");
const { query } = require("../../config/db");




const output = {
    root: (req, res) => {
        
    },
    register: (req, res) => {
       
    },
    product: async(req, res) =>{
        const product = new Product();
        const productresponse = await product.showproduct();
        res.json(productresponse);
    },
    productdetail: async(req, res) => {
        const urlObj = url.parse(req.url, true).query;
        const product = new Product(urlObj.id);
        //console.log(product);
        const productresponse = await product.showdetailproduct();
        res.json(productresponse);
    },
};



const process = {
    /*login: async(req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },*/
    register: async(req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    },
    registerproduct: async(req, res)=> {
        try{
        const image ="/image/" + req.file.filename;
        //console.log(req.file.filename);
        const productinfo = [req.body.name ,req.body.detail, image, req.body.compo, req.body.price, req.body.slevel, req.body.age];
        
        const product = new Product(productinfo);
        const productresponse = await product.registerproduct();
        return res.json(productresponse);                             
       
        }catch(err){
            return{success: false ,msg:console.error()};
        }
    },
};

module.exports ={
   output,
   process,
};