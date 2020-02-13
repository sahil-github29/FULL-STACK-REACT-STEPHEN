const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Survey = mongoose.model("surveys");
const NodeMailer = require("../services/NodeMailer");
const surveyTemplate = require("../services/emailTemplests/surveyTemplate");

module.exports = app => {
  app.get("/api/surveys/thanks", (req, res) => {
    res.send("Thanks for voting");
  });

  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    // creating an instance of survey
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map(email => ({ email })),
      _user: req.user.id,
      dateSent: Date.now()
    });
    //greate place to send mail
    try {
      const mailer = new NodeMailer(survey, surveyTemplate(survey));
      await mailer.send();
      console.log("Mail Sent Successfully");
      await survey.save();

      // deducting 1 credit from our user for sending a survey
      req.user.credits -= 1;

      // saving and returning user with updated credits
      const user = await req.user.save();

      res.send(user);
    } catch (error) {
      console.log(error);
      // 422 => something is wrong with the data a user sent us
      res.status(422).send(error);
    }
  });
};
