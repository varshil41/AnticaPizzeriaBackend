var category1=require("../model/category_model");
var express = require("express");
var router = express.Router();
router.post("/",function(req,res,next){
    category1.deleteAllCategory(req.body,function(err,rows){
      if(err){
        res.json(err);
      }
      else{
        res.json(rows);
      }
    });
  });
module.exports=router;