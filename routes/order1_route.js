var order1 = require("../model/order_model");
var express = require("express");
var router = express.Router();

router.get('/:status',function(req,res,next){
    order1.getOrderByStatus(req.params.status,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.post('/',function(req,res,next){
    order1.deleteOrder(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});


module.exports=router;