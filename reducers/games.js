import { createSlice, current } from '@reduxjs/toolkit';

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
     console.log(state.id);
   },

  AddPlayersNames: (state, action) => {
    // receive [ <player 1 name>, <player 2 name> ...]
    // due to implementation and go back to addplayer 
    // it is better to add the players
    state.playerName.push(...action.payload);
    console.log('Exit AddPlayerNames, state.playerName: ', state.playerName)
    console.log('Exit AddPlayerNames, state.playerName: ', current(state.playerName))
  },

  setCreator: (state) => {
    state.gamecreator = true
  },

  setPlayerHeroeNames: (state, action) => {
    // action.payload is an array of {username:..., heroe:...}
    state.playerHeroeNames = action.payload;
    console.log('Exit setPlayerHeroeNames, state.playerHeroeNames: ', state.playerHeroeNames);
  },


 },
});

export const { gameId, AddPlayersNames, setCreator, setPlayerHeroeNames} = gamesSlice.actions;
export default gamesSlice.reducer;