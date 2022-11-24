const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String,
});

const BookModel = mongoose.model("Book", bookSchema);

module.exports = BookModel;
