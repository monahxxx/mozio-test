import { createBrowserRouter } from "react-router-dom";
import { SearchPage } from "./Pages/SearchPage";
import { ResultPage } from "./Pages/ResultPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage />,
  },
  {
    path: "/results",
    element: <ResultPage />,
  },
]);
