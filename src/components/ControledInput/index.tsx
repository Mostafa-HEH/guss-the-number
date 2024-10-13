import { Dispatch, SetStateAction } from "react";

import "./controled-input.scss";

export type ControledInputProps = {
  label: string;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  step?: number;
};

const ControledInput = ({
  label,
  value,
  setValue,
  step = 1,
}: ControledInputProps) => {
  return (
    <div className="controled-input">
      <span className="form-label">{label}</span>
      <div className="field">
        <span
          className="action"
          onClick={() => setValue((prev) => (prev > 0 ? prev - step : 0))}
        >
          ▼
        </span>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="form-textfield"
        />
        <span
          className="action"
          onClick={() => setValue((prev) => prev + step)}
        >
          ▲
        </span>
      </div>
    </div>
  );
};

export default ControledInput;
