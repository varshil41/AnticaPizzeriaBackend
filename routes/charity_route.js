var charity=require('../model/charity_model');
var express=require('express');
var router=express.Router();

router.get('/:id?',function(req,res,next){
    if(req.params.id){
        charity.getNgoById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }else{
                res.json(rows);
            }
        });
    }
    else{
        charity.getAllNgo(function(err,rows){
            if(err){
                res.json(err);
            }else{
                res.json(rows);
            }
        });
    }
});


router.post('',function(req,res,next){
    charity.InsertNgo(req.body,function(err,rows){
        if(err){
            res.json(err);
        }else{
            res.json(rows);
        }
    });
});

router.put('/',function(req,res,next){
    charity.updateNgo(req.body,function(err,rows){
        if(err){
            res.json(err);
        }else{
            res.json(rows);
        }
    });
});

router.delete('/:id',function(req,res,next){
    charity.deleteNgo(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }else{
            res.json(rows);
        }
    });
});
module.exports=router;