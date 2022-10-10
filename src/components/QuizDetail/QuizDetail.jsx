import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";

const QuizDetail = () => {
  const quizDetail = useLoaderData();

  console.log(quizDetail);
  const { name, id, questions } = quizDetail.data;

  return (
    <div className="text-center">
      <h1>{name}</h1>
      <div>
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
