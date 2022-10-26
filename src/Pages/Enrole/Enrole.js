import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { TbCurrencyTaka } from 'react-icons/tb';

const Enrole = () => {

    const enrole = useLoaderData();
    const {name, topic, price} = enrole;

    return (
        <div className="card my-10 mx-auto w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-center font-bold text-2xl p-2">Course Name: {name}</h2>
                <hr className='w-11/12' />
                <ul className=' list-disc list-outside px-4'>
                    {
                        topic.map(element => <li className='font-bold text-lg'
                        key={element}>{element}</li>)
                    }
                </ul>
                <hr className='w-11/12' />
                <p className='flex justify-start items-center font-bold text-xl'>Price: <TbCurrencyTaka/> {price}  </p>
                <hr className='w-11/12' />
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Pay Now</button>
                    <button className="btn btn-ghost">Deny</button>
                </div>
            </div>
        </div>
    );
};

export default Enrole;