import React from "react";
import Option from "../Option/Option";

const Questions = ({ questionDetail }) => {
  const { question, options } = questionDetail;

  return (
    <div className="border p-5 w-9/12 mx-auto mb-5">
      <h1 className="text-2xl font-semibold text-gray-700">
        {question.split("<p>")}
      </h1>
      <div className="grid lg:grid-cols-2 justify-between  text-center text-xl gap-5 mt-5 ">
        {options.map((option, idx) => (
          <Option key={idx} option={option}></Option>
        ))}
      </div>
    </div>
  );
};

export default Questions;
