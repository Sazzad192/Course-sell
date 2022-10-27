import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { TbCurrencyTaka } from 'react-icons/tb';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Enrole = () => {

    const enrole = useLoaderData();
    const {name, topic, price} = enrole;
    const {user} = useContext(AuthContext);

    return (
        <div>
            <div className='flex justify-center items-center my-9'>
                <p className='font-bold text-2xl pr-2'>User Details:</p>
                
                <div className="avatar placeholder mr-3">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                        <img  src={user?.photoURL}  alt="" />
                    </div>
                </div>
                <h2 className="card-title text-center font-bold text-xl p-2"> {user?.displayName} </h2>
            </div>
            <hr className=' border-2 w-11/12' />
            <div className="card my-10 mx-auto w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-center font-bold text-2xl p-2">Course Name: {name}</h2>
                    <hr className='w-11/12' />
                    <p className='font-bold text-lg'>Course Outline:</p>
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
        </div>
        
    );
};

export default Enrole;