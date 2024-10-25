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
  const [unitSystem, setUnitSystem] = useState<"metric" | "imperial">("metric");

  const toggleUnitSystem = () => {
    setUnitSystem((prevUnitSystem) =>
      prevUnitSystem === "metric" ? "imperial" : "metric"
    );
  };

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
    <div className="font-bold h-screen">
      <div className="flex flex-col justify-center h-full sm:items-center">
        <Nav onShowDisclaimerModal={handleShowDisclaimerModal} />
        {showDisclaimerModal && (
          <Modal onClose={handleCloseDisclaimerModal} buttonText={"Got it!"}>
            <Disclaimer />
          </Modal>
        )}
        <div className="p-4 lg:w-1/2 lg:max-w-1/2">
          {recommendedCaffeine === 0 ? (
            <div>
              <CalculatorWrapper
                onRecommendedCaffeineChange={handleRecommendedCaffeineChange}
                unitSystem={unitSystem}
                onToggleUnitSystem={toggleUnitSystem}
              />
              <button className="mt-4" onClick={handleShowDisclaimerModal}>
                Disclaimer
              </button>
            </div>
          ) : (
            <>
              <CardWrapper
                recommendedCaffeine={recommendedCaffeine}
                onTotalCaffeineChange={handleTotalCaffeineChange}
                onServingsChange={handleServingsChange}
                totalCaffeine={totalCaffeine}
                totalServings={servings}
                onAddCaffeine={handleAddCaffeine}
                unitSystem={unitSystem}
              />
              <InfoWrapper
                recommended={recommendedCaffeine}
                total={totalCaffeine}
                cups={servings}
                resetTimer={resetTimer}
                onResetComplete={handleResetComplete}
                onResetAll={handleResetAll}
              />
            </>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
