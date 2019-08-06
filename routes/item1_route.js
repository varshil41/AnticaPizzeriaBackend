var item = require("../model/Item_model");
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


router.get('/:name?',function(req,res,next){
      item.getItemByName(req.params.name,function(err,rows){
          if(err){
              res.json(err);
          }
          else{
              res.json(rows);
          }
      });
});

router.put('',upload.single('itemIMG'),function(req,res,next){
    item.updateItemWithImage(req.body,req.file.filename,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;