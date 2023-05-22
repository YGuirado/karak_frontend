import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: {},
};

export const positionSlice = createSlice({
    name: 'position',
    initialState,
    reducers: {
    pushPosition: (state, action) => {
        state.value = action.payload
    },
 },
});

export const { pushPosition } = positionSlice.actions;
export default positionSlice.reducer;