import React from 'react';

const Cart = ({cart}) => {

    return (
        <div className="col-span-2">
            <div className="card w-96 bg-secondary shadow-xl">
                <figure className="px-7 pt-7 pb-0">
                    <img src={cart.picture} alt="Shoes" className="rounded-xl h-48" />
                </figure>
                <div className="card-body items-center text-center mt-0">
                    <h2 className="card-title text-white">{cart.cat_name}</h2>
                    <p className='text-white text-left text-justify'>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;