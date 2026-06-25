import DoctorCard from '@/components/DoctorCard';
import FilteredDoctors from '@/components/FilteredDoctors';
import { Search } from '@/components/Search';
import { getAllDoctorsInfo } from '@/lib/data';
import React from 'react';

export const metadata = {
  title: "Alpha | All Appointments",
  description: "This page includes all available doctors info",
};

const AllAppointmentsPage = async () => {

    const data= await getAllDoctorsInfo();

    return (
        <div className='w-full md:max-w-6xl mx-auto'>
            <FilteredDoctors data={data}></FilteredDoctors>
        </div>
    );
};

export default AllAppointmentsPage;