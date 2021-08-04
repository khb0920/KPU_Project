"use strict";

const express = require("express"); 
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
dotenv.config();
const home = require("./routes/home");



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Headers", "X-Requested-With");
       res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
       next();
   });
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/image", express.static("./upload"));
app.use("/", home);


module.exports = app;
