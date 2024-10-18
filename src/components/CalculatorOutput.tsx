import React from "react";

interface CalculatorOutputProps {
  recommendedCaffeine: number;
}

const CalculatorOutput: React.FC<CalculatorOutputProps> = ({
  recommendedCaffeine,
}) => {
  return (
    <div>
      {recommendedCaffeine === 0 ? (
        <p>Please fill in your weight!</p>
      ) : (
        <p>Your recommended daily intake is: {recommendedCaffeine}mg</p>
      )}
    </div>
  );
};

export default CalculatorOutput;
