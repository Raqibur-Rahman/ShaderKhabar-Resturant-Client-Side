import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ChefDetail from "../pages/Home/Home/ChefDetail/ChefDetail";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/chefs/:id',
                element: <ChefDetail></ChefDetail>
            }

        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>

    }
])

export default router;