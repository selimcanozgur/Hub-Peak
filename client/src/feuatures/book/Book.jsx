import { useDispatch, useSelector } from "react-redux";
import BookItem from "./BookItem";
import { getAllBook } from "../../services/bookApi";
import { useEffect } from "react";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

const Book = () => {
  const { loading, books, error, keyword } = useSelector(
    (state) => state.books
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBook(keyword));
  }, [dispatch, keyword]);

  return (
    <ul className="w-[1200px] justify-center mt-10 gap-12 m-auto flex flex-wrap">
      {error && <Error>{error}</Error>}
      {books.map((book) => (
        <BookItem key={book._id} book={book} />
      ))}
    </ul>
  );
};

export default Book;
