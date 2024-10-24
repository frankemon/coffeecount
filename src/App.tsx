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
    <div className="relative flex flex-col justify-center sm:items-center h-screen font-bold text-sm sm:text-xl">
      <Nav onShowDisclaimerModal={handleShowDisclaimerModal} />
      {/* <div className="mt-20 mb-14 h-full"> */}
      <div className="h-full w-full lg:max-w-3xl">
        <div className="w-full h-full flex flex-col items-center justify-around p-4">
          {showDisclaimerModal && (
            <Modal onClose={handleCloseDisclaimerModal} buttonText={"Got it!"}>
              <Disclaimer />
            </Modal>
          )}
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
              <div className="w-full">
                <CardWrapper
                  recommendedCaffeine={recommendedCaffeine}
                  onTotalCaffeineChange={handleTotalCaffeineChange}
                  onServingsChange={handleServingsChange}
                  totalCaffeine={totalCaffeine}
                  totalServings={servings}
                  onAddCaffeine={handleAddCaffeine}
                  unitSystem={unitSystem}
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
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
