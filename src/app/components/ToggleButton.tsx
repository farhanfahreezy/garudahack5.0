import React, { useState } from "react";

interface ToggleButtonProps {
  defaultState?: boolean;
  label: string;
}

const ToggleButton = ({ defaultState = false, label }: ToggleButtonProps) => {
  const [isActive, setisActive] = useState(defaultState);
  return (
    <button
      className={`${
        isActive
          ? "bg-darkPurple2 text-white"
          : "bg-transparent text-darkPurple2"
      } border-[2px] border-darkPurple2 py-1 px-4 rounded-full font-bold text-[13px] text-nowrap`}
      onClick={() => setisActive(!isActive)}
    >
      {label}
    </button>
  );
};

export default ToggleButton;
