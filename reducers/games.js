import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  playerNames_local: [],
  gamecreator: false,
  playerHeroeNames: [],
  game: {},
}

export const gamesSlice = createSlice({
  name: 'games',

  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
      console.log('REDUX Exit setID, state.id: ', state.id);
    },

    addPlayerNames_local: (state, action) => {
      // receive [ <player 1 name>, <player 2 name> ...], only local players
      // due to implementation and go back to addplayer 
      // it is better to add the players
      state.playerNames_local.push(...action.payload);
      // console.log('Exit AddPlayerNames, state.playerName: ', state.playerNames_local)
      console.log('REDUX Exit AddPlayerNames_local, state.playerName_local: ', current(state.playerNames_local))
    },

    setCreator: (state) => {
      state.gamecreator = true
      console.log('REDUX setCreator is called')
    },

    setPlayerHeroeNames: (state, action) => {
      // action.payload is an array of {username:..., heroe:...}
      state.playerHeroeNames = action.payload;
      console.log('REDUX Exit setPlayerHeroeNames, state.playerHeroeNames: ', state.playerHeroeNames);
    },

    setGame: (state, action) => {
      // receive in action.payload the object game : { _id: ..., gameStarted: ..., tiles: [...], players: [...]}
      state.game = action.payload
    },
  },
});

export const { setId, addPlayerNames_local, setCreator, setPlayerHeroeNames, setGame } = gamesSlice.actions;
export default gamesSlice.reducer;
