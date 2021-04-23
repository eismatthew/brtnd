const express = require("express");
const router = express.Router();
const passport = require("passport");

const Order = require("../../models/Order");

router.get(
  "/",
  passport.authenticate("bartender", { session: false }),
  (req, res) => {
    Order.find({})
      .sort({ date: -1 })
      .then((orders) => res.json(orders))
      .catch((err) =>
        res.status(404).json({ noOrdersFound: "No orders found" })
      );
  }
);

router.get(
  "/:user_id",
  passport.authenticate("user", { session: false }),
  (req, res) => {
    Order.find({ orderedBy: req.params.user_id })
      .then((orders) => res.json(orders))
      .catch((err) => res.status(404).json({ noUsersFound: "No user found." }));
  }
);

router.get(
  "/:bartender_id",
  passport.authenticate("bartender", { session: false }),
  (req, res) => {
    Order.find({ takenBy: req.params.bartender_id })
      .then((orders) => res.json(orders))
      .catch((err) => res.status(404).json({ noUsersFound: "No user found." }));
  }
);

router.get("/:id", (req, res) => {
  Order.findById(req.params.id)
    .then((order) => res.json(order))
    .catch((err) =>
      res.status(404).json({ noOrdersFound: "No order found with that ID" })
    );
});

router.delete(
  "/:id",
  passport.authenticate("user", { session: false }),
  (req, res) => {
    Order.findByIdAndDelete(req.params.id)
      .then((order) => res.json(order))
      .catch((err) =>
        res.status(404).json({ noOrdersFound: "No order found with that ID" })
      );
  }
);

router.patch(
  "/:id",
  passport.authenticate("user", { session: false }),
  (req, res) => {
    Order.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true },
      function (err, result) {
        if (err) {
          console.log(err);
        }
        console.log("Result: " + result);
        res.send(result);
      }
    );
  }
);

router.post(
  "/",
  passport.authenticate("user", { session: false }),
  (req, res) => {
    let theOrder;

    Order.find({ orderedBy: req.body.orderedBy })
      .then((order) => (theOrder = order))
      .then(() => {
        if (theOrder.length === 0) {
          const newOrder = new Order({
            headCount: req.body.headCount,
            tier: req.body.tier,
            location: req.body.location,
            notes: req.body.notes,
            price: req.body.price,
            createdAt: req.body.date,
            orderedBy: req.body.orderedBy,
          });
          newOrder.save().then((order) => res.json(order));
        } else {
          return res
            .status(400)
            .json({ order: "An order already exists for this user" });
        }
      });
  }
);

module.exports = router;
