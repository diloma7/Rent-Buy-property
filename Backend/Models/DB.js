const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/e-business", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("connected to DB"))
  .catch(console.error);

require('./property_model');