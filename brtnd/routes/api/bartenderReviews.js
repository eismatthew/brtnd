const express = require("express");
const router = express.Router();
const passport = require("passport");

const BartenderReview = require("../../models/BartenderReview");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    UserReview.find({})
      .sort({ date: -1 })
      .then((bartenderReview) => res.json(bartenderReview))
      .catch((err) =>
        res.status(404).json({ noBartenderReviewFound: "No reviews found" })
      );
  }
);

router.get(
  "/bartenderReview/:user_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    BartenderReview.find({ reviewedBy: req.body.reviewer })
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
    bartenderReview
      .findById(req.params.id)
      .then((bartenderReview) => res.json(bartenderReview))
      .catch((err) =>
        res.status(404).json({ noReviewsFound: "No review found with that ID" })
      );
  }
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let theBartenderReview;

    bartenderReview
      .findById(req.params.id) //id?
      .then((userReview) => (theBartenderReview = bartenderReview))
      .then(() => {
        if (theBartenderReview.length === 0) {
          const newBartenderReview = new bartenderReview({
            reviewer: req.body.reviewer,
            reviewee: req.body.reviewee,
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
