import React from "react";
import cup from "../assets/cup.svg";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

// TODO: disable functionality if no weight
// TODO: disable minus until total caffeine is greater than 0

interface CardProps {
  size: number;
  caffeine: number;
  onClickPlus: (caffeine: number) => void;
  onClickMinus: (caffeine: number) => void;
}

const Card: React.FC<CardProps> = ({
  size,
  caffeine,
  onClickPlus,
  onClickMinus,
}) => {
  const scaleValue = caffeine === 50 ? 75 : caffeine === 150 ? 125 : 100;

  const handleClickMinus = () => {
    onClickMinus(caffeine);
  };

  const handleClickPlus = () => {
    onClickPlus(caffeine);
  };
  return (
    <div className="flex flex-col justify-center items-center w-full gap-2 p-4 border-2 rounded-md border-primary">
      <p>{size}ml</p>
      <div className="w-12">
        <img src={cup} className={`transform scale-${scaleValue}`} />
      </div>
      <p>{caffeine}mg</p>
      <div className="flex gap-4">
        <div
          onClick={handleClickMinus}
          className="flex flex-col justify-center items-center w-8 h-8 border-2 border-primary rounded-full cursor-pointer bg-secondary"
        >
          <FaMinus className="text-primary" />
        </div>
        <div
          onClick={handleClickPlus}
          className="flex flex-col justify-center items-center w-8 h-8 border-2 border-primary rounded-full cursor-pointer bg-secondary"
        >
          <FaPlus className="text-primary" />
        </div>
      </div>
    </div>
  );
};

export default Card;
