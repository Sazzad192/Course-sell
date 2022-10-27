import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCart from '../CourseCart/CourseCart';

const CoursesHome = () => {
    const details = useLoaderData();

    return (
        <div>
            <p className='text-3xl font-bold text-primary my-3'>Courses we offer for you</p>
            {
                details.map( element => <CourseCart
                key={element.id}
                details = {element}></CourseCart> )
            }
        </div>
    );
};

export default CoursesHome;