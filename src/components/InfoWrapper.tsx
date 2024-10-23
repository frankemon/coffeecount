import { FaArrowRotateLeft } from "react-icons/fa6";
import { TimerBar, TimerClock, Modal } from "./index";
import React from "react";

interface InfoWrapperProps {
  recommended: number;
  total: number;
  cups: number;
  resetTimer: boolean;
  onResetComplete: () => void;
  onResetAll: () => void;
}

const InfoWrapper: React.FC<InfoWrapperProps> = ({
  recommended,
  total,
  cups,
  resetTimer,
  onResetComplete,
  onResetAll,
}) => {
  const [recommendedCaffeine, setRecommendedCaffeine] =
    React.useState<number>(0);
  const [totalCaffeine, setTotalCaffeine] = React.useState<number>(0);
  const [servings, setServings] = React.useState<number>(0);
  const [time, setTime] = React.useState<number>(0);
  const [showHalflifeModal, setShowHalflifeModal] =
    React.useState<boolean>(false);
  const [showTimerDoneModal, setShowTimerDoneModal] =
    React.useState<boolean>(false);

  const handleTimeChange = (newTime: number) => {
    setTime(newTime);
  };

  const handleResetAll = () => {
    setServings(0);
    setTotalCaffeine(0);
    onResetAll();
  };

  const onShowHalflifeModal = () => {
    setShowHalflifeModal(true);
  };
  const onShowTimerDoneModal = () => {
    setShowTimerDoneModal(true);
  };

  const handleCloseHalflifeModal = () => {
    setShowHalflifeModal(false);
  };

  const handleCloseTimerDoneModal = () => {
    setShowTimerDoneModal(false);
  };

  React.useEffect(() => {
    setRecommendedCaffeine(recommended);
    setTotalCaffeine(total);
    setServings(cups);
  }, [recommended, total, cups]);

  return (
    <div className="">
      {showHalflifeModal && (
        <Modal onClose={handleCloseHalflifeModal} buttonText={"Okay"}>
          <div className="flex flex-col gap-4">
            <p>Hi, it's been 3 hours since you last drank coffee.</p>
            <p>
              Caffeine's half-life is typically around 5-6 hours. This means
              that your caffeine levels have decreased by about half since your
              last cup.
            </p>
            <p>
              If you're feeling tired or need a boost, now might be a good time
              to consider another cup of coffee. However, be mindful of your
              overall caffeine intake and listen to your body.
            </p>
            <p>Enjoy!</p>
          </div>
        </Modal>
      )}
      {showTimerDoneModal && (
        <Modal onClose={handleCloseTimerDoneModal} buttonText={"Okay"}>
          <div className="flex flex-col gap-4">
            <p>Hi, it's been 6 hours since you last drank coffee.</p>
            <p>
              Caffeine's half-life is typically around 5-6 hours. This means the
              caffeine should mostly be processed out of your system.
            </p>
            <p>
              If you're feeling tired or need a boost, now might be a good time
              to consider another cup of coffee. However, be mindful of your
              overall caffeine intake and listen to your body.
            </p>
          </div>
        </Modal>
      )}
      <div className="flex gap-4 justify-center items-center py-4">
        <div className="flex flex-col items-center justify-center w-full gap-4">
          <div>
            Total: {totalCaffeine}mg / Recommended: {recommendedCaffeine}mg
          </div>
          <div className="border-t-2 border-primary w-full rounded-full"></div>
          <div>
            Cups today: <span>{servings}</span>
          </div>
        </div>
        <div>
          <button
            onClick={handleResetAll}
            className="flex flex-col justify-center items-center mt-4 p-2 lg:p-4 border-2 border-primary rounded-md cursor-pointer"
          >
            <FaArrowRotateLeft className="bg-secondary" />
            Reset
          </button>
        </div>
      </div>
      <TimerBar caffeine={totalCaffeine} time={time} />
      <TimerClock
        resetTimer={resetTimer}
        onResetComplete={onResetComplete}
        caffeine={totalCaffeine}
        onTimeChange={handleTimeChange}
        onShowHalflifeModal={onShowHalflifeModal}
        onShowTimerDoneModal={onShowTimerDoneModal}
      />
    </div>
  );
};

export default InfoWrapper;
