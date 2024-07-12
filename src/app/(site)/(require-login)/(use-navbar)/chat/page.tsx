"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [currentTab, setcurrentTab] = useState("experts");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTop) {
        // Scroll down
        setIsVisible(false);
      } else {
        // Scroll up
        setIsVisible(true);
      }

      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div className="flex flex-col items-center justify-center w-full relative">
      <div
        className={` ${
          isVisible ? "translate-y-0" : "hidden"
        } text-[24px] font-rubik font-medium w-full py-2 text-center shadow-sm sticky`}
      >
        Chat
      </div>
      <div className="w-full">
        <div className="flex flex-row py-2 w-full justify-evenly">
          <button onClick={() => setcurrentTab("experts")}>Experts</button>
          <button>History</button>
        </div>
        <div className="h-full overflow-y-scroll">
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
          <p>lorem 100</p>
        </div>
      </div>
    </div>
  );
}
