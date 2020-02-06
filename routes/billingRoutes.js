const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");
module.exports = app => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    /* making a charge to user */
    const charge = await stripe.charges.create({
      shipping: {
        name: "Jenny Rosen",
        address: {
          line1: "510 Townsend St",
          postal_code: "98140",
          city: "San Francisco",
          state: "CA",
          country: "US"
        }
      },
      amount: 500,
      currency: "usd",
      description: "$5 dollars for 5 credits",
      source: req.body.id // type of payment like card or netbanking
    });

    // adding credits and saving to db
    req.user.credits += 5;
    //save() function returns the latest updated user Model data.
    const user = await req.user.save();

    res.send(user);
  });
};
