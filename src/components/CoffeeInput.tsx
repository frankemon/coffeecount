// import { useState, React } from "react";
// import { FaUndoAlt } from "react-icons/fa";
// import { FaPlus } from "react-icons/fa";
// import { FaMinus } from "react-icons/fa";
// import { FaRegTimesCircle } from "react-icons/fa";
// import ButtonContext from "../ButtonContext";
// import { useContext } from "react";

// function CoffeeInput() {
//   const [cupCount, setCupCount] = useState(0);
//   const [totalCaffeine, setTotalCaffeine] = useState(0);
//   const { caffeine } = useContext(ButtonContext);

//   function addCup() {
//     setCupCount(cupCount + 1);
//     setTotalCaffeine(totalCaffeine + caffeine);
//   }

//   function removeCup() {
//     setCupCount(cupCount - 1);
//     setTotalCaffeine(totalCaffeine - caffeine);
//   }

//   function resetCups() {
//     setCupCount(0);
//     setTotalCaffeine(0);
//   }

//   return (
//     <>
//       <div className="coffee-input-container">
//         Cups today: {cupCount} <br></br>
//         Caffeine today: {totalCaffeine}mg
//       </div>
//       <div className="flex-row">
//         <button
//           disabled={cupCount === 0 ? true : false}
//           onClick={removeCup}
//           className="input-button"
//         >
//           {cupCount === 0 ? <FaRegTimesCircle /> : <FaMinus />}
//         </button>
//         <button onClick={addCup} className="input-button">
//           <FaPlus />
//         </button>
//         <button onClick={resetCups} className="input-button">
//           <FaUndoAlt />
//         </button>
//       </div>
//     </>
//   );
// }

// export default CoffeeInput;
