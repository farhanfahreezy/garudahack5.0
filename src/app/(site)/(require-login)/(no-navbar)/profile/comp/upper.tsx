"use client";

import React from 'react';

interface UpperProps {
  urlImage: string;
  name: string;
  role: string;
  reputationScore: string;
}

const UpperProps: React.FC<UpperProps> = ({ urlImage, name, role, reputationScore }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-violet-800 rounded-[40px] shadow-md w-96 mx-auto mt-4">
      <div className="relative w-full flex justify-center">
        <img src={urlImage} alt={name} className="w-32 h-32 rounded-full" />
        <div className="absolute -bottom-10 transform -translate-y-1/2 text-white text-base bg-violet-500 rounded-xl p-2">
          {role}
        </div>
      </div>
      <div className="font-bold text-lg text-white mb-2 mt-5 text-3xl">{name}</div>
      <div className="text-gray-300 text-sm mt-1">Your reputation score is {reputationScore}</div>
    </div>
  );
};

export default UpperProps;
