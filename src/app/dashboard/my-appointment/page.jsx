import AppointmentCard from '@/components/AppointmentCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyAppointmentPage = async() => {

    const session = await auth.api.getSession({
    headers: await headers()
    })
    const user= session?.user;

    const {token} = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch(`http://localhost:5000/appointments/user/${user.id}`,{
        headers:{
            authorization: `Bearer ${token}`
        }
    });
    const appointmentsData= await res.json();

    return (
        <div>
            <h1 className='text-2xl font-bold text-center my-8'>Your Total Appointments: {appointmentsData.length}</h1>
            <div className='space-y-10 mt-12 mb-20'>
                {
                    appointmentsData.map(appointment=><AppointmentCard key={appointment._id} appointment={appointment}></AppointmentCard>)
                }
            </div>
        </div>
    );
};

export default MyAppointmentPage;