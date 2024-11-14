import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Error from "../Components/Error";
import CategoryNews from "../Pages/CategoryNews";


const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error></Error>,
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='/category/01'></Navigate>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews> ,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: "/news",
        element: <HomeLayout></HomeLayout>
    },
    {
        path: "/auth",
        element: <HomeLayout></HomeLayout>
    },
]);

export default router;