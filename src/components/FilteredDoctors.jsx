'use client';
import { useState } from "react";
import { Search } from "@/components/Search";
import DoctorCard from "@/components/DoctorCard";

const FilteredDoctors = ({ data }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (value) => {
    setSearchText(value.replace(/\s/g, "").toLowerCase());
  };

  const filteredDoctors = data.filter((doctor) =>
    doctor.name.replace(/\s/g, "").toLowerCase().includes(searchText),
  );

  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row my-15 justify-between items-center px-2 md:px-20">
        <p className="text-3xl mt-5 md:mb-0 font-bold text-center md:text-start">All Appointments</p>
        <Search onSearch={handleSearch} />
      </div>

      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 md:px-15 space-y-6 lg:px-0 gap-10 mb-10">
        {
            filteredDoctors.map((doctor) => (<DoctorCard key={doctor._id} doctor={doctor} />))}
      </div>
    </div>
  );
};

export default FilteredDoctors;
