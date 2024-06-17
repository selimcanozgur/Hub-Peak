import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/Book";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <Book />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
