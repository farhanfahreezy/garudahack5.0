import Image from "next/image";
import React from "react";

const ExpertsCard = ({
  name,
  expertise,
  rating,
  price,
  url,
  profilePictureUrl,
}: ExpertCardProps) => {
  return (
    <div className="flex flex-row">
      <Image
        src={profilePictureUrl}
        width={0}
        height={0}
        alt={name}
        className="w-[85px] aspect-square rounded-lg"
      />
      <div className="flex flex-col"></div>
    </div>
  );
};

export default ExpertsCard;
