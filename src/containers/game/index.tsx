"use client";

import GamePlay from "./game-play";
import UserBoard from "./user-board";

import "./game.scss";
import Ranking from "./ranking";
import Chat from "./chat";
import { Provider } from "react-redux";
import store from "@/store/store";
import Section from "@/components/Section";

const Game = () => {
  return (
    <Provider store={store}>
      <main className="game">
        <div className="top-section">
          <UserBoard />
          <GamePlay />
        </div>
        <div className="bottom-section">
          <Section header="📊 Ranking">
            <Ranking />
          </Section>
          <Section header="💬 Chat">
            <Chat />
          </Section>
        </div>
      </main>
    </Provider>
  );
};

export default Game;
