import React from 'react';
import { useContext } from 'react';
import { AiOutlineLogin } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';



const Header = () => {
    const   {user} = useContext(AuthContext);

    return (
        <div className="navbar bg-base-100 border border-primary-focus lg: px-32">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                        <a className="justify-between">
                            Parent
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                        </a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl lg:text-2xl font-bold bg-primary-focus text-white"> <span className=''>CS-</span> pro</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-lg font-bold text-secondary">
                    <li><Link to={'/home'}>Home</Link></li>
                    <li><Link to={'/courses'}>Courses</Link></li>
                    <li><a>FAQ</a></li>
                    <li><a>Blog</a></li>
                    <li><a href="">{user?.displayName}</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={'/login'}>
                    <button className="btn btn-outline btn-secondary font-semibold">
                        {user?.photoURL ? 
                        <div className="avatar placeholder mr-3">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                                <img  src={user.photoURL}  alt="" />
                            </div>
                        </div> : <AiOutlineLogin className='mr-3'/> } Login
                    </button>
                </Link> 
            </div>
        </div>
    );
};

export default Header;