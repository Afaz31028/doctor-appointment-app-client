import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DoctorCard = ({doctor}) => {
    const {_id, name, specialty, image,fee}= doctor;
    return (
        <Card className='max-w-90 border bg-blue-950 text-white'>
            <div className='flex justify-center mx-auto w-31 h-31 border-2 rounded-full border-amber-700'>
                <Image className='w-30 h-30 rounded-full' src={image} alt='name' width={200} height={200}></Image>
            </div>
            <div className='text-center px-6 pb-4'>
                <h3 className='text-xl font-serif text-rose-500'>{name}</h3>
                <p className='text-lg font-bold h-10'>Specialist: {specialty}</p>
                <p className='text-xl font-extrabold text-cyan-400 mt-2'>Fee: {fee}</p>
                <Button className={'w-full rounded-none mt-5'}><Link href={`all-appointments/${_id}`}>Doctor Details</Link></Button>
            </div>
        </Card>
    );
};

export default DoctorCard;