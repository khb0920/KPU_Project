"use strict";

const express = require("express");
const ctrl = require("./home.ctrl");
const multer = require("multer");           //이미지 업로드 위한 multer 모듈
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "./upload");
        },
        filename: function (req, file, cb) {
            cb(null, new Date().valueOf() + "_" + file.originalname);
        }
    }
    ),
});
const router = express.Router();


router.get("/", ctrl.output.root);
//router.get("/login", ctrl.output.login);
router.get("/Member", ctrl.output.member);
router.get("/Product", ctrl.output.product);
router.get("/Product/detail/:productid", ctrl.output.productdetail);
router.get("/Review", ctrl.output.review);
router.get("/Rank", ctrl.output.rank);



router.post("/Member", ctrl.process.registermember);
router.post("/Product", upload.single("image"), ctrl.process.registerproduct);
router.post("/Review", upload.single("image"), ctrl.process.registerreview);
router.post("/Request", ctrl.process.registerrequest);
module.exports = router;