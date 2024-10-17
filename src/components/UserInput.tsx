import React, { useState } from "react";

interface UserInputProps {
  onCalculate: (weight: number) => void;
}

const UserInput: React.FC<UserInputProps> = ({ onCalculate }) => {
  const [weight, setWeight] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(Number(event.target.value));
    console.log("weight", weight);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onCalculate(weight);
  };

  return (
    <div>
      {/* {weight === 0 && <p>Please fill in your weight!</p>} */}
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="weight" className="font-xl font-bold">
          Your weight
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
            className="bg-textPrimary text-bgPrimary p-2 rounded-md font-xl font-bold"
          >
            Calculate
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserInput;
