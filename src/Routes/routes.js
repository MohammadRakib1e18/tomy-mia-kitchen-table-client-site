import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import NotFound from "../Others/NotFound/NotFound";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AllServices from "../Pages/AllServices/AllServices";
import HomeServices from "../Pages/Home/HomeServices/HomeServices";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <AllServices></AllServices>,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
