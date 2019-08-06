var stock = require("../model/stock_model");
var express = require("express");
var router = express.Router();

router.post('',function(req,res,next){
    stock.getStockByIn(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            console.log(rows);
            res.json(rows);
        }
    });
});

module.exports=router;