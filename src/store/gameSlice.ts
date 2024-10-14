import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Player {
  name: string;
  points: number;
  score?: number;
  multiplier?: number;
  winningPoints?: number;
}

export interface GameState {
  currentPlayer: Player | null;
  bots: Player[];
  generatedNumber: number | null;
}

const initialGameState: GameState = {
  currentPlayer: null,
  bots: [],
  generatedNumber: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState: initialGameState,
  reducers: {
    addPlayer: (state, action: PayloadAction<Player>) => {
      if (!state.currentPlayer) {
        state.currentPlayer = {
          ...action.payload,
          points: 50,
          score: 1000,
          multiplier: 1.0,
          winningPoints: 0,
        };
      }

      const botNames = ["CPU 1", "CPU 2", "CPU 3", "CPU 4"];
      botNames.forEach((botName) => {
        const existingBot = state.bots.find((bot) => bot.name === botName);
        if (!existingBot) {
          state.bots.push({
            name: botName,
            points: 50,
            score: 1000,
            multiplier: Number((Math.random() * 10).toFixed(2)),
            winningPoints: 0,
          });
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
    setGeneratedNumber: (state, action: PayloadAction<number>) => {
      console.log("Setting generated number:", action.payload);
      state.generatedNumber = action.payload;
    },
    updateCurrentPlayerMultiplier: (state, action: PayloadAction<number>) => {
      if (state.currentPlayer) {
        state.currentPlayer.multiplier = action.payload;
      }
    },
    startGame: (state) => {
      const generatedNumber = state.generatedNumber;
      if (generatedNumber !== null) {
        if (state.currentPlayer) {
          if (generatedNumber < (state.currentPlayer.multiplier ?? 0)) {
            state.currentPlayer.winningPoints =
              state.currentPlayer.points *
              (state.currentPlayer.multiplier ?? 0);
          } else {
            state.currentPlayer.winningPoints = 0;
          }
        }

        state.bots.forEach((bot) => {
          if (generatedNumber < (bot.multiplier ?? 0)) {
            bot.winningPoints = bot.points * (bot.multiplier ?? 0);
          } else {
            bot.winningPoints = 0;
          }
        });
      }
    },
  },
});

export const {
  addPlayer,
  updatePlayerPoints,
  clearPlayer,
  setGeneratedNumber,
  updateCurrentPlayerMultiplier,
  startGame,
} = gameSlice.actions;

export default gameSlice.reducer;
