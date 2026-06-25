import { getAllDoctorsInfo } from "@/lib/data";
import React from "react";
import TopRatedDoctorCard from "./TopRatedDoctorCard";

const TopRatedDoctors = async () => {
  let allDoctors = await getAllDoctorsInfo();
  allDoctors = [...allDoctors].sort(
    (a, b) => Number(b.rating) - Number(a.rating),
  );
  const topDoctors = allDoctors.slice(0, 3);
  return (
    <div className="max-w-7xl mx-auto py-20">
        <h1 className='text-4xl font-bold text-center mb-8'>Top Rated Doctors</h1>
      <div className="flex gap-10 justify-center">
        <div className="grid grid-cols-3 gap-15">
        {topDoctors.map((doctor, index) => (
          <TopRatedDoctorCard key={index} doctor={doctor}></TopRatedDoctorCard>
        ))}
      </div>
      </div>
    </div>
  );
};

export default TopRatedDoctors;
