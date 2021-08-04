"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");
const multer = require("multer");
const upload = multer({ dest: "./upload"});

router.get("/", ctrl.output.root);  
//router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.get("/Product", ctrl.output.product);

//router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);
//router.post("/Product", ctrl.process.registerproduct);
router.post("/Product",  upload.single("image"), ctrl.process.registerproduct);
//  => {
//     try {
//         ctrl.process.registerproduct(req.body);
//         ctrl.process.registerproduct   //reqfile , reqbody 따로따로 보내보기 
//     } catch (error) {
//         next(error);
//     }
// });
module.exports = router;    