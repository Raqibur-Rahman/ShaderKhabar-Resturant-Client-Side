import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ChefDetail from "../pages/Home/Home/ChefDetail/ChefDetail";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Chefs from "../pages/Home/Chefs/Chefs";
import AllRecipes from "../pages/Recipes/AllRecipes";
import Blogs from "../pages/Blogs/Blogs";
import RecipeSubmission from "../pages/RecipeSubmission/RecipeSubmission";
import Community from "../pages/community/community";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";


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
            ,
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/recipesubmission',
                element: <RecipeSubmission></RecipeSubmission>
            },
            {
                path: '/community',
                element: <Community></Community>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }

        ]
    },
    {
        path:'/login',
        element:<Login></Login>
    }
    ,
    {
        path: '*',
        element: <ErrorPage></ErrorPage>

    }
])

export default router;