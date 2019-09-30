const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema({
  title: String,
  desc: String
});

module.exports = mongoose.model("Todo", TodoSchema);
