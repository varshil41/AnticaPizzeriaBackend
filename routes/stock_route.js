var stock = require("../model/stock_model");
var express = require("express");
var router = express.Router();

router.get('',function(req,res,next){
    stock.getAllStock(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.get("/:id",function(req,res,next){
    stock.GetStockById(req.params.id,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }

    });
});
router.post("",function(req,res,next){
    stock.AddStock(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.put("",function(req,res,next){
    stock.UpdateStock(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.delete("/:id",function(req,res,next){
    stock.DeleteStock(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


module.exports=router;