/**
 * Created by TuanAnh on 10/7/2017.
 */
var nodemailder = require('nodemailer');
var EmailTemplate = require('email-templates').EmailTemplate;

module.exports ={
  sendMail:function(mail,cb) {
    var transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // secure:true for port 465, secure:false for port 587
      auth: {
        user: 'yugenvn@gmail.com',
        pass: '9872141166'
      }
    });
      var template = new EmailTemplate(mail.templateUrl);
    template.render(mail.render,function (err,result) {
        if(err) return cb(err);
        mail.mailOptions.html = result.html;
      transporter.sendMail(mail.mailOptions,function (error,info) {
        if(error) return(error);
        cb();
      })
    })



  }

};
