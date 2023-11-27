import nodemailer from "nodemailer";

const mailer = async (message) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    });

    const info = await transporter.sendMail(message);
    console.log('Email sent: ', info);
  } catch (err) {
    throw err; 
  }
};

export const send = async (req, res, next) => {
  try {
    if (!req.body.email) return res.sendStatus(400);
    const message = {
      to: req.body.email,
      subject: 'Congratulations! You are successfully registered on our site',
      text: `Congratulations! You are successfully registered on our site
            login: ${req.body.email}
            no reply`
    };

    await mailer(message);
    res.status(200).send("done");
  } catch (err) {
    next(err);
  }
};

export const contact = async (req, res, next) => {
  try {
    if (!req.body.email || !req.body.text) return res.sendStatus(400);
    const message = {
      to: process.env.EMAIL,
      subject: 'Feedback from client',
      text: `From login: ${req.body.email}
            Text: ${req.body.text}`
    };

    await mailer(message);
    res.status(200).send("done");
  } catch (err) {
    next(err);
  }
};