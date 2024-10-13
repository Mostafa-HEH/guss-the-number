import { useSelector } from "react-redux";

import NotRegistered from "./not-registered";
import Registered from "./registered";

import { GameState } from "@/store/gameSlice";

import "./user-board.scss";

const UserBoard = () => {
  const { currentPlayer } = useSelector(
    (state: { game: GameState }) => state.game
  );

  return (
    <div className="user-board">
      {currentPlayer ? <Registered /> : <NotRegistered />}
    </div>
  );
};

export default UserBoard;
