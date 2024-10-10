"use client";

import GamePlay from "./game-play";
import UserBoard from "./user-board";

import "./game.scss";
import Ranking from "./ranking";
import Chat from "./chat";
import { Provider } from "react-redux";
import store from "@/store/store";

const Game = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default Game;
