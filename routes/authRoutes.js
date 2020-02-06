const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    }),
    (req, res) => {
      console.log(req.user);
    }
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
  app.get("/api/current_user_test", (req, res) => {
    res.send(req.googleId);
  });
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
