import App from "@/App";
import ErrorPage from "@/components/ErrorPage";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
    ]
  },
]);

export default router;