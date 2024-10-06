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
      <button>start</button>
      <table>
        <tr>
          <th>Name</th>
          <th>Point</th>
          <th>Multiplier</th>
        </tr>
        <tr>
          <td>You</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>CPU 1</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>CPU 2</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>CPU 3</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>CPU 4</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </table>
      <input type="range" min={1} max={5} />
    </div>
  );
};

export default UserBoard;
