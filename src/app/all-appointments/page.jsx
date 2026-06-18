import DoctorCard from '@/components/DoctorCard';
import { getAllDoctorsInfo } from '@/lib/data';
import React from 'react';

const AllAppointmentsPage = async () => {

    const data= await getAllDoctorsInfo();

    return (
        <div className='max-w-7xl flex justify-center mx-auto'>
            <div>
                <p className='text-3xl font-bold text-center my-10'>All Appointments</p>
                <div className='grid grid-cols-3 gap-10 mb-10'>
                    {
                        data.map(doctor => <DoctorCard key={doctor._id} doctor={doctor}></DoctorCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllAppointmentsPage;