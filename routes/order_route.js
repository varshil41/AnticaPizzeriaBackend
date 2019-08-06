var order = require("../model/order_model");
var express = require("express");
var router = express.Router();

router.get('',function(req,res,next){
    order.getAllOrder(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.get('/:no',function(req,res,next){
    order.getAllOrderByTable(req.params.no,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.post('',function(req,res,next){ 
    order.addOrder(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.delete("/:id",function(req,res,next){
    order.deleteOneOrder(req.params.id,function(err,rows){
      if(err){
        res.json(err);
      }
      else{
        res.json(rows);
      }
    });
});
router.put("/",function(req,res,next){
    order.updateOrder(req.body,function(err,rows){
      if(err){
        res.json(err);
      }
      else{
        res.json(rows);
      }
    });
  });
module.exports=router;