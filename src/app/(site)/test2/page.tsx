"use client";

import React, { useState } from 'react';

const Home: React.FC = () => {
  const optionsAgeRange = [
    { value: 'EmotionalAndSocSkills', label: 'Emotional and Social Skills' },
    { value: 'NutritionAndHealth', label: 'Nutrition and Health' },
    { value: 'BehaviorManag', label: 'Behavior Management' },
    { value: 'EducationAndLearning', label: 'Education and Learning' },
    { value: 'SpecialNeeds', label: 'Special Needs' },
    { value: 'MentalHealth', label: 'Mental Health' },
    { value: 'SafetyAndWB', label: 'Safety and Well-beings' },
    { value: 'WorklifeBalance', label: 'Work-Life Balance' },
  ];

  const optionsFrequency = [
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'rarely', label: 'Rarely' },
  ];

  const [selectedAgeRange, setSelectedAgeRange] = useState<string[]>([]);
  const [selectedFrequency, setSelectedFrequency] = useState<string[]>([]);

  const handleCheckboxChange = (value: string, setSelected: React.Dispatch<React.SetStateAction<string[]>>) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  return (
    <div className="flex flex-col items-center justify-start h-full w-full p-4">
      <div className="flex flex-col items-center w-full max-w-md">
        {/* Logo */}
        <img src="/test/logo.png" alt="Logo" className="w-12 h-12 mb-6 mt-6" />

        <div className="text-lg font-bold mb-7">Parenting Interests</div>

        {/* Question 1 */}
        <div className="w-full mb-4">
          <div className="text-sm font-bold mb-2">What parenting topics are you most interested in?</div>
          {optionsAgeRange.map((option) => (
            <div key={option.value} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={option.value}
                value={option.value}
                checked={selectedAgeRange.includes(option.value)}
                onChange={() => handleCheckboxChange(option.value, setSelectedAgeRange)}
                className="mr-2"
              />
              <label htmlFor={option.value} className="text-sm">{option.label}</label>
            </div>
          ))}
        </div>

        {/* Question 2 */}
        <div className="w-full mb-4">
          <div className="text-sm font-bold mb-2">How often do you seek parenting advice?</div>
          {optionsFrequency.map((option) => (
            <div key={option.value} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={option.value}
                value={option.value}
                checked={selectedFrequency.includes(option.value)}
                onChange={() => handleCheckboxChange(option.value, setSelectedFrequency)}
                className="mr-2"
              />
              <label htmlFor={option.value} className="text-sm">{option.label}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <a href='/test3'>
        <button
          className={`absolute bottom-4 right-4 bg-[#2F1155] text-white font-bold py-2 px-4 rounded-xl mb-10 mr-4`}
        >
          Next
        </button>
      </a>
    </div>
  );
};

export default Home;
