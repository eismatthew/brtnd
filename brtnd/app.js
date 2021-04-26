const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const bartenders = require("./routes/api/bartenders");
const orders = require("./routes/api/orders");
const userReviews = require("./routes/api/userReviews");
const bartenderReviews = require("./routes/api/bartenderReviews");
const passport = require("passport");

const app = express();
const db = require("./config/keys").mondoURI;

//BODY PARSER IS DEPRECATED
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

//This option allows to choose between parsing the URL-encoded data with the querystring library (when false)
//or the qs library (when true). The “extended” syntax allows for rich objects and arrays to be encoded into the URL-encoded format,
//allowing for a JSON-like experience with URL-encoded. For more information, please see the qs library.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/users", users);
app.use("/api/bartenders", bartenders);
app.use("/api/orders", orders);
app.use("/api/user-reviews", userReviews);
app.use("/api/bartender-reviews", bartenderReviews);

const path = require('path');
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

app.listen(port, () => console.log(`Server is running on port ${port}`));
