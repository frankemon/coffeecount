import React from "react";
import { Card } from "./index";

interface CardWrapperProps {
  recommendedCaffeine: number;
  totalCaffeine: number;
  totalServings: number;
  onTotalCaffeineChange: (caffeine: number) => void;
  onServingsChange: (servings: number) => void;
  onAddCaffeine: () => void;
  unitSystem: "metric" | "imperial";
}

// Utility function to convert sizes based on unit system
const convertUnits = (size: number, unitSystem: "metric" | "imperial") => {
  if (unitSystem === "imperial") {
    return Math.round(size * 0.033814); // Convert ml to fl oz and round to whole number
  }
  return size; // Return size in ml for metric
};

const CardWrapper: React.FC<CardWrapperProps> = ({
  recommendedCaffeine,
  totalCaffeine,
  totalServings,
  onTotalCaffeineChange,
  onServingsChange,
  onAddCaffeine,
  unitSystem,
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
    if (totalServings === 0 || caffeine === 0) {
      return;
    }
    let newTotalCaffeine = totalCaffeine - caffeine;
    let newTotalServings = totalServings - 1;
    if (newTotalServings === 0) {
      newTotalCaffeine = 0;
    }
    if (newTotalCaffeine <= 0) {
      newTotalCaffeine = 0;
      newTotalServings = 0;
    }
    onTotalCaffeineChange(newTotalCaffeine);
    onServingsChange(newTotalServings);
  };

  const espressoSize = convertUnits(50, unitSystem);
  const cupSize = convertUnits(240, unitSystem);
  const xlCupSize = convertUnits(500, unitSystem);

  return (
    <div>
      <p className="pb-4">Select serving size:</p>
      <div className="flex flex-col lg:flex-row gap-4 w-full">
        <Card
          type={"Espresso"}
          size={espressoSize}
          caffeine={80}
          onClickPlus={handleClickPlus}
          onClickMinus={handleClickMinus}
          unitSystem={unitSystem}
        />
        <Card
          type={"Cup"}
          size={cupSize}
          caffeine={250}
          onClickPlus={handleClickPlus}
          onClickMinus={handleClickMinus}
          unitSystem={unitSystem}
        />
        <Card
          type={"XL cup"}
          size={xlCupSize}
          caffeine={350}
          onClickPlus={handleClickPlus}
          onClickMinus={handleClickMinus}
          unitSystem={unitSystem}
        />
      </div>
    </div>
  );
};

export default CardWrapper;
