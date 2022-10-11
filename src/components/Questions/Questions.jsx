import React, { useContext } from "react";
import Option from "../Option/Option";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CorrectAnsContext } from "../QuizDetail/QuizDetail";
import { EyeIcon } from "@heroicons/react/24/solid";
import Swal from "sweetalert2";

const Questions = ({ questionDetail }) => {
  const [correctAns, setCorrectAns] = useContext(CorrectAnsContext);

  const { question, options, correctAnswer } = questionDetail;

  const handleQuestionOption = (e) => {
    const selectedOption = e.currentTarget.innerText;

    if (
      selectedOption.split(" ").join("") === correctAnswer.split(" ").join("")
    ) {
      toast.success("Your answer is correct !", { autoClose: 500 });
      setCorrectAns(correctAns + 1);
    } else {
      toast.warning("Your answer is wrong !", { autoClose: 500 });
    }
  };

  const handleShowCorrectAns = () => {
    Swal.fire(correctAnswer);
    console.log(typeof correctAnswer);
  };

  return (
    <div className="border p-5 lg:mx-60 mx-5 mb-5 bg-gray-600 rounded-xl">
      <div className="flex justify-end">
        <button onClick={handleShowCorrectAns}>
          <EyeIcon className="h-6 w-6 text-white hover:text-orange-400 " />
        </button>
      </div>
      <div>
        <h1 className="text-xl font-semibold text-white">{question}</h1>
        <div className="grid lg:grid-cols-2 justify-between  text-center text-xl gap-5 mt-5 ">
          {options.map((option, idx) => (
            <Option
              key={idx}
              option={option}
              handleQuestionOption={handleQuestionOption}
            ></Option>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Questions;
