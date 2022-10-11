import React, { createContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";

const CorrectAnsContext = createContext([]);

const QuizDetail = () => {
  const [correctAns, setCorrectAns] = useState([]);
  const quizDetail = useLoaderData();

  console.log(quizDetail);
  const { name, questions } = quizDetail.data;

  return (
    <CorrectAnsContext.Provider value={[correctAns, setCorrectAns]}>
      <div className="text-center">
        <h1 className="text-5xl font-semibold mb-7">{name}</h1>
        <h3>Correct Ans: {correctAns.length}</h3>
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
