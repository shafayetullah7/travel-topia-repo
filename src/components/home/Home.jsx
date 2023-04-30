import React from 'react';
import banner from '../../assets/banner-resort.jpg'
import Nav from '../nav/Nav';

const Home = () => {
    return (
        <div className='relative'>
            <div className='w-full h-screen fixed top-0 -z-20 object-cover object-bottom'>
                <img className='w-full h-full' src={banner} alt="banner" />
                <div className='bg-black absolute inset-0 bg-opacity-50'></div>
            </div>
            <Nav></Nav>
        </div>
    );
};

export default Home;