"use client";

import React from 'react';
import Select from 'react-select';

const Home: React.FC = () => {
  const optionsAgeRange = [
    { value: 'newborn', label: 'Newborn' },
    { value: 'infant', label: 'Infant' },
    { value: 'toddler', label: 'Toddler' },
    { value: 'preschooler', label: 'Preschooler' },
    { value: 'school-aged', label: 'School-aged' },
    { value: 'teenager', label: 'Teenager' },
  ];

  return (
    <div className="flex flex-col items-center justify-start h-full w-full p-4">
      <div className="flex flex-col items-center w-full max-w-md">
        {/* Logo */}
        <img src="/test/logo.png" alt="Logo" className="w-12 h-12 mb-6 mt-6" />

        <div className="text-lg font-bold mb-7">Parenting Stage</div>

        {/* Question 1 */}
        <div className="w-full mb-4">
          <div className="text-sm font-bold mb-2">What is the age range of your child(ren)?</div>
          <Select
            isMulti
            options={optionsAgeRange}
            className="w-full"
            classNamePrefix="react-select"
          />
        </div>

        {/* Question 2 */}
        <div className="w-full mb-4">
          <div className="text-sm font-bold mb-2">Are you a first-time parent?</div>
          <select className="w-full p-2 border border-gray-300 rounded-md">
            <option value="">Select an option</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
      </div>

      <a href='/test2'>
        <button className="absolute bottom-4 right-4 bg-[#2F1155] text-white font-bold py-2 px-4 rounded-xl mb-10 mr-4">
                Next
        </button>
      </a>
      
    </div>
  );
};

export default Home;
