import React from "react";
import { GoDotFill } from "react-icons/go";
import { TiTick } from "react-icons/ti";

const HealthPackages = () => {
  return (
    <div className="max-w-7xl mx-auto py-20">
      <h1 className="text-4xl font-bold text-center mb-8">
        Health Check Up Packages
      </h1>
      <div className="grid grid-cols-3 gap-10 mt-5">
        <div className="w-90 h-100 rounded-2xl shadow-md shadow-amber-600 px-5 py-8 bg-gray-50">
          <h1 className="text-2xl font-bold">Basic Health Check Up</h1>
          <ul className="py-3">
            <div className="flex gap-1 items-center text-lg font-bold text-blue-700">
              <GoDotFill />
              <li>CBC</li>
            </div>
            <div className="flex gap-1 items-center text-lg font-bold text-blue-700">
              <GoDotFill />
              <li>S. Creatinine</li>
            </div>
            <div className="flex gap-1 items-center text-lg font-bold text-blue-700">
              <GoDotFill />
              <li>ECG</li>
            </div>
            <div className="flex gap-1 items-center text-lg font-bold text-blue-700">
              <GoDotFill />
              <li>FBS</li>
            </div>
            <div className="flex gap-1 items-center text-lg font-bold text-blue-700">
              <GoDotFill />
              <li>SGPT(ALT)</li>
            </div>
            <div className="flex gap-1 items-center text-lg font-bold text-blue-700">
              <GoDotFill />
              <li>TSH</li>
            </div>
            <div className="flex gap-1 items-center text-lg font-bold text-blue-700">
              <GoDotFill />
              <li>X-Ray Chest P/A</li>
            </div>
            <div className="flex gap-1 items-center text-lg font-bold text-blue-700">
              <GoDotFill />
              <li>Urine R/M/E</li>
            </div>
          </ul>
          <p className="text-2xl mt-3 font-extrabold text-center w-50 bg-green-700 px-5 py-1 rounded-xl text-white">Price: 2000tk</p>
        </div>
        <div className="w-85 h-120 rounded-2xl shadow-md shadow-red-600 px-3 py-8 bg-gray-50">
          <h1 className="text-2xl font-bold">Executive Health Check Up</h1>
          <h1 className="text-2xl font-bold text-center">For Male</h1>
          <ul className="p-3">
            <div className="flex gap-1 items-center text-lg font-bold text-blue-700">
              <GoDotFill />
              <li>CBC</li>
            </div>
            <div className="flex gap-1 items-center text-lg font-bold text-blue-700">
              <GoDotFill />
              <li>Lipid Profile</li>
            </div>
            <div className="flex gap-1 items-center text-lg font-bold text-blue-700">
              <GoDotFill />
              <li>S. Creatinine</li>
            </div>
            <div className="flex gap-1 items-center text-lg font-bold text-blue-700">
              <GoDotFill />
              <li>ECG</li>
            </div>
            <div className="flex gap-1 items-center text-lg font-bold text-blue-700">
              <GoDotFill />
              <li>FBS</li>
            </div>
            <div className="flex gap-1 items-center text-lg font-bold text-blue-700">
              <GoDotFill />
              <li>HbA1C</li>
            </div>
            <div className="flex gap-1 items-center text-lg font-bold text-blue-700">
              <GoDotFill />
              <li>TSH</li>
            </div>
            <div className="flex gap-1 items-center text-lg font-bold text-blue-700">
              <GoDotFill />
              <li>X-Ray Chest P/A</li>
            </div>
            <div className="flex gap-1 items-center text-lg font-bold text-blue-700">
              <GoDotFill />
              <li>Urine R/M/E</li>
            </div>
            <div className="flex gap-1 items-center text-lg font-bold text-blue-700">
              <GoDotFill />
              <li>S. Electrolytes</li>
            </div>
          </ul>
          <p className="text-2xl font-extrabold text-center bg-green-700 py-1 px-2 text-white w-50 rounded-xl mt-3">Price: 2700tk</p>
        </div>
        <div className="w-90 h-100 rounded-2xl shadow-md shadow-amber-600 px-5 py-6 bg-gray-50">
          <h1 className="text-2xl font-bold">Executive Health Check Up</h1>
          <h1 className="text-2xl font-bold text-center">For Female</h1>
          <ul className="py-3">
            <div className="flex gap-1 items-center text-lg font-bold text-blue-700">
              <GoDotFill />
              <li>CBC</li>
            </div>
            <div className="flex gap-1 items-center text-lg font-bold text-blue-700">
              <GoDotFill />
              <li>S. Creatinine</li>
            </div>
            <div className="flex gap-1 items-center text-lg font-bold text-blue-700">
              <GoDotFill />
              <li>USG of Whole Abdomen</li>
            </div>
            <div className="flex gap-1 items-center text-lg font-bold text-blue-700">
              <GoDotFill />
              <li>HBsAg</li>
            </div>
            <div className="flex gap-1 items-center text-lg font-bold text-blue-700">
              <GoDotFill />
              <li>SGPT(ALT)</li>
            </div>
            <div className="flex gap-1 items-center text-lg font-bold text-blue-700">
              <GoDotFill />
              <li>TSH</li>
            </div>
            <div className="flex gap-1 items-center text-lg font-bold text-blue-700">
              <GoDotFill />
              <li>X-Ray Chest P/A</li>
            </div>
            <div className="flex gap-1 items-center text-lg font-bold text-blue-700">
              <GoDotFill />
              <li>Urine R/M/E</li>
            </div>
          </ul>
          <p className="text-2xl font-extrabold text-center bg-green-700 py-1 px-2 text-white w-50 rounded-xl mt-3">Price: 2200tk</p>
        </div>
      </div>
    </div>
  );
};

export default HealthPackages;
