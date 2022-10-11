import React, { createContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";

export const CorrectAnsContext = createContext([]);

const QuizDetail = () => {
  const [correctAns, setCorrectAns] = useState(0);
  const quizDetail = useLoaderData();

  console.log(quizDetail);
  const { name, questions } = quizDetail.data;

  return (
    <CorrectAnsContext.Provider value={[correctAns, setCorrectAns]}>
      <div className="text-center mt-3">
        <h1 className="text-5xl text-slate-600 font-semibold mb-7">
          Quiz For {name}
        </h1>
        <h3 className="text-xl text-slate-600  font-bold mb-5">
          Total Correct Ans: {correctAns}
        </h3>
        <div className="">
          {questions.map((questionDetail) => (
            <Questions
              key={questionDetail.id}
              questionDetail={questionDetail}
            ></Questions>
          ))}
        </div>
      </div>
    </CorrectAnsContext.Provider>
  );
};

export default QuizDetail;
