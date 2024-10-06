import "./user-board.scss";

const UserBoard = () => {
  return (
    <div className="user-board">
      <div className="points">
        <div className="controled-input">
          <div>Points</div>
          <input type="number" defaultValue={0} />
        </div>
        <div className="controled-input">
          <div>Multiplier</div>
          <input type="number" defaultValue={0} />
        </div>
      </div>
    </div>
  );
};

export default UserBoard;
