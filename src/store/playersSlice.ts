import { createSlice } from "@reduxjs/toolkit";

const initialPlayers = [
  { name: "CPU 1", points: 100, isBot: true },
  { name: "CPU 2", points: 100, isBot: true },
  { name: "CPU 3", points: 100, isBot: true },
  { name: "CPU 4", points: 100, isBot: true },
  { name: "CPU 5", points: 100, isBot: true },
];

const playersSlice = createSlice({
  name: "players",
  initialState: initialPlayers,
  reducers: {
    updatePoints: (state, action) => {
      const { name, points } = action.payload;
      const player = state.find((player) => player.name === name);
      if (player) {
        player.points = points;
      }
    },
    addUser: (state, action) => {
      const { name, points = 100 } = action.payload;
      const lastBotIndex = state
        .map((player) => player.isBot)
        .lastIndexOf(true);

      if (lastBotIndex !== -1) {
        state[lastBotIndex] = {
          name: name,
          points: points,
          isBot: false,
        };
      }
    },
  },
});

export const { updatePoints, addUser } = playersSlice.actions;

export default playersSlice.reducer;
