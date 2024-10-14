import Section from "@/components/Section";

import "./registered.scss";
import { useState } from "react";
import ControledInput from "@/components/ControledInput";
import Table from "@/components/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  GameState,
  setGeneratedNumber,
  startGame,
  updateCurrentPlayerMultiplier,
} from "@/store/gameSlice";

const Registered = () => {
  const dispatch = useDispatch();
  const { bots, currentPlayer } = useSelector(
    (state: { game: GameState }) => state.game
  );
  const [multiplier, setMultiplier] = useState<number>(0);
  const [points, setPoints] = useState<number>(100);

  const handleStart = () => {
    const randomNumber = Number((Math.random() * 10).toFixed(2));
    dispatch(updateCurrentPlayerMultiplier(multiplier));
    dispatch(setGeneratedNumber(randomNumber));
    dispatch(startGame());
  };

  return (
    <>
      <div className="points">
        <Section>
          <ControledInput
            label="Points"
            value={points}
            setValue={setPoints}
            step={25}
          />
        </Section>
        <Section>
          <ControledInput
            label="Multiplier"
            value={multiplier}
            setValue={setMultiplier}
            step={0.25}
          />
        </Section>
      </div>
      <button className="btn btn-primary" onClick={handleStart}>
        start
      </button>
      <Section header="🏆 Current round">
        <Table
          header={["Name", "Point", "Multiplier"]}
          data={
            [{ ...currentPlayer, name: "You" }, ...bots]?.map((bot) => [
              bot?.name,
              bot?.points,
              bot?.multiplier,
            ]) as string[][]
          }
          focuseRow="You"
        />
      </Section>
      <Section header="⌛ Speed">
        <div className="speed">
          <input type="range" min={1} max={5} />
          <ul className="values">
            <li className="active">1x</li>
            <li>2x</li>
            <li>3x</li>
            <li>4x</li>
            <li>5x</li>
          </ul>
        </div>
      </Section>
    </>
  );
};

export default Registered;
