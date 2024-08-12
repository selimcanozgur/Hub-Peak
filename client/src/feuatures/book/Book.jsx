import axio from "axios";
import {
  allBookRequest,
  allBookSuccess,
  allBookFail,
  errorClear,
} from "./bookSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import BookItem from "./BookItem";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import axios from "axios";

const Book = () => {
  const { loading, books, error, keyword } = useSelector(
    (state) => state.books
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const getAllBook = async () => {
      try {
        const { data } = await axios.get(`/api/v1/books`);
        dispatch(allBookSuccess(data));
      } catch (err) {
        dispatch(allBookFail(err.response.data.message));
      }
    };
    getAllBook();
    dispatch(errorClear());
  }, [dispatch]);

  return (
    <ul className="w-[1200px] justify-center mt-10 gap-12 m-auto flex flex-wrap">
      {error ? (
        <Error>{error}</Error>
      ) : (
        <>
          {books.map((book) => (
            <BookItem key={book._id} book={book} />
          ))}
        </>
      )}
    </ul>
  );
};

export default Book;
