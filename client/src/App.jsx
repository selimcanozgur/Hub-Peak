import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./feuatures/book/Book";
import BookDetail from "./feuatures/book/BookDetail";
import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "books",
        element: <Book />,
      },
      {
        path: "book/:id",
        element: <BookDetail />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
