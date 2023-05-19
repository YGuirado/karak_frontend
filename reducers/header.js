import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: {},
};

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
    pushInfo: (state, action) => {
        state.value = action.payload;
    },
    updateMsg: (state, action) => {
        state.value.msg = action.payload;
    },
 },
});

export const { pushInfo, updateMsg } = headerSlice.actions;
export default headerSlice.reducer;