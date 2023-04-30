import React from 'react';
import logoLight from '../../assets/logo-light.png';
import { AiOutlineSearch } from "react-icons/ai";

const Nav = () => {
    return (
        <div className='flex justify-between items-end gap-10'>
            <img src={logoLight} alt="logo" />
            <form className='relative'>
                <input className='bg-white bg-opacity-30 placeholder:text-gray-200 px-5 py-2 w-[260px] rounded-md outline-none duration-100 focus:w-[280px]' type="text" name='search' placeholder='Search your destination' />
                <AiOutlineSearch className='absolute text-gray-200 text-2xl top-1/2 -translate-y-1/2 right-2'></AiOutlineSearch>
            </form>
            <div>

            </div>
        </div>
    );
};

export default Nav;