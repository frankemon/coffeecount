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
    let newTotalServings = totalServings - 1;
    // If servings reaches 0, reset caffine
    if (newTotalServings === 0) {
      newTotalCaffeine = 0;
    }
    // If caffeine calculation goes below 0, set to 0
    if (newTotalCaffeine <= 0) {
      newTotalCaffeine = 0;
      newTotalServings = 0;
    }
    onTotalCaffeineChange(newTotalCaffeine);
    onServingsChange(newTotalServings);
  };
  return (
    <div>
      <p className="pb-4">Select serving size:</p>
      <div className="flex flex-col lg:flex-row gap-4 w-full">
        <Card
          type={"Espresso"}
          size={50}
          caffeine={80}
          onClickPlus={handleClickPlus}
          onClickMinus={handleClickMinus}
        />
        <Card
          type={"Cup"}
          size={240}
          caffeine={250}
          onClickPlus={handleClickPlus}
          onClickMinus={handleClickMinus}
        />
        <Card
          type={"XL cup"}
          size={500}
          caffeine={350}
          onClickPlus={handleClickPlus}
          onClickMinus={handleClickMinus}
        />
      </div>
    </div>
  );
};

export default CardWrapper;
