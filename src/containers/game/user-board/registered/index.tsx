import Section from "@/components/Section";

import "./registered.scss";
import { useState } from "react";
import ControledInput from "@/components/ControledInput";
import Table from "@/components/Table";

const Registered = () => {
  const [multiplier, setMultiplier] = useState<number>(0);
  const [points, setPoints] = useState<number>(100);

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
      <button className="btn btn-primary">start</button>
      <Section header="🏆 Current round">
        <Table
          header={["Name", "Point", "Multiplier"]}
          data={[
            ["You", "-", "-"],
            ["CPU 1", "-", "-"],
            ["CPU 2", "-", "-"],
            ["CPU 3", "-", "-"],
            ["CPU 4", "-", "-"],
          ]}
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
