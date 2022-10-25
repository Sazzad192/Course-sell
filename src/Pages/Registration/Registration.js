import React from 'react';
import { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Registration = () => {

    const {createUser} = useContext(AuthContext);

    const handelSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photoURL.value;
        const email = form.email.value;
        const pass = form.password.value;

        createUser(email, pass)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            form.reset()
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }

    return (
        <div className='border-double border-4 border-primary-focus w-1/3 mt-48 mx-auto'>
            <p className='font-bold text-2xl text-primary-content p-4'>Login Form</p>
            <Form onSubmit={handelSubmit}>
                <div className='my-3'>
                    <span className="label-text text-lg font-bold text-primary-content mr-2">Full Name</span> <br />
                    <input type="text" name='name' placeholder="Enter your Full Name here" className="input input-bordered input-primary w-full max-w-xs" />
                </div>

                <div className='my-3'>
                    <span className="label-text text-lg font-bold text-primary-content mr-2">Photo URL</span> <br />
                    <input type="url" name='photoURL' placeholder="Enter your Photo URL" className="input input-bordered input-primary w-full max-w-xs" />
                </div>

                <div className='my-3'>
                    <span className="label-text text-lg font-bold text-primary-content mr-2">Email</span> <br />
                    <input type="email" name='email' placeholder="Enter your Email" className="input input-bordered input-primary w-full max-w-xs" />
                </div>

                <div>
                    <span className="label-text text-lg font-bold text-primary-content mr-2">Password</span> <br />
                    <input type="Password" name='password' placeholder="Enter your Password" className="input input-bordered input-primary w-full max-w-xs"/>
                </div>
                 
                <div className="form-control">
                    <label className="label justify-center cursor-pointer mt-5">
                        <span className="label-text mr-5">Already have an account?:</span>
                        <Link to={'/login'}><input type="checkbox" className="toggle toggle-primary"/></Link>
                    </label>
                </div>

                <hr className='border border-3 border-primary-focus ml-16 mr-16' />

                <div className="btn-group btn-group-vertical my-5">
                    <button type="submit" className="btn btn-active btn-primary mb-3">Sign UP</button>
                </div>
            </Form>  
        </div>
    );
};

export default Registration;