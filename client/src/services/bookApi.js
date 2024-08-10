import axios from "axios";

import {
  allBookFail,
  allBookRequest,
  allBookSuccess,
  bookDetailFail,
  bookDetailSuccess,
  bookDetailRequest,
} from "../feuatures/book/bookSlice";

const API = import.meta.env.VITE_API;

// Get All Book
export const getAllBook = (keyword) => async (dispatch) => {
  try {
    dispatch(allBookRequest());
    const { data } = await axios.get(`${API}/?keyword=${keyword}`);
    dispatch(allBookSuccess(data));
  } catch (err) {
    dispatch(allBookFail(err.response.data.message));
  }
};

// Get One Book
export const bookDetail = (id) => async (dispatch) => {
  try {
    dispatch(bookDetailRequest());
    const { data } = await axios.get(`${API}/${id}`);
    dispatch(bookDetailSuccess(data));
  } catch (err) {
    dispatch(bookDetailFail(err.response.data.message));
  }
};
