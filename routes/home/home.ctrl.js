"use strict";

const User = require("../../models/User");
const Product = require("../../models/Product");
const Review = require("../../models/Review");
const Rank = require("../../models/Rank");
const Request = require("../../models/Request");
const db = require("../../config/db");
const { response } = require("express");

const url = require("url");
const { query } = require("../../config/db");




const output = {
    root: (req, res) => {
        
    },
    member: (req, res) => {
       
    },
    product: async(req, res) =>{
        try{
        const product = new Product();
        const productresponse = await product.showproduct();
        res.json(productresponse);
        }
        catch(err){
            return{success: false ,msg:console.error()};
        }
    },
    productdetail: async(req, res) => {
        try{
        const product = new Product(req.params);
        const productresponse = await product.showdetailproduct();
        res.json(productresponse);
        }
        catch(err){
            return{success: false ,msg:console.error()};
        }
    },
    review: async(req, res) =>{
        try{
        const review = new Review();
        const reviewresponse = await review.showreview();
        res.json(reviewresponse);
        }
        catch(err){
            return{success: false ,msg:console.error()};
        }
    },
    rank: async(req, res) =>{
        try{
        const rank = new Rank();
        const rankresponse = await rank.showrank();
        res.json(rankresponse);
        }
        catch(err){
            return{success: false ,msg:console.error()};
        }
    },
};



const process = {
    /*login: async(req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },*/
    registermember: async(req, res) => {
        try{
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
        }catch(err){
            return{success: false ,msg:console.error()};
        }
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
    registerreview: async(req, res) => {
        try{
        const image ="/image/" +req.file.filename;
        const reviewinfo = [req.body.title, req.body.detail, req.body.score, image, req.body.member, req.body.product];
        const review = new Review(reviewinfo);
        //console.log(review);
        const reviewresponse = await review.registerreview();
        return res.json(reviewresponse);
        }catch(err){
            return{success: false, msg:console.error()};
        }
    },
    registerrequest: async(req, res) => {
        try{
        const request = new Request(req.body);
        const requsetresponse = await request.registerreview();
        return res.json(requsetresponse);
        }catch(err){
            return{success: false, msg:console.error()};
        }
    }
};

module.exports ={
   output,
   process,
};