import React from 'react';
import mainImg from '../../picture/main_banner.jpg'
import { GiEntryDoor } from 'react-icons/gi';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage:`url(${mainImg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                    <h1 className="mb-5 text-5xl font-bold">Computer Science-Pro</h1>
                    <p className="mb-5 text-lg"> Choose your Couse! <br /> We offer you <b>Database, Matchine Learning, Web development, Android App Development </b> and many more. <br />
                        Scroll down or check out the courses link from the above.</p>
                    <Link to={'/courses'}>
                        <button className="btn btn-primary text-lg"><span className='mr-5'>Enrole Course</span><GiEntryDoor/></button>
                    </Link>
                </div>
            </div>
        </div>
        
    );
};

export default Home;