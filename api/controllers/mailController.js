import nodemailer from "nodemailer"
 
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'kvakvortal@gmail.com',
        pass: 'rlqkwfhgjaknghdo'
    }},
    {
        from: 'SkyWings Express <SkyWingsExpress@gmail.com>',
    }
)

const mailer = message => {
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