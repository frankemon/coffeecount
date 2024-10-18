import React, { useState, useEffect } from "react";

interface TimerBarProps {
  caffeine: number;
  time: number;
}

const TimerBar: React.FC<TimerBarProps> = ({ caffeine, time }) => {
  // 6 hours half_life
  const HALF_LIFE = 6 * 60 * 60;
  const [totalCaffeine, setTotalCaffeine] = useState<number>(0);
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  useEffect(() => {
    setTotalCaffeine(caffeine);
    setTimeRemaining(time);
  }, [caffeine, time]);

  // Set the width to 100% when caffeine value is received
  let widthPercentage = (timeRemaining / HALF_LIFE) * 100 + "%";

  if (caffeine === 0) {
    widthPercentage = 0 + "%";
  }

  let parsedPercent = Math.floor(parseFloat(widthPercentage));

  return (
    <div className="flex items-center gap-1">
      <div
        id="timerBarOuter"
        className="border-2 border-textPrimary h-12 w-[90%] rounded-md"
      >
        <div
          id="timerBarInner"
          className="bg-textPrimary h-full transition-all duration-500 ease-in-out"
          style={{ width: widthPercentage }}
        ></div>
      </div>
      <div className="flex justify-center items-center w-[10%]">
        <p>{parsedPercent}%</p>
      </div>
    </div>
  );
};

export default TimerBar;
