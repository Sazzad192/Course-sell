import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CoursesLayout from '../layout/CoursesLayout';
import Main from '../layout/Main';
import Blog from '../Pages/Blog/Blog';
import CourseDetails from '../Pages/CourseDetails/CourseDetails';
import CoursesHome from '../Pages/CoursesHome/CoursesHome';
import Enrole from '../Pages/Enrole/Enrole';
import Error from '../Pages/Error/Error';
import Faq from '../Pages/FAQ/Faq';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Registration/Registration';
import PrivateRoute from './PrivateRoute';

const Route = () => {
    const route = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>,
                },
                {
                    path: '/home',
                    element: <Home></Home>
                },
                {
                    path: '/courses',
                    element: <CoursesLayout></CoursesLayout>,
                    children:[
                        {
                            path:'/courses',
                            element: <CoursesHome></CoursesHome>,
                            loader: () =>{
                                return fetch(`https://course-server-gules.vercel.app/details`)
                            },
                        },
                        {
                            path:'/courses/:id',
                            element:<CourseDetails></CourseDetails>,
                            loader: ({params}) =>{
                                return fetch(`https://course-server-gules.vercel.app/categories/${params.id}`)
                            }
                        },
                        {
                            path:'/courses/enrole/:id',
                            element: <PrivateRoute> <Enrole></Enrole> </PrivateRoute>,
                            loader: ({params}) => fetch(`https://course-server-gules.vercel.app/details/${params.id}`)
                        }
                        
                    ]
                    
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/registration',
                    element: <Registration></Registration>
                },
                {
                    path:'/faq',
                    element: <Faq></Faq>
                },
                {
                    path:'/blog',
                    element: <Blog></Blog>
                }
            ]
        },
        { path: '*', element: <Error></Error> }
    ]);

    return (
        <div>
            <RouterProvider router={route}></RouterProvider>
        </div>
    );
};

export default Route;