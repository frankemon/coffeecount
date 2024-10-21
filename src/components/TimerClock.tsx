import React, { useState, useEffect } from "react";
// 6 hours in seconds
const SIX_HOURS = 6 * 60 * 60;
// const SIX_HOURS = 10;
// 3 hours in seconds
const THREE_HOURS = 3 * 60 * 60;
// const THREE_HOURS = 5;

interface TimerClockProps {
  caffeine: number;
  resetTimer: boolean;
  onResetComplete: () => void;
  onTimeChange: (newTime: number) => void;
}

const TimerClock: React.FC<TimerClockProps> = ({
  caffeine,
  resetTimer,
  onResetComplete,
  onTimeChange,
}) => {
  const [time, setTime] = useState<number>(SIX_HOURS);

  useEffect(() => {
    if (resetTimer) {
      // Reset the timer to 6 hours
      setTime(SIX_HOURS);
      setTimeout(() => {
        // Set resetTimer back to false after 1 second
        onResetComplete();
      }, 500);
    }
  }, [resetTimer, onResetComplete]);

  useEffect(() => {
    if (caffeine > 0) {
      const interval = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime - 1;
          // TODO: Show modal for drinking ?
          if (newTime === THREE_HOURS) {
            console.log("Halfway mark reached, drink a coffee");
          }
          onTimeChange(newTime);
          return newTime;
        });
      }, 1000);

      // Cleanup interval on component unmount
      return () => clearInterval(interval);
    }
  }, [caffeine]);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <div className="py-4">
      {caffeine > 0 ? (
        <div>
          {hours}hrs {minutes.toString().padStart(2, "0")}min{" "}
          {seconds.toString().padStart(2, "0")}sec
        </div>
      ) : (
        <p>Add coffee to start the timer</p>
      )}
    </div>
  );
};

export default TimerClock;
