import { TimerBar, TimerClock } from "./index";
import React, { useState } from "react";

interface TimerWrapperProps {
  recommended: number;
  total: number;
  cups: number;
}

const TimerWrapper: React.FC<TimerWrapperProps> = ({
  recommended,
  total,
  cups,
}) => {
  const [recommendedCaffeine, setRecommendedCaffeine] =
    React.useState<number>(0);
  const [totalCaffeine, setTotalCaffeine] = React.useState<number>(0);
  const [servings, setServings] = React.useState<number>(0);

  React.useEffect(() => {
    setRecommendedCaffeine(recommended);
    setTotalCaffeine(total);
    setServings(cups);
  }, [recommended, total, cups]);

  return (
    <div>
      <div className="">
        Total: {totalCaffeine}mg / Recommended: {recommendedCaffeine}mg
      </div>
      <hr />
      <div>
        Cups today: <span>{servings}</span>
      </div>
      <br />
      <div className="flex gap-4 w-full">
        <TimerBar />
        <TimerClock />
      </div>
    </div>
  );
};

export default TimerWrapper;
