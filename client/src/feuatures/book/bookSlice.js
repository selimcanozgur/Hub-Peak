import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  book: [],
  bookCount: null,
  loading: false,
  error: false,
  keyword: "",
};

const setLoading = (state) => {
  state.loading = true;
  state.error = false;
};

const setFail = (state, action) => {
  state.error = action.payload;
  state.loading = false;
};

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    // All Book
    allBookRequest: setLoading,
    allBookSuccess: (state, action) => {
      state.books = action.payload.books;
      state.bookCount = action.payload.bookCount;
      state.loading = false;
    },
    allBookFail: setFail,
    // Book Detail
    bookDetailRequest: setLoading,
    bookDetailSuccess: (state, action) => {
      state.book = action.payload.book;
      state.loading = false;
    },
    bookDetailFail: setFail,
    // Book Search
    bookSearch: (state, action) => {
      state.keyword = action.payload;
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
  bookSearch,
} = bookSlice.actions;

export default bookSlice.reducer;
