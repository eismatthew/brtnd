const express = require("express");
const router = express.Router();
const passport = require("passport");

const UserReview = require("../../models/UserReview");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    UserReview.find({})
      .sort({ date: -1 })
      .then((userReview) => res.json(userReview))
      .catch((err) =>
        res.status(404).json({ noUserReviewFound: "No reviews found" })
      );
  }
);

router.get(
  "/:user_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    UserReview.find({ reviewer: req.body.reviewer })
      .then((userReviews) => res.json(userReviews))
      .catch((err) =>
        res.status(404).json({ noReviewsFound: "No reviews found." })
      );
  }
);

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    UserReview.findById(req.params.id)
      .then((userReview) => res.json(userReview))
      .catch((err) =>
        res.status(404).json({ noReviewsFound: "No review found with that ID" })
      );
  }
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    UserReview.find({ order: req.body.order }, function (err, results) {
      if (err) {
        console.log(err);
      }
      if (results.length === 0) {
        const newUserReview = new UserReview({
          reviewer: req.body.reviewer,
          reviewee: req.body.reviewee,
          order: req.body.order,
          rating: req.body.rating,
          comments: req.body.comments,
        });
        newUserReview.save().then((userReview) => res.json(userReview));
      } else {
        return res
          .status(400)
          .json({ order: "A review already exists for this event" });
      }
    });
  }
);

module.exports = router;
