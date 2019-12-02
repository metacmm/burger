var express = require("express");
var burger = require("../models/burger");
var router = express.Router();

router.get("/", function(req, res){
    burger.all(function(data){
        console.log("controller.js");
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.get("/api/all", function(req, res){
    
});

module.exports = router;