export default async function (req, res) {
  await require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = await nodemailer.createTransport({
    port: 25,
    host: "smtp.gmail.com",
    auth: {
      user: "jmorillolabour@gmail.com",
      pass: process.env.password
    },
    secure: false,
    tls: {
        rejectUnauthorized: false
    }
  });

  const mailData = {
    from: req.body.mail,
    to: 'jmorillolabour@gmail.com',
    subject: `Message From ${req.body.nombre}`,
    text: req.body.mensaje + " | Sent from: " + req.body.mail + " | Contact Number: " + req.body.telefono,
    html: `<div>${req.body.mensaje}</div><p>Sent from:
    ${req.body.mail} | Contact Number: ${req.body.telefono}</p>`
  }

  await transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })


}
