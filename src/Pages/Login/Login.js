import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { FaGithub, FaGoogle} from "react-icons/fa";
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {

    const [error, setError] = useState('');

    const {providerLogin, loginUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const loginHandelar = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setError('')
            event.target.reset()
            navigate(from, {replace:true})
            // ...
          })
          .catch(error => {
            console.error(error)
            setError(error.message)
          });

    }

    const handelGoogle = () =>{
        providerLogin(googleProvider)
        .then(result=>{
            const user = result.user;
            navigate(from, {replace:true})
        })
        .catch(error => console.error(error))
    } 
    const handelGit = () =>{
        providerLogin(githubProvider)
        .then(result=>{
            const user = result.user;
            navigate(from, {replace:true})
        })
        .catch(error =>{ 
            console.error(error);
            setError(error.message);
            })
    }

    return (
        
        <div className='border-double border-4 border-primary-focus w-11/12 mt-5  mx-auto lg:w-1/3 mt-48'>
            <p className='font-bold text-2xl text-primary-content p-4'>Login Form</p>
            <Form onSubmit={loginHandelar}>
                <div className='my-3'>
                    <span className="label-text text-lg font-bold text-primary-content mr-2">Email</span> <br />
                    <input type="email" name='email' placeholder="Enter your Email" className="input input-bordered input-primary w-full max-w-xs" />
                </div>

                <div>
                    <span className="label-text text-lg font-bold text-primary-content mr-2">Password</span> <br />
                    <input type="Password" name='password' placeholder="Enter your Password" className="input input-bordered input-primary w-full max-w-xs"/>
                </div>

                <button type='submit' className="btn btn-active btn-primary my-4">Sign In</button>

                <hr className='border border-3 border-primary-focus ml-6 mr-6 lg: ml-16 mr-16' />
                
                <div className="form-control ">
                    <label className="label justify-center cursor-pointer mt-5">
                        <span className="label-text">Do not have an account?</span>
                        <Link className="link link-primary" to={'/registration'}>Click here</Link>
                    </label>
                </div>

                <div className="flex justify-center my-5">
                    <button onClick={handelGoogle} className="btn btn-outline btn-primary rounded-full mb-3 mr-2"> <FaGoogle/></button>
                    <button onClick={handelGit} className="btn btn-outline btn-primary rounded-full mb-3"> <FaGithub/></button>
                </div>
                <p className='text-red-500 text-lg'>{error}</p>     
            </Form>   
        </div>
    );
};

export default Login;