var item = require("../model/item_model");
var express = require("express");
var router = express.Router();
var multer = require("multer");
var path = require("path");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
  cb(null, 'public/images/ItemImages');
  },
  filename: (req, file, cb) => {
  x=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
  cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
  }
  });
  var upload = multer({storage: storage});

  router.get('/:id?',function(req,res,next){
      if(req.params.id){
        item.getItemByID(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
      }
      else{
        item.getAllItems(function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
      }
      
  });

router.post('',upload.single('itemIMG'),function(req,res,next){
    item.addItems(req.body,req.file.filename,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.delete('/:id',function(req,res,next){
    item.deleteItem(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.put('',function(req,res,next){
    item.updateItem(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
  module.exports=router;