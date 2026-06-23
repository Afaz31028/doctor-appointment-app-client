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
      <div className="flex my-15 justify-between items-center px-10">
        <p className="text-3xl font-bold">All Appointments</p>
        <Search onSearch={handleSearch} />
      </div>

      <div className="grid grid-cols-3 gap-10 mb-10">
        {
            filteredDoctors.map((doctor) => (<DoctorCard key={doctor._id} doctor={doctor} />))}
      </div>
    </div>
  );
};

export default FilteredDoctors;
