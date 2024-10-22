import React from "react";

const Disclaimer: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <p>Disclaimer before using:</p>
      <p>
        The caffeine information and advice provided in this app is based on
        estimates and averages. Actual caffeine content can vary depending on
        factors such as coffee bean type, brewing method, metabolism, your
        sensitivity and strength.
      </p>
      <p>
        It's important to consult with a healthcare professional if you have
        concerns about your caffeine intake or if you are pregnant,
        breastfeeding, or have underlying health conditions. This app is
        intended for informational purposes only and should not be considered a
        substitute for professional medical advice.
      </p>
    </div>
  );
};

export default Disclaimer;
