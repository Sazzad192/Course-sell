import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { FaGoogle} from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {

    const {providerLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handelGoogle = () =>{
        providerLogin(googleProvider)
        .then(result=>{
            const user = result.user;
        })
        .catch(error => console.error(error))
    }
    return (
        
            <div className='border border-spacing-3 w-1/3 mt-48 mx-auto'>
                <p className='font-bold text-2xl text-primary-content p-4'>Login Form</p>
                <div className='w-full'>
                    <span className="label-text">Your Email</span>
                    <input type="email" placeholder="info@site.com" className="input input-bordered w-4/3" />
                </div>

                <div>
                    <span className="label-text">Your Password</span>
                    <input type="password" placeholder="********" className="input input-bordered " />
                </div>

                <div className="btn-group btn-group-vertical my-5">
                    <button className="btn btn-active btn-primary mb-3">Sign In</button>
                    <button onClick={handelGoogle} className="btn btn-outline btn-primary mb-3"> <FaGoogle className='mr-3'/> Login with Google</button>
                </div>    
            </div>
    );
};

export default Login;