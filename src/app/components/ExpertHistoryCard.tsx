import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExpertHistoryCard = ({
  name,
  expertise,
  consultDate,
  status,
  url,
  profilePictureUrl,
}: ExpertHistoryCardProps) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row gap-2">
        <div className="flex flex-col gap-1">
          <p className="font-medium text-[10px]">
            {consultDate.toDateString()}
          </p>
          <Image
            src={profilePictureUrl}
            width={0}
            height={0}
            alt={name}
            unoptimized={true}
            className="w-[85px] aspect-square rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col items-start mt-6">
          <h1 className="font-medium text-black text-[16px]">{name}</h1>
          <p className="font-medium text-gray-600 text-[10px]">{expertise}</p>
        </div>
      </div>
      <div className="flex flex-col items-end justify-center gap-4">
        <p
          className={`${
            status ? "bg-slate-400" : "bg-green-400"
          } text-white font-medium text-[10px] py-1 px-3 rounded-lg`}
        >
          {status ? "Done" : "Ongoing"}
        </p>
        <Link href={url}>
          <button className="bg-purple py-2 px-4 text-[12px] font-medium rounded-lg text-white active:scale-95 transition-all">
            View chat
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ExpertHistoryCard;
