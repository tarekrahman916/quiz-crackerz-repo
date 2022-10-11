import React, { useContext } from "react";
import { TopicsContext } from "../../layout/Main";
import QuizTopic from "../QuizTopic/QuizTopic";
import TopBanner from "../TopBanner/TopBanner";

const Home = () => {
  const topics = useContext(TopicsContext);

  return (
    <div>
      <TopBanner></TopBanner>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 px-10 lg:px-20  lg:justify-between">
        {topics.map((topic) => (
          <QuizTopic key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default Home;
