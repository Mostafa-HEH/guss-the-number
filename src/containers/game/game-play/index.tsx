"use client";

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

import "./game-play.scss";
import Section from "@/components/Section";
import InfoBoard from "@/components/InfoBoard";

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
      <div className="game-play__user">
        <Section>
          <InfoBoard value={1000?.toLocaleString()} icon={<>🏅</>} />
        </Section>
        <Section>
          <InfoBoard value={"Mostafa"} icon={<>🧑</>} />
        </Section>
        <Section>
          <InfoBoard value={"21:30"} icon={<>⏱</>} />
        </Section>
      </div>
      <Section>
        <div className="chart">
          <div className="chart__value">0.00x</div>
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
      </Section>
    </div>
  );
};

export default GamePlay;
