import React from 'react';
import { FaUser } from 'react-icons/fa';
import { FaUserDoctor } from 'react-icons/fa6';
import { GrDocumentTest } from 'react-icons/gr';
import { LiaStethoscopeSolid } from 'react-icons/lia';

const StatSection = () => {
    return (
        <div className='w-full py-20'>
            <h1 className='text-4xl font-bold text-center mb-8'>Users Trust ALPHA</h1>
            <div className='flex gap-10 justify-center'>
                <div className='shadow-md shadow-fuchsia-500 p-5 w-60 rounded-xl text-center'>
                    <div className='flex justify-center'><p><FaUserDoctor className='text-5xl'/></p></div>
                    <p className='text-xl font-bold mt-2'>Doctors Available</p>
                    <p className='text-4xl font-extrabold text-blue-500'>50+</p>
                </div>
                <div className='shadow-md shadow-fuchsia-500 p-5 w-60 rounded-xl text-center'>
                    <div className='flex justify-center'><p><LiaStethoscopeSolid className='text-5xl'/></p></div>
                    <p className='text-xl font-bold mt-2'>Departments</p>
                    <p className='text-4xl font-extrabold text-blue-500'>25+</p>
                </div>
                <div className='shadow-md shadow-fuchsia-500 p-5 w-60 rounded-xl text-center'>
                    <div className='flex justify-center'><p><GrDocumentTest className='text-5xl'/></p></div>
                    <p className='text-xl font-bold mt-2'>Lab Test Available</p>
                    <p className='text-4xl font-extrabold text-blue-500'>70+</p>
                </div>
                <div className='shadow-md shadow-fuchsia-500 p-5 w-60 rounded-xl text-center'>
                    <div className='flex justify-center'><p><FaUser className='text-5xl'/></p></div>
                    <p className='text-xl font-bold mt-2'>Bookings Done</p>
                    <p className='text-4xl font-extrabold text-blue-500'>2K+</p>
                </div>
            </div>
        </div>
    );
};

export default StatSection;