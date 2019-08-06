var nodemailer = require('nodemailer');

var demo={

 sendMail:function(demo,callback){   
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'anticapizzeria2018@gmail.com',
    pass: 'anticapizzeriapmv'
  }
});

var mailOptions = {
  from: 'anticapizzeria2018@gmail.com',
  to: demo.to,
  subject:demo.subject,
  html:demo.message
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

}
}
module.exports=demo;