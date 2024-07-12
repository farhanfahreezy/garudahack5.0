import CommunityCard from "@/app/components/CommunityCard";
import { HomeCardCommunityListProps } from "@/app/type/homeCommunity";
import React from "react";

const CommunityCardList = ({
  homeCardsCommunity,
}: HomeCardCommunityListProps) => {
  return (
    <div>
      {homeCardsCommunity.map((card, index) => (
        <div
          key={card.name + index}
          className={`border-b pb-2 mb-2 ${
            index === homeCardsCommunity.length - 1 ? "" : "border-gray-300"
          }`}
        >
          <CommunityCard {...card} />
        </div>
      ))}
    </div>
  );
};

export default CommunityCardList;
