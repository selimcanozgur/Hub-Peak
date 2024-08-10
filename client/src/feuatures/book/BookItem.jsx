import { useNavigate } from "react-router-dom";

const BookItem = ({ book }) => {
  const { title, author, price, images, _id } = book;
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/book/${_id}`);
  }
  return (
    <button onClick={handleClick}>
      <li className="bg-slate-100 hover:shadow-2xl shadow-2xl gap-1 rounded-md  w-64 h-96 items-center text-center  flex flex-col justify-center">
        <img className="w-36 mx-auto" src={images} alt="apiBook" />
        <div className="mt-6">
          <p>{title}</p>
          <p className="font-semibold">{author}</p>
          <p className="font-semibold text-xl">{price} TL</p>
        </div>
      </li>
    </button>
  );
};

export default BookItem;
