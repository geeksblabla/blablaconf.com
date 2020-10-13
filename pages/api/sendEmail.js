// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// const sgMail = require("@sendgrid/mail");
const mailgun = require("mailgun-js");

export default (req, res) => {
  if (req.method === "POST") {
    const email = req.body.email;
    const DOMAIN = "sandboxdc7614a5916940c0844f37df03339f1d.mailgun.org";
    const mg = mailgun({
      apiKey: process.env.NEXT_PUBLIC_MAIL_GUN_API_KEY,
      domain: DOMAIN,
    });
    const data = {
      to: email,
      from: "registration@blablaconf.com",
      subject: "BlaBlaConf Registration",
      text: "Welcome to BlaBlaConf",
      html: `<strong>مرحبا بكم فبلابلا كونف هاد الإيمايل كايعني بلي راك تسجلتي معانا ف الكونفيرونص و لي غادي تكون ما بين 20 و 24 أكتوبر على الساعة السادسة بتوقيت المغرب، للمزيد من المعلومات تابعونا على صفحتنا الرسمية في الفايسبوك.
      <br/>
      <a href="https://www.facebook.com/geeksblabla">geeksblabla</a>
     
      </strong>`,
    };
    mg.messages().send(data, function (error, body) {
      console.log(body);
    });
    res.json({ result: "ok" });
  }
};
