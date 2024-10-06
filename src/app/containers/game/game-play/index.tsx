"use client";

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

import "./game-play.scss";

const GamePlay = () => {
  const data = [
    {
      pv: 0,
    },
    {
      pv: 3,
    },
    {
      pv: 3,
    },
    {
      pv: 5,
    },
    {
      pv: 9,
    },
    {
      pv: 8,
    },
    {
      pv: 8,
    },
    {
      pv: 9,
    },
    {
      pv: 8,
    },
    {
      pv: 8,
    },
    {
      pv: 8,
    },
  ];

  return (
    <div className="game-play">
      <div>
        <div className="info-board">
          <span>🏅</span>
          <span>1000</span>
        </div>
        <div className="info-board">
          <span>🧑</span>
          <span>sfddf</span>
        </div>
        <div className="info-board">
          <span>⏱</span>
          <span>21:30</span>
        </div>
      </div>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis stroke="#ccc" tick={{ fill: "#ccc" }} />
            <YAxis hide={true} />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#ff4500"
              strokeWidth={4}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GamePlay;
