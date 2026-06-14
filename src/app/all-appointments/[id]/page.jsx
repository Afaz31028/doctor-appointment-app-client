import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DoctorDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`http://localhost:5000/doctors/${id}`);
    const data = await res.json();
    const { _id, name, specialty, image, experience, availability,availableDays, description, hospital, position, location, fee } = data;
    // console.log(data)

    return (
        <div>
            <h1>Doctor's Information</h1>
            <Card>
                <div className='flex gap-2 mx-auto'>
                    <div className='border-5 border-cyan-950 rounded-2xl px-5 max-w-90 py-10'>
                        <div className='flex justify-center mx-auto w-51 h-51 border-3 rounded-full border-emerald-950'>
                            <Image className='w-50 h-50 rounded-full' src={image} alt='name' width={200} height={200}></Image>
                        </div>
                        <div className='text-center px-6 pb-4 mt-5'>
                            <h3 className='text-xl font-serif text-rose-500'>{name}</h3>
                            <p className='text-sm font-bold'>{position}</p>
                            <p className='text-sm font-bold'>{hospital}</p>
                            <p className='text-lg font-bold h-10 border text-white bg-mauve-700 mt-2'>Specialist: {specialty}</p>
                            <p className='text-xl font-extrabold text-cyan-800'>Consultation Fee: {fee}</p>
                        </div>
                    </div>
                    <div className='border-5 border-cyan-950 rounded-2xl px-5 max-w-90 py-15'>
                        <p className='px-2 text-sm bg-blue-950 w-25 text-center text-white rounded-2xl'>Description</p>
                        <p className='text-sm font-bold'>{description}</p>
                        <p className='px-2 text-sm bg-blue-950 w-22 mt-4 text-center text-white rounded-2xl'>Experience</p>
                        <p className='text-sm font-bold'>{experience}+ Experience</p>
                        <p className='px-2 text-sm bg-blue-950 w-28 mt-4 text-center text-white rounded-2xl'>Scheduled Day</p>
                        <div className='grid grid-cols-3 gap-1 mt-2'>
                            {
                                availableDays.map((schedule,index)=> <p key={index}><span className='px-2 text-sm font-bold bg-blue-200 rounded-lg'>{schedule}</span></p>)
                            }
                        </div>
                        <p className='px-2 text-sm bg-blue-950 w-28 mt-4 text-center text-white rounded-2xl'>Available Time</p>
                        <div className='mt-2'>
                            {
                                availability.map((schedule,index)=> <p className='mt-2' key={index}><span className='px-2 text-sm font-bold bg-blue-200 rounded-lg'>{schedule}</span></p>)
                            }
                        </div>
                        <Button className={'w-40 rounded-none mt-5'}><Link href={'#'}>Book Appointment</Link></Button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default DoctorDetailsPage;