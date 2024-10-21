import React from "react";
import { Card } from "./index";

interface CardWrapperProps {
  recommendedCaffeine: number;
  totalCaffeine: number;
  totalServings: number;
  onTotalCaffeineChange: (caffeine: number) => void;
  onServingsChange: (servings: number) => void;
  onAddCaffeine: () => void;
}

const CardWrapper: React.FC<CardWrapperProps> = ({
  recommendedCaffeine,
  totalCaffeine,
  totalServings,
  onTotalCaffeineChange,
  onServingsChange,
  onAddCaffeine,
}) => {
  const handleClickPlus = (caffeine: number) => {
    if (recommendedCaffeine === 0) {
      return;
    }
    const newTotalCaffeine = totalCaffeine + caffeine;
    const newTotalServings = totalServings + 1;
    onTotalCaffeineChange(newTotalCaffeine);
    onServingsChange(newTotalServings);
    onAddCaffeine();
  };
  const handleClickMinus = (caffeine: number) => {
    // If servings or caffeine is 0, do nothing
    if (totalServings === 0 || caffeine === 0) {
      return;
    }
    let newTotalCaffeine = totalCaffeine - caffeine;
    const newTotalServings = totalServings - 1;
    // If servings reaches 0, reset caffine
    if (newTotalServings === 0) {
      newTotalCaffeine = 0;
    }
    // If caffeine calculation goes below 0, set to 0
    if (newTotalCaffeine <= 0) {
      newTotalCaffeine = 0;
    }
    onTotalCaffeineChange(newTotalCaffeine);
    onServingsChange(newTotalServings);
  };
  return (
    <div>
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
    </div>
  );
};

export default CardWrapper;
