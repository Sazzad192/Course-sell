import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCart from '../CourseCart/CourseCart';

const CoursesHome = () => {
    const details = useLoaderData();

    return (
        <div>
            {
                    details.map( element => <CourseCart
                        key={element.id}
                        details = {element}></CourseCart> )
            }
        </div>
    );
};

export default CoursesHome;