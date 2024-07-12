"use client";

import { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import ExpertCardList from "./_components/ExpertCardList";
import useExpertList from "./hooks/useExpertList";
import useExpertHistoryList from "./hooks/useExpertHistoryList";
import ExpertHistoryCardList from "./_components/ExpertHistoryCardList";

export default function Home() {
  const [currentTab, setcurrentTab] = useState("experts");

  const { expertCards } = useExpertList();
  const { expertHistoryCards } = useExpertHistoryList();

  return (
    <div className="flex flex-col items-center justify-start h-full w-full">
      {/* NAVIGATION PART */}
      <div className="flex flex-col w-full">
        <div
          className={`text-[24px] font-rubik font-medium w-full py-3 text-center shadow-md`}
        >
          Chat
        </div>
        <div className="w-full font-bold shadow-sm">
          <div className="flex flex-row py-2 w-full justify-evenly">
            <button
              onClick={() => setcurrentTab("experts")}
              className={` ${
                currentTab == "experts"
                  ? "text-darkPurple1 underline"
                  : "text-black"
              }`}
            >
              Experts
            </button>
            <button
              onClick={() => setcurrentTab("history")}
              className={` ${
                currentTab == "history"
                  ? "text-darkPurple1 underline"
                  : "text-black"
              }`}
            >
              History
            </button>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="h-full overflow-y-scroll w-full px-4 pb-4">
        {currentTab == "experts" ? (
          <>
            <div className="bg-gray-200 p-2 rounded-md flex flex-row items-center justify-center gap-2 mb-2 mt-4">
              <button className="active:scale-95">
                <LuSearch size={24} />
              </button>
              <input
                className="w-full bg-transparent text-[16px] outline-none"
                placeholder="Find Your Expert"
              />
            </div>
            <ExpertCardList expertCards={expertCards} />
          </>
        ) : (
          <>
            <ExpertHistoryCardList expertHistoryCards={expertHistoryCards} />
          </>
        )}
      </div>
    </div>
  );
}
