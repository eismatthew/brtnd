const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const Order = require("../../models/Order");
const validateOrderInput = require("../../validation/order");

// 607dc7f1bfb7c615c6304ba0

router.get("/", (req, res) => {
  Order.find()
    .sort({ date: -1 })
    .then((orders) =>
      orders.length !== 0
        ? res.json(orders)
        : res.json({ noOrdersFound: "No orders found" })
    );
});

router.get("/user/:user_id", (req, res) => {
  console.log(req.params);

  Order.find({ user: req.params.user_id })
    .then((orders) =>
      orders.length !== 0
        ? res.json(orders)
        : res.json({ noOrdersFound: "No orders found" })
    )
    .catch((err) => res.status(404).json({ noUsersFound: "No user found." }));
});

router.get("/:id", (req, res) => {
  Order.findById(req.params.id)
    .then((order) => res.json(order))
    .catch((err) =>
      res.status(404).json({ noOrdersFound: "No order found with that ID" })
    );
});

router.delete("/:id", (req, res) => {
  Order.findByIdAndDelete(req.params.id)
    .then((order) => order ? res.status(404).json({noOrdersFound: "No order found with that ID"}) : res.json(order)) //deleting?
    .catch((err) =>
      res.status(404).json({ noOrdersFound: "No order found with that ID" })
    );
});

router.post(
  "/",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // const { errors, isValid } = validateOrderInput(req.body);

    // if (!isValid) {
    //   return res.status(400).json(errors);
    // }
console.log(res)
// console.log(req.user.id)

    Order.find({ user: req.body.orderedBy }).then((order) => {
      if (order) {
        return res
          .status(400)
          .json({ order: "An order already exists for this user" });
      } else {
        const newOrder = new Order({
          headCount: req.body.headCount,
          tier: req.body.tier,
          location: req.body.location,
          notes: req.body.notes,
          price: req.body.price,
          date: req.body.date,
          orderedBy: req.body.orderedBy,
        });
        newOrder.save().then((order) => res.json(order));
      }
    })
    .catch(err => res.status(400).json({order: "Invalid order."}))
  }
);

module.exports = router;
