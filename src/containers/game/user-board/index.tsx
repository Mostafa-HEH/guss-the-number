import NotRegistered from "./not-registered";
import Registered from "./registered";

import "./user-board.scss";

const UserBoard = () => {
  return (
    <div className="user-board">
      {/* <NotRegistered /> */}
      <Registered />
    </div>
  );
};

export default UserBoard;
