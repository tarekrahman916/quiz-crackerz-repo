import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";

const QuizDetail = () => {
  const quizDetail = useLoaderData();

  console.log(quizDetail);
  const { name, questions } = quizDetail.data;

  return (
    <div className="text-center">
      <h1 className="text-5xl font-semibold mb-7">{name}</h1>
      <div className="">
        {questions.map((questionDetail) => (
          <Questions
            key={questionDetail.id}
            questionDetail={questionDetail}
          ></Questions>
        ))}
      </div>
    </div>
  );
};

export default QuizDetail;
