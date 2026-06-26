"use client";
import {motion} from "framer-motion"

import { Button } from "@heroui/react";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="max-w-full mx-auto overflow-hidden bg-[url('/assets/banner.png')] bg-cover bg-center lg:bg-auto overflow-hidden lg:bg-left-top bg-no-repeat">
      <div className="relative w-full md:max-w-full h-100 md:h-185">
        <div className="absolute left-5 top-5 md:top-20 lg:left-30 lg:top-15 z-12 md:text-center">
          <div className="text-blue-800 md:py-12 lg:px-10 lg:py-20 rounded-2xl">
            <motion.h1 style={{overflow:"hidden", whiteSpace:"nowrap"}} initial={{width:0}} animate={{width:"100%"}} transition={{duration:5, ease:"easeInOut"}} className="text-4xl md:text-8xl font-bold">Welcome</motion.h1>
            <p className="mt-5 md:mt-10 text-xl md:text-4xl font-serif text-black">We Provide The Best Sevices</p>
            <p className="md:mt-2 text-xl md:text-4xl font-serif text-black">and The Best Treatment</p>
            <p className="text-2xl md:text-3xl font-serif mt-5 md:mt-10 text-black">For Appointment</p>
            <Button className={'mt-2 md:mt-4 w-40 md:w-50 rounded-xl'}><Link href={'/all-appointments'}>Book an Appointment</Link></Button>
            <p className="mt-5 md:mt-8 text-2xl md:text-4xl font-extrabold text-amber-600">Our Helplines</p>
            <p className="text-xl md:text-3xl font-extrabold mt-3">+8801715-111222</p>
            <p className="text-xl md:text-3xl font-extrabold mt-1">+8801815-111222</p>
          </div> 
        </div>
      </div>
    </div>
  );
}
