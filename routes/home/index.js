"use strict";

const express = require("express");
const ctrl = require("./home.ctrl");
const multer = require("multer");           //이미지 업로드 위한 multer 모듈
const upload = multer({ 
                        storage: multer.diskStorage({
                        destination: function (req, file, cb){
                            cb(null, "./upload");
                        },
                        filename: function (req, file, cb){
                            cb(null, new Date().valueOf()+"_"+file.originalname);
                        }
                        }
                        ),
                     });     
const router = express.Router();
router.get("/", ctrl.output.root);  
//router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.get("/Product", ctrl.output.product);
router.get("/Product/detail", ctrl.output.productdetail);


router.post("/register", ctrl.process.register);
router.post("/Product", upload.single("image"), ctrl.process.registerproduct);

module.exports = router; 