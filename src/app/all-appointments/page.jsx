import DoctorCard from '@/components/DoctorCard';
import React from 'react';

const AllAppointmentsPage = async() => {

    const res= await fetch('http://localhost:5000/doctors');
    const data= await res.json();

    return (
        <div className='max-w-7xl mx-auto'>
            <p className='text-3xl font-bold text-center my-10'>All Appointments</p>
            <div className='grid grid-cols-3 gap-4 mb-10'>
                {
                    data.map(doctor=><DoctorCard key={doctor._id} doctor={doctor}></DoctorCard>)
                }
            </div>
        </div>
    );
};

export default AllAppointmentsPage;