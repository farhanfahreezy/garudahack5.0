import React from "react";
import { HomeCardInsightProps } from "../type/homeInsights";
import Image from "next/image";

const InsightCard = ({
  title,
  imageUrl,
  url,
  author,
  createdDate,
}: HomeCardInsightProps) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex flex-row justify-between w-full gap-4">
        <p className="text-left text-[16px] font-bold">{title}</p>
        <Image
          src={imageUrl}
          width={200}
          height={150}
          objectFit="cover"
          alt={title}
        />
      </div>
      <div className="flex flex-row justify-between items-end">
        <p className="font-medium text-[10px] text-gray-400">
          {createdDate.toDateString() + ", by " + author}
        </p>
        <button className="active:scale-95 transition-all font-bold text-[12px]">
          Read more
        </button>
      </div>
    </div>
  );
};

export default InsightCard;
