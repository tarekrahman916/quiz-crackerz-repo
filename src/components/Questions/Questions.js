import React from "react";
import Option from "../Option/Option";

const Questions = ({ questionDetail }) => {
  const { question, options } = questionDetail;
  //console.log(questionDetail);
  return (
    <div>
      <h1>{question.split("<p>")}</h1>
      <div>
        {options.map((option, idx) => (
          <Option key={idx} option={option}></Option>
        ))}
      </div>
    </div>
  );
};

export default Questions;
