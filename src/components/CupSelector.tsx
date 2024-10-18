import React from "react";
import { Button } from "./index";

const CupSelector: React.FC = () => {
  return (
    <>
      <p>Select serving size:</p>
      <div className="flex gap-4 w-full">
        <Button size={250} caffeine={50} />
        <Button size={330} caffeine={100} />
        <Button size={500} caffeine={150} />
      </div>
    </>
  );
};

export default CupSelector;
