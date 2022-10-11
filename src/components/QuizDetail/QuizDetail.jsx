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
      <div className="text-center ">
        <h1 className="text-4xl font-semibold mb-7">Quiz For {name}</h1>
        <h3>Correct Ans: {correctAns}</h3>
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
