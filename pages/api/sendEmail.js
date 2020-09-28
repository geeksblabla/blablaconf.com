// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// const sgMail = require("@sendgrid/mail");
const mailgun = require("mailgun-js");

export default (req, res) => {
  if (req.method === "POST") {
    const email = req.body.email;
    const DOMAIN = "mail.blablaconf.com";
    const mg = mailgun({
      apiKey: process.env.NEXT_PUBLIC_MAIL_GUN_API_KEY,
      domain: DOMAIN,
    });
    const data = {
      to: email,
      from: "regitration@blablaconf.com",
      subject: "BlaBlaConf Registration",
      text: "Welcome to BlaBlaConf",
      html: "<strong>Welcome to BlaBlaConf</strong>",
    };
    mg.messages().send(data, function (error, body) {
      console.log(body);
    }); 
    res.json({ result: "ok" });
  }
};
