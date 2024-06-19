import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  book: [],
  bookCount: null,
  loading: false,
  error: false,
};

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    // All Book
    allBookSuccess: (state, action) => {
      state.books = action.payload.books;
      state.bookCount = action.payload;
      state.loading = false;
    },
    allBookRequest: (state) => {
      state.loading = true;
      state.error = false;
    },
    allBookFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    // Book Detail
    bookDetailSuccess: (state, action) => {
      state.book = action.payload.book;
      state.loading = false;
    },
    bookDetailRequest: (state) => {
      state.loading = true;
      state.error = false;
    },
    bookDetailFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  allBookSuccess,
  allBookRequest,
  allBookFail,
  bookDetailSuccess,
  bookDetailRequest,
  bookDetailFail,
} = bookSlice.actions;

export default bookSlice.reducer;
