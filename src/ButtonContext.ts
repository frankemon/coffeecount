// import { createContext, useState } from "react";

// const ButtonContext = createContext();

// export function ButtonProvider({ children }) {
//   const [caffeine, setCaffeine] = useState(0);

//   function addCaffeine({ caffeine }) {
//     setCaffeine(caffeine);
//     console.log("caffeine ctx", caffeine);
//   }

//   return (
//     // <ButtonContext.Provider value={{ caffeine: 10 }}>
//     <ButtonContext.Provider value={{ caffeine, addCaffeine }}>
//       {children}
//     </ButtonContext.Provider>
//   );
// }

// export default ButtonContext;
