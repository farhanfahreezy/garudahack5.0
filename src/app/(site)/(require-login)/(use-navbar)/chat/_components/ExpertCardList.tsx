import ExpertsCard from "@/app/components/ExpertsCard";
import React from "react";

const ExpertCardList = ({ expertCards }: ExpertCardListProps) => {
  return (
    <div>
      {expertCards.map((card, index) => (
        <div
          key={card.name + index}
          className={`border-b pb-2 mb-2 ${
            index === expertCards.length - 1 ? "" : "border-gray-300"
          }`}
        >
          <ExpertsCard {...card} />
        </div>
      ))}
    </div>
  );
};

export default ExpertCardList;
