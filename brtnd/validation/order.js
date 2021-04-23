const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateOrderInput(data) {
  let errors = {};

  data.tier = validText(data.tier) ? data.tier : "";
  data.location = validText(data.location) ? data.location : "";
  data.notes = validText(data.notes) ? data.notes: "";


  if (Validator.isEmpty(data.tier)) {
    errors.tier = "Selection of a tier package is required";
  }

  if (Validator.isEmpty(data.location)) {
    errors.location = "Event location is required";
  }


  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
