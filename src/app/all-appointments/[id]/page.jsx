import { AppointmentModal } from '@/components/AppointmentModal';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

export const metadata = {
  title: "Alpha | Doctor Info",
  description: "This page describles a specific doctor details",
};

const DoctorDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(doctorsInfo)

    const {token} = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch(`http://localhost:5000/doctors/${id}`,{
       headers:{
            authorization: `Bearer ${token}`
       }
    });
    const data = await res.json();
    const { _id, name, specialty, image, experience, availability, availableDays, description, hospital, position, location, fee, degree } = data;
    // console.log(data)

    return (
        <div className='max-w-230 mx-auto my-20'>
            <h1 className='text-3xl text-center font-bold text-black'>Doctor's Profile</h1>
           <div className='flex gap-2 mt-10 text-center text-white bg-cyan-800 rounded-2xl pt-10'>
             <div className='border-r-2 px-10 pb-10 border-black'>
                <div className='flex justify-center mx-auto'>
                    <Image className='w-50 h-50 border-4 border-black rounded-full' src={image} alt='name' width={50} height={50}></Image>
                </div>
                <div>
                    <p className='text-2xl text-amber-400 font-extrabold mt-3'>{name}</p>
                    <p className='text-lg font-serif text-gray-300'>{degree}</p>
                    <p className='text-xl font-extrabold text-gray-200'>{position}</p>
                    <p className='text-xl font-serif text-gray-300'>{hospital}</p>
                    <p className='text-xl text-amber-600 font-extrabold mt-3'><span className='text-gray-200'>Specialist:</span> {specialty}</p>
                </div>
            </div>
            <div className='px-10 text-start pb-10'>
                    <p><span className='text-lg font-bold bg-emerald-600 px-1 rounded-xl'>Speciality:</span></p>
                    <p className='text-xl font-serif'>{description}</p> 
                    <p className='mt-2'><span className='text-lg font-bold bg-emerald-600 px-1 rounded-xl'>Experience:</span></p>
                    <p className='text-xl font-serif'>{experience}</p>
                    <p className='mt-2'><span className='text-lg font-bold bg-emerald-600 px-1 rounded-xl'>Available Days:</span></p>
                    <div className='grid grid-cols-3 gap-0'>
                        {
                            availableDays.map((day,index)=><p className='text-xl font-serif' key={index}>{day}</p>)
                        }
                    </div>
                    <p className='mt-2'><span className='text-lg font-bold bg-emerald-600 px-1 rounded-xl'>Available Time:</span></p>
                    <div>
                        {
                            availability.map((day,index)=><p className='text-xl font-serif' key={index}>{day}</p>)
                        }
                    </div>
                    <p className='mt-3'><span className='bg-amber-900 px-2 py-1 text-2xl font-bold'>Fee: {fee}tk</span></p>
                    <AppointmentModal data={data}></AppointmentModal>

            </div>
           </div>
        </div>
    );
};

export default DoctorDetailsPage;