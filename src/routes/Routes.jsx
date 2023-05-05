import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ChefDetail from "../pages/Home/Home/ChefDetail/ChefDetail";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Chefs from "../pages/Home/Chefs/Chefs";
import AllRecipes from "../pages/Recipes/AllRecipes";


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
            },
            {
                path: '/recipes',
                element: <AllRecipes></AllRecipes>
            },
            {
                path: '/chefs',
                element: <Chefs></Chefs>
            }

        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>

    }
])

export default router;