import React, { useState } from "react";
import { CalculatorInput, CalculatorOutput } from "./index";

interface CalculatorWrapperProps {
  // Incoming function from App.tsx to grab the recommended caffeine value
  onRecommendedCaffeineChange: (caffeine: number) => void;
  onToggleUnitSystem: () => void;
  unitSystem: "metric" | "imperial";
}

const CalculatorWrapper: React.FC<CalculatorWrapperProps> = ({
  onRecommendedCaffeineChange,
  onToggleUnitSystem,
  unitSystem,
}) => {
  const [recommendedCaffeine, setRecommendedCaffeine] = useState<number>(0);

  const handleCalculate = (weight: number) => {
    const recommendedCaffeine = weight * 3;
    setRecommendedCaffeine(recommendedCaffeine);
    // Pass the value up to App.tsx
    onRecommendedCaffeineChange(recommendedCaffeine);
  };

  return (
    <div className="flex flex-col items-start w-full gap-4">
      <button onClick={onToggleUnitSystem}>Click</button>
      <CalculatorInput onCalculate={handleCalculate} unitSystem={unitSystem} />
      <CalculatorOutput recommendedCaffeine={recommendedCaffeine} />
    </div>
  );
};

export default CalculatorWrapper;
