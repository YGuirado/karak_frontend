import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: [],
};

export const gamesSlice = createSlice({
 name: 'games',

  initialState,
 reducers: {
   addNewGame: (state, action) => {
     state.value.push(action.payload);
   },
   joinAGame: (state, action) => {
    state.value.push(action.payload);
  },

  AddPlayersNames: (state, action) => {
    state.value.push(action.payload);
  },

 },
});

export const { addNewGame,joinAGame, AddPlayersNames  } = gamesSlice.actions;
export default gamesSlice.reducer;