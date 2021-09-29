"use strict";

const User = require("../../models/User");
const Product = require("../../models/Product");
const Review = require("../../models/Review");
const Rank = require("../../models/Rank");
const Request = require("../../models/Request");
const Update = require("../../models/Update");
const Delete = require("../../models/Delete");
const Avoid = require("../../models/Avoid");
const db = require("../../config/db");
const { response } = require("express");

const url = require("url");
const { query } = require("../../config/db");




const output = {
    root: (req, res) => {
        
    },
    member: async(req, res) => {
        try{
        const member = new User(req.params);
        const memberresponse = await member.showmember();
        res.json(memberresponse);
        }catch(err){
            return{success: false ,msg:console.error()};
        }
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
    requestPD: async(req, res) =>{
        try{
        const requestPD = new Request();
        const requestPDresponse = await requestPD.showrequestPD();
        res.json(requestPDresponse);  
        }
        catch(err){
            return{success: false, msg:console.error()};
        }
    },
    avoid: async(req, res) =>{
        try{
        const avoidid = new Avoid(req.params);
        const avoidresponse = await avoidid.showavoid();
        res.json(avoidresponse);  
        }
        catch(err){
            return{success: false, msg: console.error()};
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
        const productinfo = [req.body.name ,req.body.detail, image, req.body.compo, req.body.price, req.body.slevel, req.body.age, req.body.productf1, req.body.productf2, req.body.productf3];
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
        const reviewinfo = [req.body.title, req.body.detail, req.body.score, image, req.body.product, req.body.email, req.body.id];
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
        const requsetresponse = await request.registerrequest();
        return res.json(requsetresponse);
        }catch(err){
            return{success: false, msg:console.error()};
        }
    },
    update: async(req, res) => {
        try{
        const image ="/image/" + req.file.filename;
        const reviewupdate = [req.params.reviewid, req.body.title, req.body.detail, req.body.score, image];
        const updateinfo = new Update(reviewupdate);
        const updateresponse = await updateinfo.updatereview();
        return res.json(updateresponse);
        }catch(err){
            return{success: false, msg:console.error()};
        }
    },
    delete: async(req,res) => {
        const id = [req.params.reviewid, req.body.productid];
        const deleteinfo = new Delete(id);
        const deleteresponse = await deleteinfo.deletereview();
        return res.json(deleteresponse);
    }
};

module.exports ={
   output,
   process,
};