"use client";

import React from 'react';
import Select from 'react-select';

const Home: React.FC = () => {
  const optionsAgeRange = [
    { value: 'ChildPsycholog', label: 'Child Psychologist' },
    { value: 'Pedia', label: 'Pediatrician' },
    { value: 'ParentingCoach', label: 'Parenting Coach' },
    { value: 'FamTherapist', label: 'Family Therapist' },
    { value: 'ChildDev', label: 'Child Development Specialist' },
  ];

  return (
    <div className="flex flex-col items-center justify-start h-full w-full p-4">
      <div className="flex flex-col items-center w-full max-w-md">
        {/* Logo */}
        <img src="/test/logo.png" alt="Logo" className="w-12 h-12 mb-6 mt-6" />

        <div className="text-lg font-bold mb-7">Expert Interaction</div>

        {/* Question 2 */}
        <div className="w-full mb-4">
          <div className="text-sm font-bold mb-2">Are you interested in consulting with parenting experts?</div>
          <select className="w-full p-2 border border-gray-300 rounded-md">
            <option value="">Select an option</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        {/* Question 1 */}
        <div className="w-full mb-4">
          <div className="text-sm font-bold mb-2">What type of experts are you looking to consult?</div>
          <Select
            isMulti
            options={optionsAgeRange}
            className="w-full"
            classNamePrefix="react-select"
          />
        </div>

      </div>

      <a href='/loading'>
        <button className="absolute bottom-4 right-4 bg-[#2F1155] text-white font-bold py-2 px-4 rounded-xl mb-10 mr-4">
                Next
        </button>
      </a>
      
    </div>
  );
};

export default Home;
