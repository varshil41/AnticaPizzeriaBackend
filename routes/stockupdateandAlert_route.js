var stock = require("../model/stock_model");
var express = require("express");
var router = express.Router();

router.put('/',function(req,res,next){
    stock.UpdateStockWhenItemIsDone(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            stock.getAlertStock(req.body,function(err,rows){
                if(err){
                    res.json(err);
                }
                else{
                    res.json(rows);
                }
            });
        }
    });
});

router.get('/',function(req,res,next){
    stock.getAllAlertStock(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


module.exports=router;