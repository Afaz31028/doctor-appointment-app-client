import AppointmentCard from '@/components/AppointmentCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

export const metadata = {
  title: "Alpha | My Appointments",
  description: "This is my all Appointments page",
};

const MyAppointmentPage = async() => {

    const session = await auth.api.getSession({
    headers: await headers()
    })
    const user= session?.user;

    const {token} = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/user/${user.id}`,{
        headers:{
            authorization: `Bearer ${token}`
        }
    });
    const appointmentsData= await res.json();

    return (
        <div className='w-full md:max-w-4xl mx-auto'>
            <h1 className='text-2xl font-bold text-center my-8'>Your Total Appointments: {appointmentsData.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-12 mb-20'>
                {
                    appointmentsData.map((appointment, index)=><AppointmentCard key={index} appointment={appointment}></AppointmentCard>)
                }
            </div>
        </div>
    );
};

export default MyAppointmentPage;