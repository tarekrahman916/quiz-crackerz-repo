import React from "react";
import { Link } from "react-router-dom";

const QuizTopic = ({ topic }) => {
  const { id, name, logo, total } = topic;
  return (
    <div>
      <div className="card card-compact w-full p-0  bg-slate-500 text-white shadow-xl">
        <figure>
          <img
            src={logo}
            className="p-3 rounded-2xl border w-full h-auto lg:h-64"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Total Quiz: {total}</p>
          <div className="card-actions justify-end">
            <Link to={`/quiz/${id}`}>
              <button className="btn btn-primary">Start Practice</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizTopic;
