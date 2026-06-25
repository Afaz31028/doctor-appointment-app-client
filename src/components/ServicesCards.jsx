import React from 'react';
import { MdEventAvailable } from 'react-icons/md';
import { PiTestTubeFill } from 'react-icons/pi';
import { TbRosetteDiscountCheckFilled } from 'react-icons/tb';

const ServicesCards = () => {
    return (
        <div className='text-black py-20'>
           <h1 className='text-4xl font-bold text-center mb-8'>Our Commitments:</h1>
            <div className='flex gap-10 justify-center '>
                <div className='w-75 h-80 px-2 py-5 shadow-md shadow-blue-700 rounded-xl transform hover:scale-110'>
                <div className='flex justify-center'>
                    <div className='w-15 h-15 rounded-full bg-cyan-600 flex justify-center items-center'>
                    <TbRosetteDiscountCheckFilled className='text-5xl text-white'/>
                </div>
                </div>
                <p className='text-lg px-2 text-center mt-3'>At our branch, we are committed to making quality healthcare more affordable for everyone. That's why we offer a 25% discount on all diagnostic tests throughout the year.</p>
            </div>
            <div className='w-75 h-80 px-2 py-5 shadow-md shadow-blue-700 rounded-xl transform hover:scale-110'>
                <div className='flex justify-center'>
                    <div className='w-15 h-15 rounded-full bg-cyan-600 flex justify-center items-center'>
                        <PiTestTubeFill className='text-5xl text-white'/>
                    </div>
                </div>
                <p className='text-lg px-2 text-center mt-3'>We utilize the latest diagnostic machinery to ensure accurate and efficient test results. Our advanced equipment helps healthcare professionals identify and diagnose health conditions with greater precision.</p>
            </div>
            <div className='w-75 h-80 px-2 py-5 shadow-md shadow-blue-700 rounded-xl transform hover:scale-110'>
                <div className='flex justify-center'>
                    <div className='w-15 h-15 rounded-full bg-cyan-600 flex justify-center items-center'>
                        <MdEventAvailable className='text-5xl text-white'/>
                    </div>
                </div>
                <p className='text-lg px-2 text-center mt-3'>Your health is our priority, which is why our services are available 7 days a week. Our dedicated team is ready to assist you from 8:00 AM to 9:00 PM every day.</p>
            </div>
            </div>
        </div>
    );
};

export default ServicesCards;