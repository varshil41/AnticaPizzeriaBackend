var item2 = require("../model/item_model");
var express = require("express");
var router = express.Router();

router.get('/:name/:id',function(req,res,next){
      item2.getItemByType(req.params.name,req.params.id,function(err,rows){
          if(err){
              res.json(err);
          }
          else{
              res.json(rows);
          }
      });
    });

router.get('/:id',function(req,res,next){
        item2.getItemByNotID(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
      });
  
module.exports=router;