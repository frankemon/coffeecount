import React, { useState } from "react";

interface CalculatorInputProps {
  onCalculate: (weight: number) => void;
}

const CalculatorInput: React.FC<CalculatorInputProps> = ({ onCalculate }) => {
  const [weight, setWeight] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(Number(event.target.value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onCalculate(weight);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="">
        <label htmlFor="weight" className="">
          Your weight:
        </label>
        <div className="flex justify-center items-center gap-1">
          <input
            type="number"
            onChange={handleChange}
            className="rounded-md p-2"
          />
          <button
            type="submit"
            disabled={weight === 0}
            className="bg-textPrimary text-bgPrimary p-2 rounded-md"
          >
            Calculate
          </button>
        </div>
      </form>
    </div>
  );
};

export default CalculatorInput;
