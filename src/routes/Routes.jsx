import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ChefDetail from "../pages/Home/Home/ChefDetail/ChefDetail";

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
            , 
            {
                path: '/any',
                element: <h3>working</h3>
            

            }
        ]
    }
])

export default router;