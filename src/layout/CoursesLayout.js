import React from 'react';
import { FaDownload, FaUniversalAccess } from 'react-icons/fa';
import { Outlet, useLoaderData } from 'react-router-dom';
import CourseCart from '../Pages/CourseCart/CourseCart';
import RightSide from '../Pages/RightSide/RightSide';


const CoursesLayout = () => {
   
    return (
        <div className="grid grid-cols-12 gap-4">
            <div className="col-start-2 col-end-7">
                <Outlet></Outlet>
            </div>
            <div className='col-start-7 col-end-12 absolute right-0'> 
                <RightSide></RightSide>
            </div>
        </div>
    );
};

export default CoursesLayout;