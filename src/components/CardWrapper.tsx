import React, { useState } from "react";
import { Card } from "./index";

interface CardWrapperProps {
  totalCaffeine: number;
  totalServings: number;
  onTotalCaffeineChange: (caffeine: number) => void;
  onServingsChange: (servings: number) => void;
}

const CardWrapper: React.FC<CardWrapperProps> = ({
  totalCaffeine,
  totalServings,
  onTotalCaffeineChange,
  onServingsChange,
}) => {
  //   const [totalCaffeine, setTotalCaffeine] = useState<number>(0);
  const handleClickPlus = (caffeine: number) => {
    const newTotalCaffeine = totalCaffeine + caffeine;
    const newTotalServings = totalServings + 1;
    onTotalCaffeineChange(newTotalCaffeine);
    onServingsChange(newTotalServings);
  };
  const handleClickMinus = (caffeine: number) => {
    const newTotalCaffeine = totalCaffeine - caffeine;
    const newTotalServings = totalServings - 1;
    onTotalCaffeineChange(newTotalCaffeine);
    onServingsChange(newTotalServings);
  };
  return (
    <>
      <p>Select serving size:</p>
      <div className="flex gap-4 w-full">
        <Card
          size={250}
          caffeine={50}
          onClickPlus={handleClickPlus}
          onClickMinus={handleClickMinus}
        />
        <Card
          size={330}
          caffeine={100}
          onClickPlus={handleClickPlus}
          onClickMinus={handleClickMinus}
        />
        <Card
          size={500}
          caffeine={150}
          onClickPlus={handleClickPlus}
          onClickMinus={handleClickMinus}
        />
      </div>
    </>
  );
};

export default CardWrapper;
