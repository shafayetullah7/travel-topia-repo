import React from 'react';
import logoLight from '../../assets/logo-light.png';
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate();
    return (
        <div className='flex justify-between items-center gap-10 lg:mx-28 mt-5'>
            <img src={logoLight} alt="logo" />
            <form className='relative'>
                <input className='bg-white bg-opacity-30 placeholder:text-gray-200 px-5 py-2 w-[260px] rounded-md outline-none duration-100 focus:w-[280px]' type="text" name='search' placeholder='Search your destination' />
                <AiOutlineSearch className='absolute text-gray-200 text-2xl top-1/2 -translate-y-1/2 right-2'></AiOutlineSearch>
            </form>
            <div className='flex gap-2'>
                <Link className='text-white hover:bg-gray-500 duration-100 focus:bg-opacity-5 px-5 py-2 rounded-md'>Home</Link>
                <Link className='text-white hover:bg-gray-500 duration-100 focus:bg-opacity-5 px-5 py-2 rounded-md'>Destination</Link>
                <Link className='text-white hover:bg-gray-500 duration-100 focus:bg-opacity-5 px-5 py-2 rounded-md'>Blog</Link>
                <Link className='text-white hover:bg-gray-500 duration-100 focus:bg-opacity-5 px-5 py-2 rounded-md'>Contact</Link>
            </div>
            <button className='px-8 py-2 font-semibold rounded-md bg-amber-300' onClick={()=>{navigate('/login')}}>Login</button>
        </div>
    );
};

export default Nav;