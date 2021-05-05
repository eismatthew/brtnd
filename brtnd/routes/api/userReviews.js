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
  "/:id",
  passport.authenticate("bartender", { session: false }),
  (req, res) => {
    UserReview.find({ reviewee: req.params.id })
      .then((userReviews) => res.json(userReviews))
      .catch((err) =>
        res.status(404).json({ noReviewsFound: "No reviews found." })
      );
  }
);

// router.get(
//   "/:id",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     UserReview.findById(req.params.id)
//       .then((userReview) => res.json(userReview))
//       .catch((err) =>
//         res.status(404).json({ noReviewsFound: "No review found with that ID" })
//       );
//   }
// );

router.post(
  "/",
  passport.authenticate("user", { session: false }),
  (req, res) => {
    const newUserReview = new UserReview({
      reviewer: req.body.reviewer,
      reviewee: req.body.reviewee,
      order: req.body.order,
      rating: req.body.rating,
      comments: req.body.comments,
    });
    newUserReview.save().then((userReview) => res.json(userReview));
  }
);

module.exports = router;
