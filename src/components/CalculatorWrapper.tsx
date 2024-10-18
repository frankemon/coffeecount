import React, { useState } from "react";
import { CalculatorInput, CalculatorOutput } from "./index";

const CalculatorWrapper: React.FC = () => {
  const [recommendedCaffeine, setRecommendedCaffeine] = useState<number>(0);

  const handleCalculate = (weight: number) => {
    const recommendedCaffeine = weight * 6;
    setRecommendedCaffeine(recommendedCaffeine);
  };

  return (
    <div className="flex flex-col items-start w-full gap-4">
      <CalculatorInput onCalculate={handleCalculate} />
      <CalculatorOutput recommendedCaffeine={recommendedCaffeine} />
    </div>
  );
};

export default CalculatorWrapper;
