const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Order = require("../../models/Order");
const validateOrderInput = require("../../validation/order");


router.get('/orders', (req, res) => {
  Order.find()
    .sort({ date: -1 })
    .then(orders => res.json(orders))
    .catch(err => res.status(404).json({ noOrdersFound: 'No orders found' }));
});

router.get('/user/:user_id', (req, res) => {
  Order.find({ user: req.params.user_id })
    .then(orders => res.json(orders))
    .catch(err =>
      res.status(404).json({ noOrdersFound: 'No orders found from that user' }
      )
    );
});

router.get('/:id', (req, res) => {
  Order.findById(req.params.id)
    .then(order => res.json(order))
    .catch(err =>
      res.status(404).json({ noOrdersFound: 'No order found with that ID' })
    );
});

router.delete('/:id', (req, res) => {
  Order.findById(req.params.id)
    .then(order => res.json(order)) //deleting?
    .catch(err =>
      res.status(404).json({ noOrdersFound: 'No order found with that ID' })
    );
});

router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateOrderInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

  Order.findOne({user: req.body.orderedBy}).then ((order) => {
    if (order) {
      console.log(req);
      return res
        .status(400)
        .json({order: "An order already exists for this user"})
    } else {
      const newOrder = new Order({
        headCount: req.body.headCount,
        tier: req.body.tier,
        location: req.body.location,
        notes: req.body.notes,
        price: req.body.price,
        date: req.body.date,
        orderedBy: req.user.id
      })
    }
  });
  newOrder.save().then(order => res.json(order));
  });

module.exports = router;
