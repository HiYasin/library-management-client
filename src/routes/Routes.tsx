import App from "@/App";
import ErrorPage from "@/components/module/ErrorPage";
import { AddBook } from "@/pages/AddBook";
import AllBooks from "@/pages/AllBooks";
import BookDetails from "@/pages/BookDetails";
import BorrowSummary from "@/pages/BorrowSummary";
import Home from "@/pages/Home";
import { UpdateBook } from "@/pages/UpdateBook";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/books",
        element: <AllBooks />
      },
      {
        path: "/borrow-summary",
        element: <BorrowSummary />
      },
      {
        path: "/books/:id",
        element: <BookDetails />
      },
      {
        path: "/create-book",
        element: <AddBook />
      },
      {
        path: "/edit-book/:id",
        element: <UpdateBook />
      }
    ]
  },
]);

export default router;