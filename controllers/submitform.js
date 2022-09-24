const { table } = require('console');

path = require('path');
nodemailer = require('nodemailer')
require('dotenv').config({path: './config/.env'});
transporter = nodemailer.createTransport({
    service: 'OUTLOOK365',
    port:587,
    secure:false,
    auth:{
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
    }
})

module.exports ={

    //if no commission property is detected, create it and set to 0 (allowed to make commission request)
    getCommission: (req,res)=>{
        if(req.session.commission === undefined){
            req.session.commission = 0;
        }
        const commissionStatus = req.session.commission;
        res.render(path.resolve(__dirname+"/../"+"views/commission.ejs"),{commission:commissionStatus})
    },
    sendRequest: (req,res)=>{
        let formValidate = false;
        if(req.session.commission === 1){
            res.redirect("/");
        }
        else {
        
        }
        if(formValidate === true){
        req.session.commission = 1;
        let message = {
            from: process.env.NODEMAILER_USER,
            to: process.env.NODEMAILER_USER,
            subject: "Commission Request Form",
            text: "New Commission Request\n"+ "Client Name: " + req.body.name + "\n" + "Client email: " + req.body.email +"\n" + "Client Phone: " + req.body.phone + "\n" + "Description: " + req.body.description,
        }
        transporter.sendMail(message);
        res.redirect("/commission")
        }
    }
}