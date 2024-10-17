// import React, { useState } from "react";

// function Calculator() {
//   const [weight, setWeight] = useState("");
//   const [recommended, setRecommended] = useState(0);
//   console.log(weight);

//   function calcCaffeine(e) {
//     e.preventDefault();
//     const recommended = weight * 6;
//     setRecommended(recommended);
//   }

//   return (
//     <div className="calculator">
//       <form>
//         <label htmlFor="weight" className="font-xl">
//           Your weight
//         </label>
//         <br />
//         <input
//           onChange={(e) => setWeight(e.target.value)}
//           value={weight}
//           type="text"
//           placeholder="0"
//         />
//         <button onClick={calcCaffeine} type="button">
//           Calculate
//         </button>
//       </form>
//       <div className="calc-display">
//         {recommended === 0 ? (
//           <p>Please fill in your weight!</p>
//         ) : (
//           <p className="font-xl">
//             Your recommended daily intake is: {recommended}mg
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Calculator;

import React, { useState } from "react";
import { UserInput, Result } from "./index";

const Calculator: React.FC = () => {
  const [recommendedCaffeine, setRecommendedCaffeine] = useState<number>(0);

  const handleCalculate = (weight: number) => {
    const recommendedCaffeine = weight * 6;
    setRecommendedCaffeine(recommendedCaffeine);
    // setRecommendedCaffeine(calculatedCaffeine);
    // console.log("recommendedCaffeine", recommendedCaffeine);
  };

  return (
    <>
      {recommendedCaffeine === 0 ? (
        <UserInput onCalculate={handleCalculate} />
      ) : (
        <Result recommendedCaffeine={recommendedCaffeine} />
      )}
    </>
  );
};

export default Calculator;
