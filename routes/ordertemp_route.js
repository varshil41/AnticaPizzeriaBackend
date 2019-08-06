var ordertemp = require("../model/ordertemp_model");
var express = require("express");
var router = express.Router();

router.get('',function(req,res,next){
    ordertemp.getAllOrder(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.get('/:no',function(req,res,next){
    ordertemp.getAllOrderByTable(req.params.no,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.post('',function(req,res,next){ 
    ordertemp.addOrder(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.delete("/:id",function(req,res,next){
    ordertemp.deleteOrder(req.params.id,function(err,rows){
      if(err){
        res.json(err);
      }
      else{
        res.json(rows);
      }
    });
  });
  router.put("/",function(req,res,next){
    ordertemp.updateOrder(req.body,function(err,rows){
      if(err){
        res.json(err);
      }
      else{
        res.json(rows);
      }
    });
  });
module.exports=router;