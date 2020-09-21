// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const sgMail = require('@sendgrid/mail');

export default (req, res) => {

  if (req.method === 'POST') {
    const email = req.body.email;

    sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);
    const msg = {
      to: email,
      from: 'regitration@blablaconf.com',
      subject: 'BlaBlaConf Registration',
      text: 'Welcome to BlaBlaConf',
      html: '<strong>Welcome to BlaBlaConf</strong>',
    };
    
    sgMail.send(msg);
    res.json({ result: 'ok' })
  }


}
