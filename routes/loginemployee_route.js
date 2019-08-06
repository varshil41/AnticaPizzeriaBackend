var loginemp = require("../model/employee_model");
var express = require("express");
var router = express.Router();

router.post("",function(req,res,next){
    loginemp.GetEmployeeByIdPassword(req.body,function(err,rows){
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
  router.get("/:id",function(req,res,next){
    loginemp.ForgotPassword(req.params.id,function(err,rows){
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
  module.exports=router;