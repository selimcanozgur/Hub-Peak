import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookData: [],
  loading: false,
  error: null,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,

  reducers: {
    getSuccessBook: (state, action) => {
      state.bookData = action.payload.books;
      state.loading = false;
      state.error = null;
    },
    getRequestBook: (state) => {
      state.loading = true;
      state.error = null;
    },
    getFailBook: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getSuccessBook, getRequestBook, getFailBook } =
  bookSlice.actions;

export default bookSlice.reducer;
