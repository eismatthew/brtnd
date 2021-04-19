const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateOrderInput(data) {
  let errors = {};

  data.headCount = isAlphanumeric(data.headCount, "en-US")
    ? data.headCount
    : "";
  data.location = data.location = isAlphanumeric(data.location, "en-US")
    ? data.location
    : "";
  data.notes = isAlphanumeric(data.notes, "en-US");

  // headCount: req.order.headCount,
  // tier: req.order.tier,
  // location: req.order.location,
  // notes: req.order.notes,
};
