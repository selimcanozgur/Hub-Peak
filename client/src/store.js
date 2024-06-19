import { configureStore } from "@reduxjs/toolkit";
import bookRedurcer from "./feuatures/book/bookSlice";

export const store = configureStore({
  reducer: {
    books: bookRedurcer,
  },
});
