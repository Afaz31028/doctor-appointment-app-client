import React from 'react';
import { AiFillTikTok } from 'react-icons/ai';
import { FaFacebookSquare, FaListAlt, FaStethoscope } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import { IoHome, IoLogoYoutube } from 'react-icons/io5';
import { MdAddCall, MdDashboard } from 'react-icons/md';

const Footer = () => {
    return (
        <div className='bg-blue-950 text-white'>
            <div className='px-60 pt-15 pb-8 flex justify-between'>
                <div>
                <div className="flex items-center gap-1">
                    <FaStethoscope className="text-3xl font-bold text-blue-800" />
                    <p className="text-2xl font-bold"><span className="text-red-600">A</span><span>LPH</span><span>A</span></p>
                </div>
                <p className='max-w-90 text-sm text-gray-200 my-2'>Alpha Diagnostic Center provides the best services and ensures best treatment. Contact us with our helpline.</p>
                <p className='text-xl mt-3 font-bold text-yellow-400'>Our Helplines: (Available: 8am-10pm)</p>
               <div className='flex gap-2 items-center text-lg'>
                    <MdAddCall />
                    <p>+8801715-111222</p>
               </div>
                <div className='flex gap-2 items-center text-lg'>
                    <MdAddCall />
                    <p>+8801815-111222</p>
                </div>
            </div>
            <div className='mt-2'>
                <h1 className='text-lg font-bold text-yellow-400'>Our Services</h1>
                <ul>
                    <div className='flex gap-1 items-center mt-1'>
                        <IoHome />
                        <li>Home</li>
                    </div>
                    <div className='flex gap-1 items-center my-1'>
                        <FaListAlt />
                        <li>All Appointments</li>
                    </div>
                   <div className='flex gap-1 items-center'>
                         <MdDashboard />
                        <li className=''>Dashboard</li>
                   </div>
                </ul>
            </div>
            <div className='mt-2'>
                <h1 className='text-lg font-bold text-yellow-400'>Social Links</h1>
                <ul>
                    <div className='flex gap-1 items-center mt-1'>
                        <FaFacebookSquare />
                        <li>Facebook</li>
                    </div>
                    <div className='flex gap-1 items-center my-1'>
                        <FaSquareInstagram />
                        <li>Instagram</li>
                    </div>
                    <div className='flex gap-1 items-center my-1'>
                        <AiFillTikTok />
                        <li>TikTok</li>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <IoLogoYoutube />
                        <li>Youtube</li>
                    </div>
                </ul>
            </div>
            </div>
            <div className='border-t-1 border-gray-500 px-60 py-3 text-gray-300 flex justify-between items-center'>
                <p>&copy;copyright by alpha. All rights reserved</p>
                <div>
                    <ul className='flex gap-4 items-center'>
                        <li>Terms of Services</li>
                        <li>Privacy Policy</li>
                        <li>Cookies</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;