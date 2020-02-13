const nodemailer = require("nodemailer");

class NodeMailer {
  constructor({ subject, recipients }, content) {
    this.transporter = this.setTransporter();
    this.mailOptions = {
      from: "sahil242927@gmail.com",
      subject: subject,
      html: content,
      to: [
        ...recipients.map(({ email }) => email),
        "kashaf242927@yahoo.com",
        "rida242927@yahoo.com"
      ]
    };
  }

  setTransporter() {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "sahil242927@gmail.com",
        pass: "sahilasma@27may"
      }
    });
  }

  send() {
    return this.transporter.sendMail(this.mailOptions);
  }
}

module.exports = NodeMailer;
