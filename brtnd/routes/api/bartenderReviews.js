const express = require("express");
const router = express.Router();
const passport = require("passport");

const BartenderReview = require("../../models/BartenderReview");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    BartenderReview.find({})
      .sort({ date: -1 })
      .then((bartenderReview) => res.json(bartenderReview))
      .catch((err) =>
        res.status(404).json({ noBartenderReviewFound: "No reviews found" })
      );
  }
);

router.get(
  "/:bartender_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    BartenderReview.find({ reviewer: req.body.id })
      .then((bartenderReviews) => res.json(bartenderReviews))
      .catch((err) =>
        res.status(404).json({ noReviewsFound: "No reviews found." })
      );
  }
);

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    BartenderReview.findById(req.params.id)
      .then((bartenderReview) => res.json(bartenderReview))
      .catch((err) =>
        res.status(404).json({ noReviewsFound: "No review found with that ID" })
      );
  }
);

router.post(
  "/",
  passport.authenticate(["user", "bartender"], { session: false }),
  (req, res) => {
    BartenderReview.find({ order: req.body.order }, function (err, results) {
      if (err) {
        console.log(err);
      }
      if (results.length === 0) {
        const newBartenderReview = new BartenderReview({
          reviewer: req.body.reviewer,
          reviewee: req.body.reviewee,
          order: req.body.order,
          rating: req.body.rating,
        });
        newBartenderReview
          .save()
          .then((bartenderReview) => res.json(bartenderReview));
      } else {
        return res
          .status(400)
          .json({ order: "A review already exists for this event" });
      }
    });
  }
);

module.exports = router;
