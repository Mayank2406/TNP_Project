const nodemailer = require('nodemailer');

const mailer=async (email,msgSubject,msg)=>{

    return new Promise((resolve,reject)=>{
        console.log(email+"\n"+msgSubject+"\n"+msg+"\n");

        let mailTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mmmut.tnp.info@gmail.com',
                pass: 'crackPassw0r4'
            }
        });

        let mailDetails = {
            from: 'MMMUT TnP Info',
            to: email,
            subject: msgSubject,
            html: msg
        };
        let f=true;
        mailTransporter.sendMail(mailDetails, function(err, data) {
            if(err) {
                console.log("err"+err);
                resolve(false)
                //return f;
            } else {
                console.log("done")
                resolve(true)
            // return f;
            }
        });
        
    })
        
    
}

module.exports={mailer};