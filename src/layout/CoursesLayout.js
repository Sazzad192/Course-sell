import React from 'react';
import { Outlet } from 'react-router-dom';
import RightSide from '../Pages/RightSide/RightSide';


const CoursesLayout = () => {
   
    return (
        <div className="grid grid-cols-12 gap-4">
            <div className="col-start-2 col-end-7">
                <Outlet></Outlet>
            </div>
            <div className='col-start-7 col-end-12'> 
                <RightSide></RightSide>
            </div>
        </div>
    );
};

export default CoursesLayout;