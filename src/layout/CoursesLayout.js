import React from 'react';
import { Outlet } from 'react-router-dom';
import RightSide from '../Pages/RightSide/RightSide';


const CoursesLayout = () => {
   
    return (
        <div className="block md:grid grid-cols-12 gap-4">
            <div className='md:col-start-2 col-end-7'>
                <RightSide></RightSide>
            </div>
            <div className="md:col-start-7 col-end-12 ">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default CoursesLayout;