import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Loader from "./components/Loader";

const Home = lazy(() => import("./pages/Home"));
const Book = lazy(() => import("./feuatures/book/Book"));
const BookDetail = lazy(() => import("./feuatures/book/BookDetail"));
const Login = lazy(() => import("./feuatures/user/Login"));
const SignUp = lazy(() => import("./feuatures/user/SignUp"));
const Header = lazy(() => import("./ui/Header"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const ProtectedRoutes = lazy(() => import("./utils/ProtectedRoutes"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="books" element={<Book />} />
          <Route path="book/:id" element={<BookDetail />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          {/*DASHBOARD*/}
          <Route element={<ProtectedRoutes />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
