import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: {},
};

export const meetingSlice = createSlice({
    name: 'meeting',
    initialState,
    reducers: {
    pushMeet: (state, action) => {
        state.value = action.payload;
    },
 },
});

export const { pushMeet } = meetingSlice.actions;
export default meetingSlice.reducer;