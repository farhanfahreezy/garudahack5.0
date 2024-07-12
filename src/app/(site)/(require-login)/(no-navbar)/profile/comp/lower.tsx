"use client";

import React from 'react';
import { FaEdit } from 'react-icons/fa';

interface LowerProps {
  fullName: string;
  email: string;
}

const LowerProps: React.FC<LowerProps> = ({ fullName, email }) => {
  return (
    <>
    <div className="flex flex-col gap-2  items-center p-6 border-2 border-black rounded-[35px] bg-transparent mt-8 mx-10">
      <div className="font-bold text-lg text-black mb-2">Full Name: {fullName}</div>
      <hr className="w-full border-t border-black mb-2" />
      <div className="text-sm text-black mb-2">Email: {email}</div>
    
    </div>

    <button className="flex items-center px-4 py-2 text-black hover:bg-black hover:text-white mx-10 mt-10 self-center">
        <FaEdit className="mr-2" />
        Edit Profile
      </button>
    </>
    

    
  );
};

export default LowerProps;
