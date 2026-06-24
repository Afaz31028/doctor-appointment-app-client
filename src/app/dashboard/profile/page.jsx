import { UpdateProfileModal } from "@/components/UpdateProfileModal";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Alpha | My Profile",
  description: "This is My Profile Page",
};

const MyProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  return (
    <div className="max-w-100 mx-auto my-15">
      <h1 className="text-3xl font-bold text-center mb-5">User Profile</h1>
      <div className="rounded-2xl p-3 border relative shadow-2xl  transform hover:scale-105">
        <div className="w-94 h-40 rounded-t-2xl bg-cyan-900 shadow shadow-cyan-800">
        </div>
        <div className="bg-gray-100 w-40 h-40 rounded-full border-5 border-black absolute top-25 left-30">
          {user?.image ? (
            <Image
              className="w-38 h-38 rounded-full object-cover"
              src={user?.image}
              alt="profile-pic"
              width={100}
              height={100}
            />
          ) : (
            <div className="w-38 h-38 rounded-full bg-gray-500 flex items-center justify-center text-4xl text-white">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <div className="bg-indigo-100 shadow-lg shadow-cyan-800 h-70 pt-28 text-center text-lg font-semibold px-5 rounded-b-2xl">
          <p><span className="text-lg font-serif">{user?.name}</span></p>
          <p className="mt-1"><span className="text-lg font-serif">{user?.email}</span></p>
          <div className="mt-8 flex justify-center">
            <UpdateProfileModal user={user}></UpdateProfileModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
