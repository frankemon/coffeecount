import React from "react";
import { Nav, Footer, Calculator } from "./components";

const App: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Nav />
      <div className="flex-grow flex justify-center items-center">
        <Calculator />
      </div>
      <Footer />
    </div>
  );
};

export default App;
