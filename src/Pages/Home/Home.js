import React from 'react';
import mainImg from '../../picture/main_banner.jpg'
import { GiEntryDoor } from 'react-icons/gi';
import './Home.css'

const Home = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={mainImg} className="w-full" />

                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-2/3 text-white">
                    <p className='text-lg font-semibold lg:text-xl text-secondary-content'>
                        Choose your Couse! <br /> We offer you <b>Database, Matchine Learning, Web development, Android App Development </b> and many more. <br />
                        Scroll down or check out the courses link from the above.
                    </p>
                </div>

                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <button class="btn btn-secondary text-xl font-bold lg:text-2xl"><span className='mr-5'>Enrole Course</span> <GiEntryDoor/> </button>
                </div>
            </div> 
        </div>
        
    );
};

export default Home;