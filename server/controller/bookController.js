import Book from "../model/bookModel.js";
import tryCatch from "../utils/tryCatch.js";

export const getAllBook = tryCatch(async (req, res, next) => {
  const books = await Book.find();
  res.status(200).json({
    status: "success",
    bookLength: books.length,
    books,
  });
});

export const createBook = tryCatch(async (req, res, next) => {
  const newBook = await Book.create(req.body);
  res.status(201).json({
    status: "success",
    newBook,
  });
});
