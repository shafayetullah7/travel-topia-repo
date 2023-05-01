import React, { useEffect, useState } from 'react';
import Carousel from '../dumb/Carousel';
import { useLoaderData } from 'react-router-dom';

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
            <div className='grid grid-cols-8'>
                <div className='col-span-3'>
                    <h1 className='font-bebas'></h1>
                </div>
                <div className='col-span-5'>
                    <Carousel current={{current,setCurrent}} data={data}></Carousel>
                </div>
            </div>
    );
};

export default Destinations;