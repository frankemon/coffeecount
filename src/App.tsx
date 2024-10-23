import React, { useState } from "react";

import {
  Nav,
  Footer,
  CalculatorWrapper,
  CardWrapper,
  InfoWrapper,
  Disclaimer,
  Modal,
} from "./components";

const App: React.FC = () => {
  const [recommendedCaffeine, setRecommendedCaffeine] = useState<number>(0);
  const [totalCaffeine, setTotalCaffeine] = useState<number>(0);
  const [servings, setServings] = useState<number>(0);
  const [resetTimer, setResetTimer] = useState<boolean>(false);
  const [showDisclaimerModal, setShowDisclaimerModal] =
    useState<boolean>(false);

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
    setResetTimer((prevResetTimer) => !prevResetTimer);
  };

  const handleResetAll = () => {
    setServings(0);
    setTotalCaffeine(0);
  };

  const handleResetComplete = () => {
    setResetTimer(false);
  };

  const handleShowDisclaimerModal = () => {
    setShowDisclaimerModal(true);
  };

  const handleCloseDisclaimerModal = () => {
    setShowDisclaimerModal(false);
  };

  return (
    <div className="relative flex flex-col justify-center sm:items-center h-screen font-bold text-sm sm:text-xl">
      <Nav onShowDisclaimerModal={handleShowDisclaimerModal} />
      <div className="mt-20 mb-14 h-full">
        <div className="w-full h-full flex flex-col items-center justify-between p-4">
          {showDisclaimerModal && (
            <Modal onClose={handleCloseDisclaimerModal} buttonText={"Got it!"}>
              <Disclaimer />
            </Modal>
          )}
          {recommendedCaffeine === 0 ? (
            <div className="flex flex-col h-full justify-around w-full">
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
                  onResetAll={handleResetAll}
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
