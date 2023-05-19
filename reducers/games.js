import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id : '',
  playerName: [],
  gamecreator: false,
  playerHeroeNames: [],
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

  setCreator: (state) => {
    state.gamecreator = true
  },

  AddPlayerHeroeNames: (state, action) => {
    // action.payload is an array of {username:..., heroe:...}
    state.playerHeroeNames = action.payload;
    console.log('Exit AddPlayerHeroeNames, state.playerHeroeNames: ', state.playerHeroeNames);
  },


 },
});

export const { gameId, AddPlayersNames, setCreator, AddPlayerHeroeNames} = gamesSlice.actions;
export default gamesSlice.reducer;