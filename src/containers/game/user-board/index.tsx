import "./user-board.scss";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "@/store/playersSlice";
import { useState } from "react";
import { socket } from "@/app/socket";

const UserBoard = () => {
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();
  const [newPlayerName, setNewPlayerName] = useState("");

  const handleAddUser = (e) => {
    e.preventDefault();
    socket.emit("set-user", newPlayerName);
    if (newPlayerName) {
      dispatch(addUser({ name: newPlayerName }));
      setNewPlayerName("");
    }
  };

  return (
    <div className="user-board">
      {JSON.stringify(players)}
      <form noValidate onSubmit={handleAddUser}>
        <input
          placeholder="Enter your name"
          onChange={(e) => setNewPlayerName(e.target.value)}
        />
        <button>Accept</button>
      </form>
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
