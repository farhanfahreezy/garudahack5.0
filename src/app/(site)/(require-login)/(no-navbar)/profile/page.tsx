"use client";

import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import LowerProps from "./comp/lower";
import UpperProps from "./comp/upper";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const session = useSession();

  return (
    <div className="flex flex-col items-center justify-start h-full w-full">
      <div className="flex flex-col w-full">
        <div className="flex items-center w-full py-3 shadow-md">
          <a href="/settings">
            <FaArrowLeft className="ml-8" />
          </a>
          <div className="text-[24px] font-rubik font-medium w-full text-center mr-12">
            Profile
          </div>
        </div>

        <UpperProps
          urlImage="/expert/aubrey.jpg"
          name={session.data?.user.name}
          role="Advocate Contributor"
          reputationScore="2235"
        />
        <div className="w-full flex justify-center items-center mt-6">
            <Image src={'/icons/progress.svg'}  alt='progress' width={350} height={150} />
        </div>
        <h2 className="mt-4 mx-10 text-center">
          With just 27 more Upvotes you can become an Influencer Contributor
        </h2>

        <hr className="border-t border-gray-300 mx-10 mt-7" />

        <LowerProps
          fullName={session.data?.user.name}
          email={session.data?.user.email}
        />
      </div>
    </div>
  );
}
