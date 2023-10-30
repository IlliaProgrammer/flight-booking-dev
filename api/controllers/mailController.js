import nodemailer from "nodemailer"
 


const mailer  = message => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }},
        {
            from: 'SkyWings Express <SkyWingsExpress@gmail.com>',
        }
    )
    transporter.sendMail(message, (err, info) => {
        if(err) return console.log(err)
        console.log('Email sent: ', info)
    })
}


export const send = (req, res, next) =>{
    try{
        if(!req.body.email ) return res.sendStatus(400)   
        const message = {        
            to: req.body.email,
            subject: 'Congratulations! You are successfully registred on our site',
            text: `Congratulations! You are successfully registred on our site
            login: ${req.body.email}
            no reply`
        }
    mailer(message)
    res.status(200).send("done") 
    }catch(err){
        next(err)
    }
}


export const contact = (req, res, next) =>{
    try{
        if(!req.body.email || !req.body.text) return res.sendStatus(400)   
        const message = {        
            to: process.env.EMAIL,
            subject: 'Feedback from client',
            text: `From login: ${req.body.email}
            Text: ${req.body.text}
           `
        }
    mailer(message)
    res.status(200).send("done") 
    }catch(err){
        next(err)
    }
}