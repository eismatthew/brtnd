<<<<<<< HEAD
module.exports = {
  mondoURI:
    "mongodb+srv://admin:4jXyPfNoqfGIaV2H@brtnd.iovs9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  secretOrKey: "p4yTFyiD2hGWqBHVeDKWylW3yf0ifYwq",
};
=======
module.exports = {
  mongoURI: process.env.MONGO_URI,
  secretOrKey: process.env.SECRET_OR_KEY
}
>>>>>>> ace76a252157b6b2aeda2e0cf5f7f2b4f34806fb
