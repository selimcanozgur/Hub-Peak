import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Enter the book name."],
  },
  author: {
    type: String,
    required: [true, "Enter the author name."],
  },
  price: {
    type: Number,
    required: [true, "Enter the book price."],
  },
  summary: {
    type: String,
    required: [true, "Please specify summary."],
  },
  publishHouse: {
    type: String,
    required: [true, "Enter the book publishing house."],
  },
  format: {
    type: String,
    default: "hardcover",
  },
  image: {
    type: String,
    default: "",
  },
  pages: {
    type: Number,
    required: [true, "Enter the book page"],
  },
  publishYear: {
    type: Number,
    required: [true, "Enter the book publish year."],
  },
  language: {
    type: String,
    default: "türkçe",
  },
  dimensions: {
    type: String,
    required: [true, "Enter the book dimensions."],
  },
});

const book = mongoose.model("book", bookSchema);

export default book;
