const nodemailer = require("nodemailer");
const keys = require("../config/keys");

class Mailer {
  constructor({ subject, recipients }, content) {
    this.from = "sahil242927@gmail.com";
    this.subject = subject;
    this.html = content;
    this.to = recipients.map(({ email }) => email);
  }

  send() {
    const { from, subject, html, to } = this;
    sgMail.sendMultiple({ from, subject, html, to });
  }
}
module.exports = Mailer;
