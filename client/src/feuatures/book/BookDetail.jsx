import {
  bookDetailSuccess,
  bookDetailRequest,
  bookDetailFail,
} from "./bookSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

const BookDetail = () => {
  const { book, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    const getOneBook = async () => {
      try {
        dispatch(bookDetailRequest());
        const { data } = await axios(`/api/v1/books/${params.id}`);
        dispatch(bookDetailSuccess(data));
      } catch (err) {
        dispatch(bookDetailFail(err.response.data.message));
      }
    };

    getOneBook();
  }, []);
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
        <div className=" flex justify-center items-center gap-8 mt-12">
          <img className="h-96" src={images} alt="bookDetail" />
          <div className="space-y-3">
            <h1 className="text-4xl font-bold uppercase">{title}</h1>
            <h2 className="text-3xl font-semibold"> Yazar: {author}</h2>
            <h1 className="text-2xl font-medium ">Fiyat: {price} TL</h1>
            <h1 className="text-xl font-medium">Kitap Detayları</h1>
            <p className="text-xl font-normal">Adet: {quantity}</p>
            <div className="flex gap-2 border border-green-600 w-36  px-1 py-2">
              <img className="h-12" src={images} alt="miniDetail" />
              <div>
                <p>{bookType}</p>
                <p className="uppercase">{price} tl</p>
              </div>
            </div>
            <p className="w-[800px]">
              <label className="text-lg font-semibold">Özet: </label> {summary}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default BookDetail;
