var employee1=require('../model/employee_model');
var express=require('express');
var router=express.Router();

router.post('',function(req,res,next){
    employee1.deleteAllEmployee(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.put('',function(req,res,next){
    employee1.changepass(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;