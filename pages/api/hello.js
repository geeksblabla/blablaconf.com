// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const sgMail = require('@sendgrid/mail');

export default (req, res) => {
  // using Twilio SendGrid's v3 Node.js Library
  // https://github.com/sendgrid/sendgrid-nodejs
  sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);
  const msg = {
    to: 'sfoukahi@gmail.com',
    from: 'regitration@blablaconf.com',
    subject: 'BlaBlaConf Registration',
    text: 'Welcome to BlaBlaConf',
    html: '<strong>Welcome to BlaBlaConf</strong>',
  };
  sgMail.send(msg);
  res.statusCode = 200
  res.json({ name: process.env.NEXT_PUBLIC_SENDGRID_API_KEY })
}
