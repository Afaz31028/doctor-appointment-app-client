import Link from 'next/link';
import React from 'react';

const DashboardMenuBar = () => {
    return (
        <div className='bg-blue-950 text-white'>
            <div className='px-40 py-5 font-semibold'>
                <ul className='flex gap-6 items-center'>
                    <Link href={"/dashboard/my-appointment"}><li className='hover:border-b hover:border-white'>My Appointment</li></Link>
                    <Link href={"/dashboard/profile"}><li className='hover:border-b hover:border-white'>My Profile</li></Link>
                </ul>
            </div>
        </div>
    );
};

export default DashboardMenuBar;