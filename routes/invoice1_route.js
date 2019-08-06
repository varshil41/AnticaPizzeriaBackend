var invoice1=require("../model/invoice_model");
var express = require("express");
var router = express.Router();
var detail=require('../model/invoiceDetail_model');

router.get("/:mode",function(req,res,next){
  invoice1.getInvoiceByMode(req.params.mode,function(err,rows){
      if(err){
        res.json(err);
      }
      else{
        res.json(rows);
      }
  });
});
  module.exports=router;