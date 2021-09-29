"use strict";

const express = require("express");
const ctrl = require("./home.ctrl");
const multer = require("multer");           //이미지 업로드 위한 multer 모듈
const { urlencoded } = require("express");
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
router.get("/Member/:memberid" ,ctrl.output.member);    
router.get("/Product", ctrl.output.product);
router.get("/Product/detail/:productid", ctrl.output.productdetail);
router.get("/Review", ctrl.output.review);
router.get("/Rank", ctrl.output.rank);
router.get("/Request", ctrl.output.requestPD);
router.get("/Avoid/:avoidid" ,ctrl.output.avoid);    


router.post("/Update/:reviewid", upload.single("image"), ctrl.process.update);

router.post("/Member", ctrl.process.registermember);
router.post("/Product", upload.single("image"), ctrl.process.registerproduct);
router.post("/Review", upload.single("image"), ctrl.process.registerreview);
router.post("/Request", ctrl.process.registerrequest);

router.post("/Delete/:reviewid", ctrl.process.delete);

module.exports = router;