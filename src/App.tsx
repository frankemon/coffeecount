import React, { useState } from "react";

import {
  Nav,
  Footer,
  CalculatorWrapper,
  CardWrapper,
  TimerWrapper,
} from "./components";

// TODO: Figure out how to only minus those that have been clicked before

const App: React.FC = () => {
  const [recommendedCaffeine, setRecommendedCaffeine] = useState<number>(0);
  const [totalCaffeine, setTotalCaffeine] = useState<number>(0);
  const [servings, setServings] = useState<number>(0);

  // Handler function to pick up the recommended caffeine value in child component
  const handleRecommendedCaffeineChange = (recommended: number) => {
    setRecommendedCaffeine(recommended);
  };

  // Handler function to pick up the total caffeine value in child component
  const handleTotalCaffeineChange = (caffeine: number) => {
    setTotalCaffeine(caffeine);
  };

  // Handler function to track the number of servings
  const handleServingsChange = (newServings: number) => {
    setServings(newServings);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Nav />
      <div className="flex-grow flex flex-col justify-center items-center gap-4 text-lg font-bold">
        <div className="w-full">
          <CalculatorWrapper
            // Pass a handler function down to the child component
            onRecommendedCaffeineChange={handleRecommendedCaffeineChange}
          />
        </div>
        <div className="w-full">
          <CardWrapper
            // Pass a handler function down to the child component
            onTotalCaffeineChange={handleTotalCaffeineChange}
            onServingsChange={handleServingsChange}
            totalCaffeine={totalCaffeine}
            totalServings={servings}
          />
        </div>
        <div className="w-full">
          <TimerWrapper
            recommended={recommendedCaffeine}
            total={totalCaffeine}
            cups={servings}
          />
        </div>
        <p className="italic">
          *Recommended daily intake is suggested as 6mg/kg of bodyweight
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default App;
