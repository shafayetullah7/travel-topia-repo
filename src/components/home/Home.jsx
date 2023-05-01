import React from 'react';
import banner from '../../assets/banner-resort.jpg'
import Nav from '../nav/Nav';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='relative'>
            <div className='w-full h-screen fixed top-0 -z-20'>
                <img className='w-full h-full object-cover object-bottom' src={banner} alt="banner" />
                <div className='bg-black absolute inset-0 bg-opacity-70'></div>
            </div>
            <Nav></Nav>

            <div className='mt-36'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;