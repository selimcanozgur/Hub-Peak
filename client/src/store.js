import { configureStore } from "@reduxjs/toolkit";
import bookRedurcer from "./feuatures/book/bookSlice";
import userReducer from "./feuatures/user/userSlice";

export const store = configureStore({
  reducer: {
    books: bookRedurcer,
    user: userReducer,
  },
});
