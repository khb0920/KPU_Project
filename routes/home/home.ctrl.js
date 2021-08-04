"use strict";

const User = require("../../models/User");
const ProductInfo = require("../../models/Product");

const db = require("../../config/db");
const { response } = require("express");




const output = {
    root: (req, res) => {
        
    },

    /*login: (req, res) => {
        
    }, */
    register: (req, res) => {
       
    },
    product: (req, res) =>{
        db.query('SELECT * FROM PRODUCT', function (err, result) {
            res.send(results)
        });
    }
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
        const productinfo = [req.body.name ,req.body.detail, image, req.body.compo, req.body.price, req.body.slevel, req.body.age];
        
        const product = new ProductInfo(productinfo);
        //console.log(product);
        const productresponse = await product.registerproduct();
        // // const imginfo = new ProductInfo(image);
        // // const imgrespon = await imginfo.resisterim();
        return res.json(productresponse);                             
       

    },
};

module.exports ={
   output,
   process,
};