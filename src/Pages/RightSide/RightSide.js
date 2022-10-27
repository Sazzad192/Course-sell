import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';

const CatCart = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://course-server-gules.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='sticky top-0 mb-5'>
            <p className='text-3xl font-bold text-primary my-3'>Courses Categories</p>
            <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-3 gap-3">

                {
                    categories.map(element => <Cart
                        key={element.id}
                        cart={element}></Cart>)
                }
            </div>

        </div>
    );
};

export default CatCart;