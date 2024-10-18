import React from "react";
import {
  Nav,
  Footer,
  CalculatorWrapper,
  CupSelector,
  TimerWrapper,
} from "./components";

const App: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Nav />
      <div className="flex-grow flex flex-col justify-center items-center gap-4 text-lg font-bold">
        <div className="w-full">
          <CalculatorWrapper />
        </div>
        <div className="w-full">
          <CupSelector />
        </div>
        <div className="w-full">
          <TimerWrapper />
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
