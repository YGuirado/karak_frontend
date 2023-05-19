import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id : '',
  playerName: [],
  gamecreator: false,
 }

export const gamesSlice = createSlice({
 name: 'games',

  initialState,
 reducers: {
   gameId: (state, action) => {
     state.id = action.payload;
     console.log(state.id);
   },

  AddPlayersNames: (state, action) => {
    state.playerName = action.payload;
  },

  setCreator: (state) => {
    state.gamecreator = true
  }

 },
});

export const { gameId, AddPlayersNames, setCreator } = gamesSlice.actions;
export default gamesSlice.reducer;