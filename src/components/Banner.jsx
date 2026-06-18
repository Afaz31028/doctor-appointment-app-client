"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { MdCall } from "react-icons/md";

const images = [
    "/assets/banner-1.jpg",
    "/assets/banner-2.jpg",
    "/assets/banner-4.jpg",
];

export default function Banner() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000); // change every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative max-w-full mx-auto h-180 overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.img
                    key={index}
                    src={images[index]}
                    alt="banner"
                    className="absolute w-full h-full object-cover blur-out-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 3 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut"}}
                />
            </AnimatePresence>

            {/* Text Content */}
            <div className="relative max-w-2xl">
                <div className="absolute left-0 top-0 z-12 flex justify-center items-center mt-0 w-175 h-200 px-20 bg-black/5 backdrop-blur-sm border-none">
                <div className="text-white">
                    <h1 className="text-8xl font-bold">Welcome</h1>
                    <p className="mt-4 text-4xl ">Recieves The best Sevices</p>
                    <p className="mt-4 text-4xl">For Appointment, Visit Our Website</p>
                    <p className="mt-15 text-4xl font-extrabold text-amber-500">Our Helpline: (8am to 9pm)</p>
                    <div className="flex gap-1 items-center mt-2 text-2xl font-extrabold">
                        <MdCall className="text-4xl font-bold" />
                        <p>+08801715-111222</p>
                    </div>
                    <div className="flex gap-1 items-center mt-2 text-2xl font-extrabold">
                        <MdCall className="text-4xl font-bold"/>
                        <p>+08801815-111222</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}