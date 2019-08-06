var invoice=require("../model/invoice_model");
var express = require("express");
var router = express.Router();
var detail=require('../model/invoiceDetail_model');

router.get("",function(req,res,next){
  invoice.getAllInvoice(function(err,rows){
      if(err){
        res.json(err);
      }
      else{
        res.json(rows);
      }
  });
});
router.post("/", function(req, res, next) { 
  console.log("hello");
  console.log(req.body);   
    invoice.addInvoice(req.body,function(err,rows) {
      if (err) {
        res.json(err);
      } 
      else {
        //res.json(rows);
        console.log(rows);
        detail.addInvoiceDetail(rows.insertId,req.body,function(err,rows){
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
  
router.get("/:Tableno",function(req,res,next){
  invoice.getInvoiceByTable(req.params.Tableno,function(err,rows){
      if(err){
        res.json(err);
      }
      else{
        res.json(rows);
      }
  });
});
  module.exports=router;