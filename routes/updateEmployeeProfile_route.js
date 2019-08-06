var employee = require("../model/employee_model");
var express = require("express");
var router = express.Router();
var multer = require("multer");
var path = require("path");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
  cb(null, 'public/images/Emp_images');
  },
  filename: (req, file, cb) => {
  x=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
  cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
  }
  });
  var upload = multer({storage: storage});

  router.put("/" ,upload.single('EmpIMG'),function(req, res, next) {
      console.log("hello");
    employee.updateWithEmployeeImage(req.body,req.file.filename, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  module.exports=router;