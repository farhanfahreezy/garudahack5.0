import ExpertsCard from "@/app/components/ExpertsCard";
import React from "react";

const ExpertCardList = ({ expertCards }: ExperCardListProps) => {
  return (
    <div>
      {expertCards.map((card, index) => (
        <ExpertsCard key={card.name + index} {...card} />
      ))}
    </div>
  );
};

export default ExpertCardList;
