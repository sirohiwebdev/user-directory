const mongoose = require("mongoose");
const url =
  "mongodb+srv://userdir:eOly0wSVCOfco4H8@cluster0-eha1o.mongodb.net/directory?retryWrites=true&w=majority";

mongoose.connect(
  url,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  error => {
    console.log(error);
  }
);

module.exports = mongoose;
