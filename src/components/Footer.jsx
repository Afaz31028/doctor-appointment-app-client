import React from "react";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare, FaListAlt, FaStethoscope } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoHome, IoLogoYoutube } from "react-icons/io5";
import { MdAddCall, MdDashboard } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full md:max-w-full bg-blue-950 text-white">
      <div className="px-8 py-7 md:px-20 lg:px-60 md:pt-15 md:pb-8 md:flex flex-row justify-center md:justify-between">
        <div className="text-center md:text-start">
          <div className="flex items-center gap-1 justify-center md:justify-start">
            <FaStethoscope className="text-3xl font-bold text-blue-800" />
            <p className="text-2xl font-bold">
              <span className="text-red-600">A</span>
              <span>LPH</span>
              <span>A</span>
            </p>
          </div>
          <p className="max-w-90 text-sm text-gray-200 my-2">
            Alpha Diagnostic Center provides the best services and ensures best
            treatment. Contact us with our helpline.
          </p>
          <p className="text-lg mt-5 md:mt-3 font-bold text-center md:text-start text-yellow-400">
            Our Helplines: (Available: 8am-10pm)
          </p>
          <div className="flex gap-2 items-center text-lg mt-2 justify-center md:justify-start">
            <MdAddCall />
            <p>+8801715-111222</p>
          </div>
          <div className="flex gap-2 items-center text-lg justify-center md:justify-start">
            <MdAddCall />
            <p>+8801815-111222</p>
          </div>
        </div>
        <div className="mt-5 md:mt-3">
          <h1 className="text-lg font-bold text-yellow-400 text-center md:text-start">Our Services</h1>
          <ul>
            <div className="flex gap-1 items-center mt-1 justify-center md:justify-start">
              <IoHome />
              <li>Home</li>
            </div>
            <div className="flex gap-1 items-center my-1 justify-center md:justify-start">
              <FaListAlt />
              <li>All Appointments</li>
            </div>
            <div className="flex gap-1 items-center justify-center md:justify-start">
              <MdDashboard />
              <li className="">Dashboard</li>
            </div>
          </ul>
        </div>
        <div className="mt-5 md:mt-3">
          <h1 className="text-lg font-bold text-yellow-400 text-center md:text-start">Social Links</h1>
          <ul>
            <div className="flex gap-1 items-center mt-1 justify-center md:justify-start">
              <FaFacebookSquare />
              <li>Facebook</li>
            </div>
            <div className="flex gap-1 items-center my-1 justify-center md:justify-start">
              <FaSquareInstagram />
              <li>Instagram</li>
            </div>
            <div className="flex gap-1 items-center my-1 justify-center md:justify-start">
              <AiFillTikTok />
              <li>TikTok</li>
            </div>
            <div className="flex gap-1 items-center justify-center md:justify-start">
              <IoLogoYoutube />
              <li>Youtube</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-500 px-8 md:px-20 lg:px-60 py-3 text-gray-300 md:flex flex-row justify-center md:justify-between items-center">
        <p className="text-center md:text-start">&copy;copyright by alpha. All rights reserved</p>
        <div>
          <ul className="flex gap-4 items-center justify-center md:justify-start">
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
