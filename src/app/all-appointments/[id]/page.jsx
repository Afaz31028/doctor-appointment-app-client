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
       headers:
       {
            authorization: `Bearer ${token}`
       }
    });
    const data = await res.json();
    const { _id, name, specialty, image, experience, availability, availableDays, description, hospital, position, location, fee, degree } = data;
    // console.log(data)

    return (
        <div className='max-w-230 mx-auto my-20'>
            <h1 className='text-3xl text-center font-bold text-black'><span className='border-b-2 border-black'>Doctor's Profile</span></h1>
           <div className='flex gap-2 mt-2 text-center text-black bg-white border-black shadow-lg shadow-blue-800 rounded-2xl pt-10'>
             <div className='border-r-2 px-10 pb-10 border-black flex-1'>
                <div className='flex justify-center mx-auto'>
                    <Image className='w-50 h-50 border-4 border-black rounded-full' src={image} alt='name' width={50} height={50}></Image>
                </div>
                <div>
                    <p className='text-2xl text-blue-600 font-extrabold mt-3'>{name}</p>
                    <p className='text-[1rem] text-black font-serif'>{degree}</p>
                    <p className='text-xl font-extrabold text-black'>{position}</p>
                    <p className='text-xl font-serif text-black'>{hospital}</p>
                    <p className='text-2xl text-blue-800 font-extrabold mt-3'>{specialty}</p>
                </div>
            </div>
            <div className='px-10 text-start pb-10 flex-1'>
                    <p><span className='text-xl font-bold text-blue-800 border-b-2 border-blue-700'>Speciality</span></p>
                    <p className='text-lg font-serif'>{description}</p> 
                    <p className='mt-2'><span className='text-xl font-bold text-blue-800 border-b-2 border-blue-700'>Experience:</span></p>
                    <p className='text-lg font-serif'>{experience}</p>
                    <p className='mt-2'><span className='text-xl font-bold text-blue-800 border-b-2 border-blue-700'>Available Days:</span></p>
                    <div className='grid grid-cols-3 gap-0'>
                    {
                        availableDays.map((day,index)=><p className='text-lg font-serif' key={index}>{day}</p>)
                    }
                    </div>
                    <p className='mt-2'><span className='text-xl font-bold text-blue-800 border-b-2 border-blue-700'>Available Time:</span></p>
                    <div>
                    {
                        availability.map((day,index)=><p className='text-lg font-serif' key={index}>{day}</p>)
                    }
                    </div>
                    <p className='mt-3'><span className='text-2xl font-bold text-blue-950'>Consultation Fee: {fee}tk</span></p>
                    <AppointmentModal data={data}></AppointmentModal>

            </div>
           </div>
        </div>
    );
};

export default DoctorDetailsPage;