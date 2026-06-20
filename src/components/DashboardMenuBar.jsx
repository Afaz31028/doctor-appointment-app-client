import Link from 'next/link';
import React from 'react';

const DashboardMenuBar = () => {
    return (
        <div className='bg-gray-200'>
            <div className='px-40 py-5 font-semibold'>
                <ul className='flex gap-4 items-center'>
                    <Link href={"/dashboard/my-appointment"}><li>My Appointment</li></Link>
                    <Link href={"/dashboard/profile"}><li>My Profile</li></Link>
                </ul>
            </div>
        </div>
    );
};

export default DashboardMenuBar;