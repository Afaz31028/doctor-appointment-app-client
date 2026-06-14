"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Banner() {
    return (
        <div className="bg-indigo-50 flex w-full mx-auto px-25">
            <div className="flex justify-center items-center bg-blue-100 w-full">
                <div>
                    <div className="relative">
                        <p className="text-5xl font-extrabold text-yellow-600">Welcome</p>
                        <p className="text-3xl absolute top-11 left-14 font-extrabold">Dear Guest</p>
                    </div>
                    <div className="relative">
                        <p className="text-4xl font-bold mt-15 text-red-600">Receieves</p>
                        <p className="text-2xl font-bold mt-1 absolute top-8 left-5">Our Best Services</p>
                    </div>
                    <div className="relative">
                        <p className="text-4xl font-bold mt-10 text-red-600">Checkup</p>
                        <p className="text-2xl font-bold mt-1 absolute top-8 left-5">With Our Experts</p>
                    </div>
                </div>
            </div>
            <Swiper className="max-w-5xl"
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                <SwiperSlide>
                    <Image
                        src="/assets/banner-1.png"
                        alt="Banner 1"
                        width={1200}
                        height={500}
                        className="w-full h-150"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex gap-5">
                        <Image
                            src="/assets/banner-2.png"
                            alt="Banner 2"
                            width={1200}
                            height={500}
                            className="w-full h-150"
                        />

                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex gap-10">
                    <Image
                        src="/assets/banner-3.png"
                        alt="Banner 3"
                        width={1200}
                        height={500}
                        className="w-full h-150"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}