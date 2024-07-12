"use client";

import ToggleButton from "@/app/components/ToggleButton";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { BsImage, BsCamera } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";

export default function Home() {
  const session = useSession();
  console.log("session", session.data?.user.name);
  return (
    <div className="flex flex-col h-screen w-full">
      {/* TOP */}
      <div className="w-full flex flex-col px-4 pt-4 gap-4">
        {/* Navigasi dan submit */}
        <div className="flex flex-row justify-between items-center">
          <Link href={"/home"}>
            <IoChevronBackCircleOutline color="#45197D" size={32} />
          </Link>

          <Link
            href={"/post"}
            className="text-white py-2 px-6 bg-darkPurple2 font-medium rounded-xl"
          >
            Post
          </Link>
        </div>

        {/* Nama user */}
        <div className="flex flex-row items-center justify-start gap-4 px-2">
          <Image
            src={"/expert/aubrey.jpg"}
            alt="Profile"
            width={35}
            height={35}
            className=" rounded-full"
          />
          <p className="text-[16px] font-medium">{session.data?.user.name}</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col h-full w-full overflow-y-scroll bg-white p-4">
        <input
          placeholder="Input title here!"
          className="px-2 py-1 border-b-[2px] outline-none font-bold text-black text-[18px]"
        />

        <textarea
          placeholder="What do you want to ask?"
          className="px-2 py-1 border-b-[2px] outline-none font-medium text-slate-700 h-[200px] resize-none"
        />

        <div className="p-2 border-b-[2px]">
          <p className="font-medium text-gray-600">Select Category</p>
          <div className="grid grid-cols-auto-fill-100 gap-2 my-2">
            <ToggleButton label="Sharing" />
            <ToggleButton label="Ask" />
            <ToggleButton label="Discussion" />
            <ToggleButton label="Review" />
            <ToggleButton label="Event" />
          </div>
        </div>

        <div className="p-2">
          <p className="font-medium text-gray-600">Select Tag</p>
          <div className="grid grid-cols-auto-fill-150 gap-2 my-2">
            <ToggleButton label="Newborn Care" />
            <ToggleButton label="Toddler Development" />
            <ToggleButton label="Nutrition and Health" />
            <ToggleButton label="Emotional and Social" />
            <ToggleButton label="Education and Learning" />
            <ToggleButton label="Behavior Management" />
            <ToggleButton label="Special Needs" />
            <ToggleButton label="Mental Health" />
            <ToggleButton label="Safety and Well-being" />
            <ToggleButton label="Work-life Balance" />
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="w-full border-t-[1px] border-black p-4 flex flex-row justify-start items-center gap-6">
        <button className=" active:scale-95 transition-all">
          <BsImage size={25} color="#2F1155" />
        </button>
        <button className=" active:scale-95 transition-all">
          <BsCamera size={28} color="#2F1155" />
        </button>
        <button className=" active:scale-95 transition-all">
          <ImAttachment size={22} color="#2F1155" />
        </button>
      </div>
    </div>
  );
}
