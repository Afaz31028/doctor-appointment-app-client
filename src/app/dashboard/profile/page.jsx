import { UpdateProfileModal } from "@/components/UpdateProfileModal";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

const MyProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  return (
    <div className="max-w-100 mx-auto my-15">
      <h1 className="text-3xl font-bold text-center mb-5">Profile</h1>
      <div className="rounded-2xl p-3 border relative">
        <div>
          <Image
            className="w-100 h-40 rounded-t-2xl"
            src={"/assets/profile_bg.jpg"}
            alt="profile-bg"
            width={100}
            height={100}
          ></Image>
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
        <div className="bg-blue-950 h-70 pt-28 text-white text-lg font-semibold px-5 rounded-b-2xl">
          <p>
            Name:{" "}
            <span className="text-amber-400 text-lg font-semibold">
              {user?.name}
            </span>
          </p>
          <p className="mt-2">
            Email:{" "}
            <span className="text-amber-400 text-lg font-semibold">
              {user?.email}
            </span>
          </p>
          <div className="mt-8 flex justify-center">
            <UpdateProfileModal user={user}></UpdateProfileModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
