"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const home = require("./routes/home");


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", home);

module.exports = app;
