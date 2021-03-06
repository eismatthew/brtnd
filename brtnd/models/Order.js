const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  headCount: {
    type: Number,
    required: true,
  },
  tier: {
    type: String,
    possibleValues: ["Tier 1", "Tier 2", "Tier 3"],
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  price: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  orderedBy: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  takenBy: {
    type: Schema.Types.ObjectId,
    ref: "bartenders",
  },
});

module.exports = Order = mongoose.model("orders", OrderSchema);
