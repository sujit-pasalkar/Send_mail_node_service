const express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

router.post('/mailsending', function (req, res) {
    console.log("value=" + JSON.stringify(req.body))
    var email = req.body.email;
    var subject = req.body.subject;
    var text = req.body.text;

      var transporter = nodemailer.createTransport(smtpTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
              user: 'sujitpasalkar8@gmail.com',  // cmpny email id
              pass: '87936486..' // cmpny password
          }
      }));
  
      
      var mailOptions = {
          from: 'sujitpasalkar8@gmail.com',
          to: email,
          subject: subject, 
          text: text, 
      };
  
      transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
              var obj1 = {};
              obj1.type = "fail";
              console.log("err " + JSON.stringify(obj1));
              res.json(obj1);
          } else {
              var obj = {};
              obj.type = "success";
              console.log("success " + JSON.stringify(obj));
              res.json(obj);
          };
      });

});

module.exports = router;
