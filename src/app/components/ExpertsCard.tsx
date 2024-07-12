import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LiaStarSolid } from "react-icons/lia";

const ExpertsCard = ({
  name,
  expertise,
  rating,
  price,
  url,
  profilePictureUrl,
}: ExpertCardProps) => {
  return (
    <div className="flex flex-row gap-2 items-start justify-start">
      <Image
        src={profilePictureUrl}
        width={0}
        height={0}
        alt={name}
        unoptimized={true}
        className="w-[85px] aspect-square rounded-lg object-cover"
      />
      <div className="flex flex-col gap-1 w-full">
        <div>
          <h1 className="font-medium text-black text-[16px]">{name}</h1>
          <div className="flex flex-row gap-3 items-center">
            <p className="font-medium text-gray-600 text-[10px]">{expertise}</p>
            <div className="flex flex-row items-center justify-start gap-1 bg-gray-200 py-[2px] pl-2 pr-3 text-[10px] font-medium w-fit rounded-xl">
              <LiaStarSolid color="#FFD700" size={16} />
              <p className="text-gray-600">{rating}/5</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-end w-full">
          <p className="font-medium">Rp {price}</p>
          <Link href={url}>
            <button className="bg-purple py-2 px-4 text-[12px] font-medium rounded-lg text-white">
              Chat now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExpertsCard;
