"use strict";

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
dotenv.config();
const home = require("./routes/home");


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", home);

module.exports = app;
