import React, { useState } from "react";

import {
  Nav,
  Footer,
  CalculatorWrapper,
  CardWrapper,
  InfoWrapper,
} from "./components";

// TODO: Figure out how to only minus those that have been clicked before

const App: React.FC = () => {
  const [recommendedCaffeine, setRecommendedCaffeine] = useState<number>(0);
  const [totalCaffeine, setTotalCaffeine] = useState<number>(0);
  const [servings, setServings] = useState<number>(0);
  const [resetTimer, setResetTimer] = useState<boolean>(false);

  const handleRecommendedCaffeineChange = (recommended: number) => {
    setRecommendedCaffeine(recommended);
  };

  const handleTotalCaffeineChange = (caffeine: number) => {
    setTotalCaffeine(caffeine);
  };

  const handleServingsChange = (newServings: number) => {
    setServings(newServings);
  };

  const handleAddCaffeine = () => {
    setResetTimer((prev) => !prev);
  };

  const handleResetComplete = () => {
    setResetTimer(false);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Nav />
      <div className="flex-grow flex flex-col justify-center items-center gap-4 text-lg font-bold">
        <div className="w-full">
          {recommendedCaffeine === 0 ? (
            <CalculatorWrapper
              onRecommendedCaffeineChange={handleRecommendedCaffeineChange}
            />
          ) : (
            <>
              <CardWrapper
                recommendedCaffeine={recommendedCaffeine}
                onTotalCaffeineChange={handleTotalCaffeineChange}
                onServingsChange={handleServingsChange}
                totalCaffeine={totalCaffeine}
                totalServings={servings}
                onAddCaffeine={handleAddCaffeine}
              />
              <InfoWrapper
                recommended={recommendedCaffeine}
                total={totalCaffeine}
                cups={servings}
                resetTimer={resetTimer}
                onResetComplete={handleResetComplete}
              />
              <p className="italic">
                *Recommended daily intake is suggested as 6mg/kg of bodyweight
              </p>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
