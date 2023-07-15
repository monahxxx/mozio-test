import { createBrowserRouter } from "react-router-dom";
import { SearchPage } from "./Pages/SearchPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage />,
  },
]);
