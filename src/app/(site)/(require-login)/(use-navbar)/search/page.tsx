import { LuSearch } from "react-icons/lu";
import useSearchList from "./hooks/useSearchList";
import CommunityCardList from "../home/components/CommunityCardList";

export default function Home() {
  const { homeCardsCommunity } = useSearchList();
  return (
    <div className="flex flex-col items-center justify-start h-full w-full">
      {/* Searchbar */}
      <div className="flex flex-col w-full shadow-md px-4">
        <div className="bg-gray-200 p-2 rounded-md flex flex-row items-center justify-center gap-2 mb-2 mt-4">
          <button className="active:scale-95">
            <LuSearch size={24} />
          </button>
          <input
            className="w-full bg-transparent text-[16px] outline-none"
            placeholder="Search here"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col px-4 w-full my-4 overflow-y-scroll">
        <h1 className="text-left w-full font-medium font-rubik text-[18px] text-darkPurple2">
          Trends For You
        </h1>
        <CommunityCardList homeCardsCommunity={homeCardsCommunity} />
      </div>
    </div>
  );
}
