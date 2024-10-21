import { FaArrowRotateLeft } from "react-icons/fa6";
import { TimerBar, TimerClock } from "./index";
import React from "react";

// TODO: Fix 1 sec delay on timer starting countdown
interface InfoWrapperProps {
  recommended: number;
  total: number;
  cups: number;
  resetTimer: boolean;
  onResetComplete: () => void;
}

const InfoWrapper: React.FC<InfoWrapperProps> = ({
  recommended,
  total,
  cups,
  resetTimer,
  onResetComplete,
}) => {
  const [recommendedCaffeine, setRecommendedCaffeine] =
    React.useState<number>(0);
  const [totalCaffeine, setTotalCaffeine] = React.useState<number>(0);
  const [servings, setServings] = React.useState<number>(0);
  const [time, setTime] = React.useState<number>(0);

  const handleTimeChange = (newTime: number) => {
    setTime(newTime);
  };

  React.useEffect(() => {
    setRecommendedCaffeine(recommended);
    setTotalCaffeine(total);
    setServings(cups);
  }, [recommended, total, cups]);

  return (
    <div className="">
      <div className="flex gap-4 justify-center items-center pb-4">
        <div className="flex flex-col items-center justify-center w-full">
          <div>
            Total: {totalCaffeine}mg / Recommended: {recommendedCaffeine}mg
          </div>
          <div className="h-1 w-full bg-primary"></div>
          <div>
            Cups today: <span>{servings}</span>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center mt-4 p-4 border-2 border-primary rounded-md cursor-pointer">
            <FaArrowRotateLeft className="bg-secondary" />
            Reset
          </div>
        </div>
      </div>
      <TimerBar caffeine={totalCaffeine} time={time} />
      <TimerClock
        resetTimer={resetTimer}
        onResetComplete={onResetComplete}
        caffeine={totalCaffeine}
        onTimeChange={handleTimeChange}
      />
    </div>
  );
};

export default InfoWrapper;
