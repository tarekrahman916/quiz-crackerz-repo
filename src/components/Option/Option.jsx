import React from "react";

const Option = ({ option, handleQuestionOption }) => {
  //console.log(option);
  return (
    <div
      className="border border-gray-500 p-3 hover:text-blue-700 w-full rounded-md"
      onClick={handleQuestionOption}
    >
      <input className="mr-2" type="radio" value={option} name="quiz" />
      {option}
    </div>
  );
};

export default Option;
