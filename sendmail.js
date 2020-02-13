const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);
const msg = {
  to: "kashaf242927@yahoo.com",
  from: "kashaf242927@yahoo.com",
  subject: "Sending with Twilio SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>"
};
sgMail
  .send(msg)
  .then(msg => {
    console.log("Mail Sent");
  })
  .catch(error => {
    //Log friendly error
    console.error(error.toString());

    //Extract error msg
    const { message, code, response } = error;

    //Extract response msg
    const { headers, body } = response;
  });
