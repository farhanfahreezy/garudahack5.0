"use client";

import React from 'react';

interface Button2Props {
  icon1: React.ReactNode;
  title: string;
  subtitle: string;
  href: string;
  icon2: React.ReactNode;
}

const Button2: React.FC<Button2Props> = ({ icon1, title, subtitle, href, icon2 }) => {
  return (
    <a
      href={href}
      className="flex items-center text-decoration-none p-2.5 mx-1"
    >
      <div className="mr-3 rounded-lg bg-[#FF6767] p-3 flex items-center justify-center">
        {React.cloneElement(icon1 as React.ReactElement, { className: 'text-white text-xl' })}
      </div>
      <div className="flex flex-col flex-1">
        <div className="font-bold text-lg">
          {title}
        </div>
        <div className="text-sm text-gray-600">
          {subtitle}
        </div>
      </div>
      <div className="ml-3">
        {React.cloneElement(icon2 as React.ReactElement, { className: 'text-lg' })}
      </div>
    </a>
  );
};

export default Button2;
