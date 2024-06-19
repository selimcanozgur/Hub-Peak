import axios from "axios";

import {
  allBookFail,
  allBookRequest,
  allBookSuccess,
  bookDetailFail,
  bookDetailSuccess,
  bookDetailRequest,
} from "../feuatures/book/bookSlice";

export const getAllBook = async (dispatch) => {
  try {
    dispatch(allBookRequest());
    const { data } = await axios.get("http://127.0.0.1:3000/api/v1/books");
    dispatch(allBookSuccess(data));
  } catch (err) {
    dispatch(allBookFail(err.response.data.message));
  }
};

export const bookDetail = async (dispatch, id) => {
  try {
    dispatch(bookDetailRequest());
    const { data } = await axios.get(
      `http://127.0.0.1:3000/api/v1/books/${id}`
    );
    dispatch(bookDetailSuccess(data));
  } catch (err) {
    dispatch(bookDetailFail(err.response.data.message));
  }
};
