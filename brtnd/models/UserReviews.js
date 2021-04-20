const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserReviewSchema = new Schema({
  reviwer: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  reviewee: {
    type: Schema.Types.ObjectId,
    ref: "bartenders",
  },
  rating: {
    type: Number,
    possibleValues: [1, 2, 3,4,5],
    required: true,
  },
  comments: {
    type: String
  }
})

module.exports = UserReview = mongoose.model("userReview", UserReviewSchema);
