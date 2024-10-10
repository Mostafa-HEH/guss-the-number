"use client";

import GamePlay from "./game-play";
import UserBoard from "./user-board";

import "./game.scss";
import Ranking from "./ranking";
import Chat from "./chat";

const Game = () => {
  return (
    <main className="game">
      <section className="top-section">
        <UserBoard />
        <GamePlay />
      </section>
      <section className="bottom-section">
        <Ranking />
        <Chat />
      </section>
    </main>
  );
};

export default Game;
