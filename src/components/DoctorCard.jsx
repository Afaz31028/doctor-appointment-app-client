import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DoctorCard = ({doctor}) => {
    const {_id, name, specialty, image,fee,degree, position}= doctor;
    return (
        <div className='max-w-90 text-white'>
            <div className='flex justify-center mx-auto w-full h-70'>
                <Image className='w-90 h-70 border-2 rounded-t-2xl'  src={image} alt='name' width={300} height={200}></Image>
            </div>
            <div className='bg-cyan-900 px-2 py-5 rounded-b-2xl'>
                <p className='text-2xl font-extrabold'>{name}</p>
                <div className='h-9 flex items-center'>
                    <p>{degree}</p>
                </div>
                <p className='text-lg font-bold'>{position}</p>
                <p className='text-lg font-serif'>{specialty}</p>
                <Button className={'w-40 bg-white text-black rounded-none mt-5'}><Link href={`all-appointments/${_id}`}>View Details</Link></Button>
            </div>
            {/* <div className='text-center px-6 pb-4 bg-blue-300 mt-[-12px] rounded-b-2xl'>
                <h3 className='mt-2 text-2xl font-extrabold text-fuchsia-700'>{name}</h3>
                <p className='text-xl font-extrabold h-10 text-black mt-2 '>Specialist: {specialty}</p>
                <p className='text-2xl font-extrabold text-fuchsia-800 mt-2'>Fee: {fee}tk</p>
                <Button className={'w-full bg-purple-800 rounded-none mt-5'}><Link href={`all-appointments/${_id}`}>View Details</Link></Button>
            </div> */}
        </div>
    );
};

export default DoctorCard;