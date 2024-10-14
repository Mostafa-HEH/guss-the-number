import { ReactElement } from "react";

import "./info-board.scss";

export type InfoBoardTypes = {
  icon: ReactElement;
  value?: string;
};

const InfoBoard = ({ icon, value }: InfoBoardTypes) => {
  return (
    <div className="info-board">
      <span>{icon}</span>
      <span className="info-board__value">{value}</span>
    </div>
  );
};

export default InfoBoard;
