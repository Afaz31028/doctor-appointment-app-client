"use client";
import {motion} from "framer-motion"

import { Button } from "@heroui/react";
import Link from "next/link";
import ServicesCards from "./ServicesCards";

export default function Banner() {
  return (
    <div className="max-w-full mx-auto overflow-hidden bg-[url('/assets/banner.png')] bg-cover">
      {/* Text Content */}
      <div className="relative max-w-full h-180">
        <div className="absolute left-30 top-25 z-12 text-center">
          <div className="text-blue-800 px-10 py-20 rounded-2xl">
            <motion.h1 style={{overflow:"hidden", whiteSpace:"nowrap"}} initial={{width:0}} animate={{width:"100%"}} transition={{duration:5, ease:"easeInOut"}} className="text-8xl font-bold">Welcome</motion.h1>
            <p className="mt-10 text-4xl font-serif text-black">We Provide The best Sevices</p>
            <p className="mt-4 text-4xl font-serif text-black">and The Best Treatment</p>
            <p className="text-3xl font-serif mt-10 text-black">For Appointment</p>
            <Button className={'mt-5 w-50 rounded-xl'}><Link href={'/all-appointments'}>Book an Appointment</Link></Button>
          </div> 
        </div>
      </div>
    </div>
  );
}
