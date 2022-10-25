import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layout/Main';
import Course from '../Pages/Courses/Course';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';

const Route = () => {
    const route = createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children: [
                {
                    path:'/',
                    element:<Home></Home>,
                },
                {
                    path:'/home',
                    element:<Home></Home>
                },
                {
                    path:'/courses',
                    element:<Course></Course>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                }
            ]
        },
        {path:'*', element:<Error></Error>}
    ]);

    return (
        <div>
            <RouterProvider router={route}></RouterProvider>
        </div>
    );
};

export default Route;