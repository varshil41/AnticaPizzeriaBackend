var ordertemp1 = require("../model/ordertemp_model");
var express = require("express");
var router = express.Router();

router.get('/:status',function(req,res,next){
    ordertemp1.getOrderByStatus(req.params.status,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.put("/",function(req,res,next){
    ordertemp1.updateqtyremarkorder(req.body,function(err,rows){
      if(err){
        res.json(err);
      }
      else{
        res.json(rows);
      }
    });
  });
module.exports=router;