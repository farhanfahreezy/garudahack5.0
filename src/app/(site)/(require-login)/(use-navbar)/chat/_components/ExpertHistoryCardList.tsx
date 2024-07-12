import ExpertHistoryCard from "@/app/components/ExpertHistoryCard";
import ExpertsCard from "@/app/components/ExpertsCard";
import React from "react";

const ExpertHistoryCardList = ({
  expertHistoryCards,
}: ExpertHistoryCardListProps) => {
  return (
    <div className="mt-2">
      {expertHistoryCards.map((card, index) => (
        <div
          key={card.name + index}
          className={`border-b pb-2 mb-2 ${
            index === expertHistoryCards.length - 1 ? "" : "border-gray-300"
          }`}
        >
          <ExpertHistoryCard {...card} />
        </div>
      ))}
    </div>
  );
};

export default ExpertHistoryCardList;
