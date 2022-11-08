import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import NotFound from "../Others/NotFound/NotFound";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])