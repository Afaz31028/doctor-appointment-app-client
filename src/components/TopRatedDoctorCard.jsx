import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const TopRatedDoctorCard = ({doctor}) => {
     const { _id, name, specialty, image, rating, degree, position } = doctor;
    return (
        <div className="max-w-80 text-black">
              <div className="relative flex justify-center mx-auto w-full h-58">
                <Image
                  className="w-90 h-60 rounded-t-2xl border"
                  src={image}
                  alt="name"
                  width={300}
                  height={200}
                ></Image>
                    <div className='flex gap-1 bg-blue-900 rounded-2xl px-2 text-amber-400 absolute top-3 left-3 items-center font-bold'>
                        <FaStar />
                        <p>{rating}</p>
                    </div>
              </div>
              
              <div className="pl-3 py-5 rounded-b-2xl bg-[#F8F8FF] shadow-2xl">
                <div className="flex justify-between items-center px-1">
                  <p className="text-blue-500 font-bold">{specialty}</p>
                  <div className="flex gap-1 items-center bg-green-200 rounded-2xl px-2">
                    <p className="w-2 h-2 rounded-full bg-green-600"></p>
                    <p className=" text-green-800">Available</p>
                  </div>
                </div>
                <p className="mt-2 text-2xl font-extrabold">{name}</p>
                <div className="h-9 flex items-center">
                  <p>{degree}</p>
                </div>
                <p className="text-xl font-bold text-cyan-600">{position}</p>
                <Button className={"w-40 rounded-none mt-5"}>
                  <Link href={`all-appointments/${_id}`}>View Details</Link>
                </Button>
              </div>
            </div>
    );
};

export default TopRatedDoctorCard;