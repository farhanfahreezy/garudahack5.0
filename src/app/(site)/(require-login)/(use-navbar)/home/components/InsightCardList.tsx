import InsightCard from "@/app/components/InsightCard";
import { HomeCardInsightListProps } from "@/app/type/homeInsights";
import React from "react";

const InsightCardList = ({ homeCardsInsight }: HomeCardInsightListProps) => {
  console.log("homeCardsInsight", homeCardsInsight);

  return (
    <>
      {homeCardsInsight.map((card, index) => (
        <div
          key={card.title + index}
          className={`border-b pb-2 mb-2 ${
            index === homeCardsInsight.length - 1 ? "" : "border-gray-300"
          }`}
        >
          <InsightCard {...card} />
        </div>
      ))}
    </>
  );
};

export default InsightCardList;
