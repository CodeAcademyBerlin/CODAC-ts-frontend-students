//@ts-nocheck
export default function (req, res) {
  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    secure: 'true',
    auth: {
      user: 'examaple@gmail.com', //Replace with your email address
      pass: 'example', // Replace with the password to your email.
    },
  });
  const mailData = {
    from: 'Chat API',
    to: req.body.email,
    subject: `Verify your email`,
    text: req.body.message,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err)
      return res.status(500).json({ message: `an error occurred ${err}` });
    res.status(200).json({ message: info });
    de;
  });
}
