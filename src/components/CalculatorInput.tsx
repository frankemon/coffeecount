import React, { useState } from "react";

interface CalculatorInputProps {
  onCalculate: (weight: number) => void;
  unitSystem: "metric" | "imperial";
}

const CalculatorInput: React.FC<CalculatorInputProps> = ({
  onCalculate,
  unitSystem,
}) => {
  const [weight, setWeight] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(Number(event.target.value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onCalculate(weight);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="w-full">
        <label htmlFor="weight" className="">
          Your weight in {unitSystem === "imperial" ? "lbs" : "kg"}:
        </label>
        <div className="flex flex-col sm:flex-row w-full gap-4 sm:gap-2">
          <input
            type="number"
            onChange={handleChange}
            className="rounded-md p-2 bg-secondary border-2 border-primary text-primary text-base"
          />
          <button
            type="submit"
            disabled={weight === 0}
            className="bg-secondary text-primary p-2 border-2 border-primary rounded-md cursor-pointer"
          >
            Calculate
          </button>
        </div>
      </form>
    </div>
  );
};

export default CalculatorInput;
