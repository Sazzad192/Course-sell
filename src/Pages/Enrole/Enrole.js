import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { TbCurrencyTaka } from 'react-icons/tb';
import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Enrole = () => {

    const enrole = useLoaderData();
    const {name, topic, price} = enrole;
    const {user} = useContext(AuthContext);
    const payHandel = () =>toast.success("Congratulation you are successfully enrol this course");

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
                <div className="card-body bg-primary-focus items-center text-center">
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
                        <button onClick={payHandel} className="btn btn-primary">Pay Now</button>
                        <ToastContainer
                            position="top-center"
                            autoClose={1000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick={true}
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored"
                    />
                        <button className="btn btn-ghost">Deny</button>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Enrole;