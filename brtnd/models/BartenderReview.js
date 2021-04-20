const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BartenderReviewSchema = new Schema({
  reviewer: {
    type: Schema.Types.ObjectId,
    ref: "bartenders",
  },
  reviewee: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  rating: {
    type: Number,
    possibleValues: [1, 2, 3, 4, 5],
    required: true,
  }
})

module.exports = BartenderReview = mongoose.model("bartenderReview", BartenderReviewSchema);
