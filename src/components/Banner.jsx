"use client";
import {motion} from "framer-motion"

import { Button } from "@heroui/react";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="relative max-w-full mx-auto h-180 overflow-hidden bg-[url('/assets/banner-1.jpg')] bg-cover">
      {/* Text Content */}
      <div className="relative max-w-full">
        <div className="absolute left-10 top-25 z-12 text-center">
          <div className="text-[#F0FFFF] bg-black/15 px-10 py-25 rounded-2xl">
            <motion.h1 style={{overflow:"hidden", whiteSpace:"nowrap"}} initial={{width:0}} animate={{width:"100%"}} transition={{duration:5, ease:"easeInOut"}} className="text-8xl font-bold">Welcome</motion.h1>
            <p className="mt-10 text-4xl font-serif text-amber-400">Recieves The best Sevices</p>
            <p className="mt-4 text-4xl font-serif text-amber-400">We Provide The Best Treatment</p>
            <p className="text-3xl font-serif mt-10">For Appointment</p>
            <Button className={'mt-5 w-50 rounded-xl'}><Link href={'/all-appointments'}>Book an Appointment</Link></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
