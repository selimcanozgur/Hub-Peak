import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookDetail } from "../../services/bookApi";
import { useParams } from "react-router-dom";

const BookDetail = () => {
  const { loading, book, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    bookDetail(dispatch, params.id);
  }, [dispatch, params]);
  return (
    <>
      <div className=" flex justify-center bg-slate-200 gap-8 py-24 h-full">
        <img className="h-96" src={book.images} alt="bookDetail" />
        <div>
          {/*author, createdAt, pages, price ,quantity, summary*/}
          <h1 className="text-3xl font-semibold">{book.title}</h1>
          <h2 className="text-2xl ">{book.author}</h2>
          <h1 className="text-4xl font-semibold uppercase">{book.price} tl</h1>
          <h1 className="text-xl font-semibold">Kitap Detayları</h1>
          <p className="text-xl font-medium">Adet: {book.quantity}</p>
          <div className="flex gap-2 border border-green-600 w-36  px-1 py-2">
            <img className="h-12" src={book.images} alt="miniDetail" />
            <div>
              <p>{book.bookType}</p>
              <p>{book.price} TL</p>
            </div>
          </div>
          <p className="w-[800px]">Özet: {book.summary}</p>
        </div>
      </div>
    </>
  );
};

export default BookDetail;
