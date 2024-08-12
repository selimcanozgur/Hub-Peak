import { useNavigate } from "react-router-dom";

const BookItem = ({ book }) => {
  const { title, author, price, images, _id } = book;
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/book/${_id}`);
  }
  return (
    <button onClick={handleClick}>
      <li className="bg-slate-100/50 hover:shadow-2xl shadow-2xl gap-1 rounded-md w-64 px-4 h-96 items-center text-center flex flex-col justify-center hover:bg-green-100/80">
        <img className="w-28 mx-auto" src={images} alt="apiBook" />
        <div className="mt-6">
          <p className="text-xl font-semibold">{title}</p>
          <p className="text-lg font-medium">{author}</p>
          <p className="text-base font-medium">{price} TL</p>
        </div>
      </li>
    </button>
  );
};

export default BookItem;
