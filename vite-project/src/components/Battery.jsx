import React from "react";
import { useUserContext } from "../Context/UserContext";
import { Navigate, useNavigate } from "react-router";

const BatteryComponent = () => {
  const { level, authuser, setAuthUser } = useUserContext(); // State to track if the decrease should stop
  const Navigate = useNavigate();
  // Function to generate blocks representing the battery level
  const renderBatteryBlocks = () => {
    const blocks = [];
    const numberOfBlocks = 50; // Number of blocks to represent the battery

    // Calculate number of filled blocks
    const filledBlocks = Math.ceil(level / (100 / numberOfBlocks));
   
    // Push filled blocks
    for (let i = 0; i < filledBlocks; i++) {
      blocks.push(
        <div
          key={i}
          className="w-10 h-1 bg-[aqua] border border-black mx-1 "
        ></div>
      );
    }

    // Push empty blocks
    for (let i = filledBlocks; i < numberOfBlocks; i++) {
      blocks.push(
        <>
          <div
            key={i}
            className="w-10 h-1 bg-gray-200 border border-black mx-1 flex flex-col"
          ></div>
        </>
      );
    }

    return blocks;
  };

  return (
    <div className="flex item-center justify-center self-center h-full">
      <div className="flex flex-col  items-center justify-center gap-1">
        {renderBatteryBlocks()}
      </div>
      <span className="text-xl ml-2 flex items-center">{level}%</span>
    </div>
  );
};

export default BatteryComponent;
