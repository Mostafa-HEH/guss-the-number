import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Player {
  name: string;
  points: number;
}

export interface GameState {
  currentPlayer: Player | null;
  bots: Player[];
}

const initialGameState: GameState = {
  currentPlayer: null,
  bots: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState: initialGameState,
  reducers: {
    addPlayer: (state, action: PayloadAction<Player>) => {
      if (!state.currentPlayer) {
        state.currentPlayer = { ...action.payload, points: 50 };
      }

      const botNames = ["Bot1", "Bot2", "Bot3", "Bot4"];
      botNames.forEach((botName) => {
        const existingBot = state.bots.find((bot) => bot.name === botName);
        if (!existingBot) {
          state.bots.push({ name: botName, points: 50 });
        }
      });
    },
    updatePlayerPoints: (
      state,
      action: PayloadAction<{ name: string; points: number }>
    ) => {
      if (
        state.currentPlayer &&
        state.currentPlayer.name === action.payload.name
      ) {
        state.currentPlayer.points = action.payload.points;
      }

      const bot = state.bots.find((bot) => bot.name === action.payload.name);
      if (bot) {
        bot.points = action.payload.points;
      }
    },
    clearPlayer: (state) => {
      state.currentPlayer = null;
      state.bots = [];
    },
  },
});

export const { addPlayer, updatePlayerPoints, clearPlayer } = gameSlice.actions;

export default gameSlice.reducer;
