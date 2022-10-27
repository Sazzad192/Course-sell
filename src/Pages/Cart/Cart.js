import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({cart}) => {

    return (
        <div className="col-span-2">
            <div className="card w-full bg-secondary shadow-xl">
                <figure className="px-7 pt-7 pb-0">
                    <img src={cart.picture} alt="Shoes" className="rounded-xl h-48"/>
                </figure>
                <div className="card-body items-center text-center mt-0">
                    <h2 className="card-title text-white">{cart.cat_name}</h2>
                    
                    <div className="card-actions">
                    <Link to={`/courses/${cart.id}`}>
                        <button className="btn btn-primary">Show Details</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;