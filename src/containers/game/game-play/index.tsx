"use client";

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

import "./game-play.scss";
import Section from "@/components/Section";
import InfoBoard from "@/components/InfoBoard";
import { useSelector } from "react-redux";
import { GameState } from "@/store/gameSlice";
import { useEffect, useState } from "react";

const GamePlay = () => {
  const [currentTime, setCurrentTime] = useState<string | undefined>();
  const { currentPlayer, generatedNumber } = useSelector(
    (state: { game: GameState }) => state.game
  );
  const [data] = useState<{ value: number }[]>([
    { value: 0 },
    { value: 0 },
    { value: generatedNumber ?? 0 },
  ]);

  useEffect(() => {
    if (!currentPlayer) return;

    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const time = `${hours}:${minutes}`;
      setCurrentTime(time);
    };
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [currentPlayer]);

  return (
    <div className="game-play">
      <div className="game-play__user">
        <Section>
          <InfoBoard
            value={currentPlayer?.score?.toLocaleString()}
            icon={<>🏅</>}
          />
        </Section>
        <Section>
          <InfoBoard value={currentPlayer?.name} icon={<>🧑</>} />
        </Section>
        <Section>
          <InfoBoard value={currentTime} icon={<>⏱</>} />
        </Section>
      </div>
      <Section>
        <div className="chart">
          <div className="chart__value">{generatedNumber ?? "0.00"}x</div>
          {currentPlayer && (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis
                  stroke="#ccc"
                  tick={{ fill: "#ccc" }}
                  domain={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                />
                <YAxis hide={true} domain={[0, 10]} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#ff4500"
                  strokeWidth={4}
                  dot={false}
                  animationDuration={1000}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </Section>
    </div>
  );
};

export default GamePlay;
