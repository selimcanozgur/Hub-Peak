import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bookSearch } from "../feuatures/book/bookSlice";

const Search = () => {
  const { keyword } = useSelector((state) => state.books);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/books/${keyword}`);
    } else {
      navigate("/books");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={keyword}
        onChange={(e) => dispatch(bookSearch(e.target.value))}
        placeholder="🔎 Kitap Ara..."
        className="bg-slate-100 border px-4 rounded-full py-2 text-sm w-32 focus:outline-none shadow-md focus:w-52 duration-500 mr-2 focus:ring-1 ring-green-100"
        type="text"
      />
    </form>
  );
};

export default Search;
