const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Bartender = require("../../models/Bartender");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

const validateSignupInput = require("../../validation/signup");
const validateLoginInput = require("../../validation/login");


router.get(
  "/:id",
  passport.authenticate("user", { session: false }),
  (req, res) => {
    Bartender.findById(req.params.id)
      .then((user) =>
        res
          .status(200)
          .json({ firstName: user.firstName, lastName: user.lastName })
      )
      .catch((err) => res.status(404).json({ noUsersFound: "No user found." }));
  }
);



router.get(
  "/current/bartender",
  passport.authenticate("bartender", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      email: req.user.email,
      balance: req.user.balance,
    });
  }
);

router.post("/signup", (req, res) => {
  const { errors, isValid } = validateSignupInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Check to make sure nobody has already signuped with a duplicate email
  Bartender.findOne({ email: req.body.email }).then((bartender) => {
    if (bartender) {
      // Throw a 400 error if the email address already exists
      return res.status(400).json({
        email: "A bartender has already registered with this address",
      });
    } else {
      // Otherwise create a new bartender
      const newBartender = new Bartender({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newBartender.password, salt, (err, hash) => {
          if (err) throw err;
          newBartender.password = hash;
          newBartender
            .save()
            .then((bartender) => res.json(bartender))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  console.log(errors);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  Bartender.findOne({ email }).then((bartender) => {
    if (!bartender) {
      return res.status(404).json({ email: "This user does not exist" });
    }

    bcrypt.compare(password, bartender.password).then((isMatch) => {
      if (isMatch) {
        const payload = { id: bartender.id, name: bartender.name };

        jwt.sign(
          payload,
          keys.secretOrKey,
          // Tell the key to expire in one hour
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res.status(400).json({ password: "Incorrect password" });
      }
    });
  });
});

module.exports = router;
