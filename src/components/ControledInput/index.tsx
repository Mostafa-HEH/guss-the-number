import "./controled-input.scss";

export type ControledInputProps = {
  label: string;
  value: number;
  handleUp: () => void;
  handleDown: () => void;
};

const ControledInput = ({
  label,
  value,
  handleUp,
  handleDown,
}: ControledInputProps) => {
  return (
    <div className="controled-input">
      <span className="form-label">{label}</span>
      <div className="field">
        <span className="action" onClick={handleDown}>
          ▼
        </span>
        <input type="number" value={value} className="form-textfield" />
        <span className="action" onClick={handleUp}>
          ▲
        </span>
      </div>
    </div>
  );
};

export default ControledInput;
