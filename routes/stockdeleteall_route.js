var stock1 = require('../model/stock_model');
var express = require('express');
var router = express.Router();

router.post("",function(req,res,next){
    stock1.DeleteMultiStock(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports = router;