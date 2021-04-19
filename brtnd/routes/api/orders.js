const express = require("express");
const router = express.Router();

const validateOrderInput = require("../../validation/order");

router.get("/orders", (req, res) => {
  console.log(req.order);
  console.log(res);

  res.json({
    id: req.order.id,
    headCount: req.order.headCount,
    tier: req.order.tier,
    location: req.order.location,
    notes: req.order.notes,
    price: req.order.price,
  });
});

module.exports = router;
