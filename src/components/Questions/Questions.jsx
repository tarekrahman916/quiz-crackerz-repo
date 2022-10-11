import React from "react";
import Option from "../Option/Option";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Questions = ({ questionDetail }) => {
  const { question, options, correctAnswer } = questionDetail;

  //console.log(correctAnswer);

  const handleQuestionOption = (e) => {
    const selectedOption = e.currentTarget.innerText;
    if (selectedOption === correctAnswer) {
      toast.success("Your answer is correct !", { autoClose: 500 });
    } else {
      toast.warning("Your answer is wrong !", { autoClose: 500 });
    }
  };

  return (
    <div className="border p-5 w-9/12 mx-auto mb-5">
      <h1 className="text-2xl font-semibold text-gray-700">
        {question.split("<p>")}
      </h1>
      <div className="grid lg:grid-cols-2 justify-between  text-center text-xl gap-5 mt-5 ">
        {options.map((option, idx) => (
          <Option
            key={idx}
            option={option}
            handleQuestionOption={handleQuestionOption}
          ></Option>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Questions;
