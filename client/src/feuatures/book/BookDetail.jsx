import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookDetail } from "../../services/bookApi";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

const BookDetail = () => {
  const { book, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(bookDetail(params.id));
  }, [dispatch, params]);
  const {
    author,
    images,
    createdAt,
    pages,
    title,
    price,
    quantity,
    summary,
    bookType,
  } = book;
  return (
    <>
      {error ? (
        <Error>{error}</Error>
      ) : (
        <div className=" flex justify-center bg-slate-200 gap-8 py-24 h-full">
          <img className="h-96" src={images} alt="bookDetail" />
          <div>
            {/*author, createdAt, pages, price ,quantity, summary*/}
            <h1 className="text-3xl font-semibold">{title}</h1>
            <h2 className="text-2xl ">{author}</h2>
            <h1 className="text-4xl font-semibold uppercase">{price} tl</h1>
            <h1 className="text-xl font-semibold">Kitap Detayları</h1>
            <p className="text-xl font-medium">Adet: {quantity}</p>
            <div className="flex gap-2 border border-green-600 w-36  px-1 py-2">
              <img className="h-12" src={images} alt="miniDetail" />
              <div>
                <p>{bookType}</p>
                <p>{price} TL</p>
              </div>
            </div>
            <p className="w-[800px]">Özet: {summary}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default BookDetail;
