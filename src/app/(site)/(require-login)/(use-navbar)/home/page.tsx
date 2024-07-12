"use client";

import { useState } from "react";
import useCommunityList from "./hooks/useCommunityList";
import useInsightList from "./hooks/useInsightList";
import CommunityCardList from "./components/CommunityCardList";

export default function Home() {
  const [currentTab, setcurrentTab] = useState("community");

  const { homeCardsCommunity } = useCommunityList();
  const { homeCardsInsight } = useInsightList();

  return (
    <div className="flex flex-col items-center justify-start h-full w-full">
      {/* NAVIGATION PART */}
      <div className="flex flex-col w-full">
        <div className="w-full font-bold shadow-sm">
          <div className="flex flex-row py-2 w-full justify-evenly">
            <button
              onClick={() => setcurrentTab("community")}
              className={` ${
                currentTab == "community"
                  ? "text-darkPurple1 underline"
                  : "text-black"
              }`}
            >
              Community
            </button>
            <button
              onClick={() => setcurrentTab("insights")}
              className={` ${
                currentTab == "insights"
                  ? "text-darkPurple1 underline"
                  : "text-black"
              }`}
            >
              Insights
            </button>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="h-full overflow-y-scroll w-full px-4 pb-4">
        {currentTab == "community" ? (
          <CommunityCardList homeCardsCommunity={homeCardsCommunity} />
        ) : (
          <>
            {/* <ExpertHistoryCardList expertHistoryCards={expertHistoryCards} /> */}
          </>
        )}
      </div>
    </div>
  );
}
