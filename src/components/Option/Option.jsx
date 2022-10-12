import React from "react";

const Option = ({ option, handleQuestionOption }) => {
  return (
    <label
      htmlFor={option}
      className="border border-gray-500 p-3  hover:text-blue-700   rounded-md bg-white "
    >
      <input
        onClick={handleQuestionOption}
        className="mr-2"
        type="radio"
        id={option}
        value={option}
        name="quiz"
      />
      {option}
    </label>
  );
};

export default Option;
