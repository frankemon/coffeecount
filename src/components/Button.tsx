import React from "react";
import cup from "../assets/cup.svg";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

interface ButtonProps {
  size: number;
  caffeine: number;
}

const Button: React.FC<ButtonProps> = ({ size, caffeine }) => {
  const scaleValue = caffeine === 50 ? 75 : caffeine === 150 ? 125 : 100;
  return (
    <div className="flex flex-col justify-center items-center w-full gap-2 p-4 border rounded-md border-textPrimary">
      <p>{size}ml</p>
      <div className="w-12">
        <img src={cup} className={`transform scale-${scaleValue}`} />
      </div>
      <p>{caffeine}mg</p>
      <div className="flex gap-4">
        <div className="flex flex-col justify-center items-center w-8 h-8 bg-textPrimary rounded-full cursor-pointer">
          <FaMinus className="text-bgPrimary" />
        </div>
        <div className="flex flex-col justify-center items-center w-8 h-8 bg-textPrimary rounded-full cursor-pointer">
          <FaPlus className="text-bgPrimary" />
        </div>
      </div>
    </div>
  );
};

export default Button;
