const nodemailer = require("nodemailer");

// step 1
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sahil242927@gmail.com",
    pass: "sahilasma@27may"
  }
});

// step 2
let mailOptions = {
  from: "sahil242927@gmail.com",
  to:
    "asma242927@gmail.com, rida242927@yahoo.com, kashaf42927@yahoo.com, sahil242927@gmail.com",
  subject: "test mail",
  text: "test mail"
};

transporter.sendMail(mailOptions, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Mail Sent");
  }
});
