import React, { useState, useEffect, useRef } from "react";
// 6 hours in seconds
const SIX_HOURS = 6 * 60 * 60;

// 3 hours in seconds
const THREE_HOURS = 3 * 60 * 60;

interface TimerClockProps {
  caffeine: number;
  resetTimer: boolean;
  onResetComplete: () => void;
  onTimeChange: (newTime: number) => void;
  onShowHalflifeModal: (showModal: boolean) => void;
  onShowTimerDoneModal: (showModal: boolean) => void;
}

const TimerClock: React.FC<TimerClockProps> = ({
  caffeine,
  resetTimer,
  onResetComplete,
  onTimeChange,
  onShowHalflifeModal,
  onShowTimerDoneModal,
}) => {
  const [time, setTime] = useState<number>(SIX_HOURS);
  const [, setOutofFocus] = useState<number>(0);
  const lastTimeRef = useRef<number>(Date.now());
  const lastVisibleTimeRef = useRef<number>(Date.now());

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
          if (newTime === THREE_HOURS) {
            onShowHalflifeModal(true);
          }
          if (newTime === 0) {
            onShowTimerDoneModal(true);
          }
          if (newTime <= 0) {
            clearInterval(interval);
            onTimeChange(0);
            return 0;
          }
          onTimeChange(newTime);
          return newTime;
        });
        lastTimeRef.current = Date.now();
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [caffeine, onTimeChange, onShowHalflifeModal, onShowTimerDoneModal]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        setOutofFocus((prevOutOfFocus) => prevOutOfFocus + 1);
        lastVisibleTimeRef.current = Date.now();
      } else if (document.visibilityState === "visible") {
        const currentTime = Date.now();
        const elapsedTime = (currentTime - lastVisibleTimeRef.current) / 1000; // Convert to seconds
        if (elapsedTime > 1) {
          setTime((prevTime) => {
            const adjustedTime = prevTime - Math.floor(elapsedTime);
            onTimeChange(adjustedTime);
            return adjustedTime;
          });
        }
        lastTimeRef.current = currentTime;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [onTimeChange]);

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
