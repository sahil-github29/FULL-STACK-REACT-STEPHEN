const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cookieSession = require("cookie-session");
const keys = require("./config/keys");
require("./models/User");
require("./models/Survey");
require("./services/passport");

const app = express();
app.use(bodyParser.json());
app.use(
  cookieSession({
    /* 30 day, 24 hours, 60 minutes in an hour, 60 seconds in an minute, 1000 milliseconds */
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  // Express will server up production assets
  //like our main.js or main.css file
  app.use(express.static("client/build"));

  // Express will server up the index.html file
  // if it doesn't recognize the route
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log("Listening on port, ", PORT);
});
