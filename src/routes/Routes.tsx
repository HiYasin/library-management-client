import App from "@/App";
import ErrorPage from "@/components/ErrorPage";
import AllBooks from "@/pages/AllBooks";
import BookDetails from "@/pages/BookDetails";
import BorrowSummary from "@/pages/BorrowSummary";
import Home from "@/pages/Home";
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
        path: "/all-books",
        element: <AllBooks />
      },
      {
        path: "/borrow-summary",
        element: <BorrowSummary />
      },
      {
        path: "/books/:id",
        element: <BookDetails />
      }
    ]
  },
]);

export default router;