import React from "react";

interface ResultProps {
  recommendedCaffeine: number;
}

const Result: React.FC<ResultProps> = ({ recommendedCaffeine }) => {
  return <div>{recommendedCaffeine}</div>;
};

export default Result;
