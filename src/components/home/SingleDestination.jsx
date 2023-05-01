import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import { DateRangePicker } from 'react-date-range';
// import 'react-date-range/dist/styles.css'; // main css file
// import 'react-date-range/dist/theme/default.css';
import {RangeDatePicker} from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";

const SingleDestination = () => {
    const data = useLoaderData();

    console.log(data);
    return (
        <div>
            <div className='grid grid-cols-2 gap-20'>
                <div className=' ml-28'>
                    <h1 className='font-bebas text-white text-8xl'>{data.destination}</h1>
                    <p className='text-white mt-5 text-sm font-monts'>{data.description}</p>
                    
                </div>
                <div className=''>
                    <form className='bg-white w-[400px] p-5 rounded-md'>
                        <div>
                            <label className='block text-xs text-gray-700' htmlFor="origin">Origin</label>
                            <input className='block w-full bg-gray-100 text-black font-bold py-3 px-4 rounded-md mt-1' type="text" name='origin' placeholder='Where are you from?'/>
                        </div>
                        <div className='mt-5'>
                            <label className='block text-xs text-gray-700' htmlFor="destination">Destination</label>
                            <input className='block w-full bg-gray-100 text-black font-bold py-3 px-4 rounded-md mt-1' type="text" name='destination' placeholder="What's your destination"/>
                        </div>
                        <div className='mt-5'>
                            <RangeDatePicker
                                startDate={new Date()}
                                endDate={new Date()}
                                onChange={(startDate, endDate) => onDateChange(startDate, endDate)}
                                minDate={new Date(1900, 0, 1)}
                                maxDate={new Date(2100, 0, 1)}
                                dateFormat="DD-MM"
                                startDatePlaceholder="Start Date"
                                endDatePlaceholder="End Date"
                                
                            />
                        </div>
                        <div className='mt-5'>
                            <button className='px-8 py-2 font-semibold rounded-md bg-yellow-400 mt-7 block w-full justify-between items-center gap-3 active:scale-95 duration-150'>Booking</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingleDestination;