import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Book = lazy(() => import("./features/book/Book"));
const Contact = lazy(() => import("./pages/ContactPage"));
const Header = lazy(() => import("./ui/Header"));

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/books" element={<Book />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
