import React, { useEffect, useState } from 'react';
import Carousel from '../dumb/Carousel';
import { useLoaderData } from 'react-router-dom';
import { HiArrowRight } from "react-icons/hi";

const Destinations = () => {
    const [current,setCurrent] = useState(0);
    const data = useLoaderData();
    console.log(data);
    
    useEffect(()=>{
        console.log('current :',current);
    },[current])

    const updateCurrent = current =>{
        setCurrent(current);
    }
    
    
    return (
            <div className='grid grid-cols-10 gap-5'>
                <div className='col-span-4 ml-28'>
                    <h1 className='font-bebas text-white text-8xl'>{data[current].destination}</h1>
                    <p className='text-white mt-5 text-sm font-monts'>{data[current].description.slice(0,250)}...</p>
                    <button className='px-8 py-2 font-semibold rounded-md bg-yellow-400 w-fit mt-7 flex justify-between items-center gap-3'>Booking<HiArrowRight className='text-xl'></HiArrowRight></button>
                </div>
                <div className='col-span-6'>
                    <Carousel current={{current,setCurrent}} data={data}></Carousel>
                </div>
            </div>
    );
};

export default Destinations;