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
    <div className="flex flex-col justify-center items-center h-screen font-bold text-sm lg:text-xl">
      <Nav />
      {/* <div className="flex flex-col flex-grow justify-evenly items-center gap-4 font-bold w-full p-4 lg:text-lg"> */}
      <div className="mt-20 mb-14 h-full">
        <div className="w-full h-full flex flex-col items-center justify-between p-4">
          {recommendedCaffeine === 0 ? (
            <div className="flex flex-col h-full justify-center">
              <CalculatorWrapper
                onRecommendedCaffeineChange={handleRecommendedCaffeineChange}
              />
            </div>
          ) : (
            <>
              <div className="w-full">
                <CardWrapper
                  recommendedCaffeine={recommendedCaffeine}
                  onTotalCaffeineChange={handleTotalCaffeineChange}
                  onServingsChange={handleServingsChange}
                  totalCaffeine={totalCaffeine}
                  totalServings={servings}
                  onAddCaffeine={handleAddCaffeine}
                />
              </div>
              <div className="w-full">
                <InfoWrapper
                  recommended={recommendedCaffeine}
                  total={totalCaffeine}
                  cups={servings}
                  resetTimer={resetTimer}
                  onResetComplete={handleResetComplete}
                />
              </div>
              <div className="w-full">
                <p className="italic">
                  <a href="https://www.efsa.europa.eu/en/topics/topic/caffeine">
                    *Recommended
                  </a>{" "}
                  daily intake is suggested as 3mg/kg of bodyweight
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
