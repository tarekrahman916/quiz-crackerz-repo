// import React, { useContext } from "react";
import { TopicsContext } from "../../layout/Main";
import React, { PureComponent, useContext } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  ReferenceLine,
} from "recharts";

const Statistics = () => {
  const topics = useContext(TopicsContext);

  const data = topics.map((topic) => {
    const topicsData = { name: topic.name, quiz: topic.total };
    return topicsData;
  });

  return (
    <div className="lg:w-9/12 mx-auto">
      <ResponsiveContainer className="mx-auto" width="90%" height={400}>
        <AreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
          <ReferenceLine
            y={4000}
            label="Max"
            stroke="red"
            strokeDasharray="3 3"
          />
          <Area
            type="monotone"
            dataKey="quiz"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
