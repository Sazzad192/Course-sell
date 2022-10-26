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
            form.reset()
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
        
        <div className='border-double border-4 border-primary-focus w-1/3 mt-48 mx-auto'>
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

                <div className="form-control ">
                    <label className="label justify-center cursor-pointer mt-5">
                        <span className="label-text mr-5">Do not have an account?:</span>
                        <Link to={'/registration'}><input type="checkbox" className="toggle toggle-primary"/></Link>
                    </label>
                </div>

                <hr className='border border-3 border-primary-focus ml-16 mr-16' />

                <div className="btn-group btn-group-vertical my-5">
                    
                    <button type='submit' className="btn btn-active btn-primary mb-3">Sign In</button>
                    <button onClick={handelGoogle} className="btn btn-outline btn-primary mb-3"> <FaGoogle className='mr-3'/> Sign in with Google</button>
                    <button onClick={handelGit} className="btn btn-outline btn-primary mb-3"> <FaGithub className='mr-3'/> Sign in with GITHUB</button>
                </div>
                <p className='text-red-500 text-lg'>{error}</p>     
            </Form>   
        </div>
    );
};

export default Login;