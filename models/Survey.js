const mongoose = require("mongoose");
const RecipientSchema = require("./Recipient");
const { Schema } = mongoose;

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema], // array of Recipient Schema
  yes: { type: Number, default: false },
  no: { type: Number, default: false },
  // Making relationship with User Schema
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateSent: Date,
  lastResponded: Date
});

module.exports = mongoose.model("surveys", surveySchema);
