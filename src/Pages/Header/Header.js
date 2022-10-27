import React from 'react';
import { useContext } from 'react';
import { AiOutlineLogin } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';



const Header = () => {
    const   {user, logOut} = useContext(AuthContext);

    const logoutBtn= () =>{
        logOut()
        .then(() => {
            //logout
          }).catch((error) => {
            // An error happened.
          });

          return logOut;
    }

    function toggleBtn() {
        var x = document.getElementById("myDIV");
        if (x.innerHTML === "light") {
          x.innerHTML = "Dark";
        } else {
          x.innerHTML = "light";
        }
      }

    return (
        <div className="navbar flex-row-reverse bg-base-100 border border-primary-focus lg:flex-row px-32">
            <div className="navbar-start">
                {/* mobile device */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/home'}>Home</Link></li>
                        <li><Link to={'/courses'}>Courses</Link></li>
                        <li><Link to={'/faq'}>FAQ</Link></li>
                        <li><Link to={'/blog'}>Blog</Link></li>
                        <li className='items-center'> <input id='check' type="checkbox" className="toggle toggle-primary" /> </li>
                    </ul>
                </div>
                <Link to={'/home'} className="btn btn-ghost normal-case text-xl lg:text-2xl font-bold bg-primary-focus text-white"> <span className=''>CS-</span> pro</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 md:text-lg font-bold text-primary">
                    <li><Link to={'/home'}>Home</Link></li>
                    <li><Link to={'/courses'}>Courses</Link></li>
                    <li><Link to={'/faq'}>FAQ</Link></li>
                    <li><Link to={'/blog'}>Blog</Link></li>
                    <li className='items-center'> <input onClick={toggleBtn} id='check' type="checkbox" className="toggle toggle-primary" /> <span id="myDIV"> light </span> </li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid?
                    <div className="flex justify-center">
                        <div className="tooltip tooltip-bottom lg:tooltip-left" data-tip={user?.displayName}>
                            <button className="btn btn-ghost btn-circle btn-outline btn-secondary font-semibold my-auto">
                                {user?.photoURL ? 
                                <div className="avatar placeholder mr-3">
                                    <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                                            <img className='mx-auto'  src={user?.photoURL}  alt="" />
                                    </div>
                                </div> : <AiOutlineLogin className='mr-3'/>
                                }
                            </button>
                        </div>
                    
                        <button onClick={logoutBtn} className="btn btn-outline btn-secondary font-semibold ml-3">Logout</button>
                    
                    </div> : 
                    <Link to={'/login'} className='ml-3'>
                        <button className="btn btn-outline btn-secondary font-semibold">
                            <AiOutlineLogin className='mr-3'/> Login
                        </button>
                    </Link>

                }
            </div>
        </div>
    );
};

export default Header;