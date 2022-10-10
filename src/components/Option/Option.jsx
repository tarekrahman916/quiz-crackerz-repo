import React from "react";

const handleQuestionOption = (e) => {
  console.log(e.currentTarget.innerText);
};

const Option = ({ option }) => {
  console.log(option);
  return (
    <div onClick={handleQuestionOption}>
      <input type="radio" value={option} name="quiz" />
      {option}
    </div>
  );
};

export default Option;
