import React from "react";

const Option = ({ option, handleQuestionOption }) => {
  return (
    <div
      onClick={handleQuestionOption}
      className="border border-gray-500 p-3  hover:text-blue-700   rounded-md bg-white "
    >
      <div className="">
        <input className="mr-2" type="radio" value={option} name="quiz" />
        {option}
      </div>
    </div>
  );
};

export default Option;
