import React, { useState } from "react";
import { CalculatorInput } from "./index";

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
  const [, setRecommendedCaffeine] = useState<number>(0);

  const handleCalculate = (weight: number) => {
    let weightInKg = weight;
    if (unitSystem === "imperial") {
      // Convert pounds to kilograms
      weightInKg = weight * 0.453592;
    }
    const recommendedCaffeine = Math.round(weightInKg * 6);
    setRecommendedCaffeine(recommendedCaffeine);
    // Pass the value up to App.tsx
    onRecommendedCaffeineChange(recommendedCaffeine);
  };

  return (
    <div className="flex flex-col items-start w-full gap-4">
      <div className="flex items-center space-x-2">
        <div
          className="flex items-center w-12 h-6 bg-primary rounded-full cursor-pointer"
          onClick={onToggleUnitSystem}
        >
          <div
            className={`w-5 h-5 bg-secondary rounded-full transition-transform ${
              unitSystem === "metric"
                ? "transform translate-x-1"
                : "transform translate-x-6"
            }`}
          ></div>
        </div>
        <p className="text-primary">
          {unitSystem === "metric" ? "Metric" : "Imperial"}
        </p>
      </div>
      <CalculatorInput onCalculate={handleCalculate} unitSystem={unitSystem} />
    </div>
  );
};

export default CalculatorWrapper;
