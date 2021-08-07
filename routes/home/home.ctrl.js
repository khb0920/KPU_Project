"use strict";

const User = require("../../models/User");
const Product = require("../../models/Product");

const db = require("../../config/db");
const { response } = require("express");
const { forEach } = require("async");





const output = {
    root: (req, res) => {
        
    },
    register: (req, res) => {
       
    },
    product: async(req, res) =>{
         const product = new Product();
         const productresponse = await product.showproduct();
         
        //  productInfo.forEach({
        //      console.log(productInfo);
        //  });
         //const productresponse =(product)
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
        const image ="/image/" + req.file.filename;
        //console.log(req.file.filename);
        const productinfo = [req.body.name ,req.body.detail, image, req.body.compo, req.body.price, req.body.slevel, req.body.age];
        
        const product = new Product(productinfo);
        const productresponse = await product.registerproduct();
        return res.json(productresponse);                             
       

    },
};

module.exports ={
   output,
   process,
};