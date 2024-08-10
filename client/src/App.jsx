import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import PrivateRoute from "./pages/admin/PrivateRoute";

const Home = lazy(() => import("./pages/Home"));
const Book = lazy(() => import("./feuatures/book/Book"));
const BookDetail = lazy(() => import("./feuatures/book/BookDetail"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Header = lazy(() => import("./ui/Header"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="books" element={<Book />}></Route>
          <Route path="book/:id" element={<BookDetail />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route element={<PrivateRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
