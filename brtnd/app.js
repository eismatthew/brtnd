const express = require("express");
const mongoose = require("mongoose");

const app = express();
const db = require("./config/keys").mondoURI;
app.use("/api/users", users)
app.use("/api/bartenders", bartenders)

//BODY PARSER IS DEPRECATED
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

//This option allows to choose between parsing the URL-encoded data with the querystring library (when false)
//or the qs library (when true). The “extended” syntax allows for rich objects and arrays to be encoded into the URL-encoded format,
//allowing for a JSON-like experience with URL-encoded. For more information, please see the qs library.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const port = process.env.PORT || 5000;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

app.listen(port, () => console.log(`Server is running on port ${port}`));


