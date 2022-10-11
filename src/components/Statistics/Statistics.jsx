// import React, { useContext } from "react";
import { TopicsContext } from "../../layout/Main";
import React, { PureComponent, useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "React",
    quiz: 8,
  },
  {
    name: "JavaScript",
    quiz: 9,
  },
  {
    name: "CSS",
    quiz: 8,
  },
  {
    name: "Git",
    quiz: 11,
  },
];

const Statistics = () => {
  // const topics = useContext(TopicsContext);

  // const data = topics.map((topic) => {
  //   const topicsData = { name: topic.name, quiz: topic.total };
  //   return topicsData;
  // });

  return (
    <div className="lg:p-8 p-3">
      <LineChart className="lg:mx-auto " width={500} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip></Tooltip>
        <Line
          type="monotone"
          dataKey="quiz"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default Statistics;
