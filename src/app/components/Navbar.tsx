"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const path = usePathname();

  const isActive = (currentPath: string) => {
    return currentPath == path;
  };

  return (
    <div className="flex flex-row w-full items-center justify-around py-4 shadow-up-lg">
      <Link href={"/home"}>
        <Image
          alt="home"
          width={0}
          height={0}
          src={
            isActive("/home")
              ? "/icons/compass-fill.svg"
              : "/icons/compass-empty.svg"
          }
          className="w-[32px] aspect-square active:scale-95 transition-all"
        />
      </Link>

      <Link href={"/search"}>
        <Image
          alt="search"
          width={0}
          height={0}
          src={
            isActive("/search")
              ? "/icons/search-fill.svg"
              : "/icons/search-empty.svg"
          }
          className="w-[32px] aspect-square active:scale-95 transition-all"
        />
      </Link>

      <Link href={"/add-post"}>
        <Image
          alt="add post"
          width={0}
          height={0}
          src={"/icons/add.svg"}
          className="w-[47px] aspect-square drop-shadow-xl active:scale-95 transition-all"
        />
      </Link>

      <Link href={"/chat"}>
        <Image
          alt="chat"
          width={0}
          height={0}
          src={
            isActive("/chat")
              ? "/icons/message-fill.svg"
              : "/icons/message-empty.svg"
          }
          className="w-[32px] aspect-square active:scale-95 transition-all"
        />
      </Link>

      <Link href={"/settings"}>
        <Image
          alt="chat"
          width={0}
          height={0}
          src={
            isActive("/settings")
              ? "/icons/setting-fill.svg"
              : "/icons/setting-empty.svg"
          }
          className="w-[32px] aspect-square active:scale-95 transition-all"
        />
      </Link>
    </div>
  );
};

export default Navbar;
