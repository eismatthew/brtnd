// module.exports = {
//   mondoURI:
//     "mongodb+srv://admin:4jXyPfNoqfGIaV2H@brtnd.iovs9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
//   secretOrKey: "p4yTFyiD2hGWqBHVeDKWylW3yf0ifYwq",
// };

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod');
} else {
  module.exports = require('./keys_dev');
}