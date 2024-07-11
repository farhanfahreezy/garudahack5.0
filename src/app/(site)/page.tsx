"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [load, setload] = useState(true);

  useEffect(() => {
    setload(false);
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center w-full min-h-screen bg-primaryBg">
      <div
        className={`absolute bottom-[10%] flex flex-col w-full justify-center items-center ${
          load ? "gap-40" : "gap-10"
        } transition-all duration-[2000ms] ease-in-out`}
      >
        <Image
          src={"/logo.svg"}
          alt={"Parenthing"}
          width={0}
          height={0}
          sizes="100vw"
          loading="lazy"
          className={`w-[200px] aspect-square transition-all duration-[1000ms] ease-in-out ${
            load ? "opacity-0" : "opacity-100"
          }`}
        />
        <div className="flex flex-col justify-center items-center text-white font-medium text-[24px] px-2 max-w-[400px]">
          <p className="text-center text-black font-rubik">
            Empowering Parents with Knowledge, Support, and Community
          </p>
        </div>
        <div className="flex flex-col w-full justify-center items-center gap-10 px-3">
          <Link
            href={"/login"}
            className="w-full max-w-[350px] px-6 py-3 font-bold text-[18px] text-center text-white rounded-xl bg-darkPurple1 hover:scale-105 active:scale-95 transition-all"
          >
            Login
          </Link>
          <Link href={"/register"} className="flex justify-center w-full">
            <p className="pt-2 text-sm text-black font-medium opacity-[90%] hover:opacity-[100%] transition-all">
              {"Don’t have an account?"}{" "}
              <span className="text-blue-400">Register</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
