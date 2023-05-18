import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id : '',
  playerName: [],
 }

export const gamesSlice = createSlice({
 name: 'games',

  initialState,
 reducers: {
   gameId: (state, action) => {
     state.id = action.payload;
   },

  AddPlayersNames: (state, action) => {
    state.playerName = action.payload;
  },

 },
});

export const { gameId, AddPlayersNames } = gamesSlice.actions;
export default gamesSlice.reducer;