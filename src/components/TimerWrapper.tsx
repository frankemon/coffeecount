import { TimerBar, TimerClock } from "./index";

import React from "react";

const TimerWrapper = () => {
  return (
    <div>
      <p>TimerWrapper</p>
      <br />
      <div className="flex gap-4 w-full">
        <TimerClock />
        <TimerBar />
      </div>
    </div>
  );
};

export default TimerWrapper;
