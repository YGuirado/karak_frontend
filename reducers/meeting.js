import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
 value: [],
};

// [{{meeting}, coords, isResolved, isKeeped}]

export const meetingSlice = createSlice({
    name: 'meeting',
    initialState,
    reducers: {
    pushMeet: (state, action) => {
        if(state.value.length === 0 && action.payload?.meeting){
            state.value.push(action.payload);
        }else if(action.payload?.meeting){
            state.value.find(e => {
                if(e.coords !== action.payload.coords){
                    state.value.push(action.payload);
                }
            } ) ;
        }
        
    },
    updateMeet: (state, action) => {
        state.value.find(e => {
            if(e.coords === action.payload.coords){
                e.meeting = action.payload.meeting
                e.isResolved = action.payload.isResolved
                e.isSkiped = action.payload.isSkiped
            } 
        } ) ;
    },
    removeMeet: (state, action) => {
        console.log('removeMeet', current(state.value))
        console.log('removeMeet', action.payload)
        state.value.find((e,i) => {
            if(e.coords === action.payload.coords){
                //console.log('removeMeet', current(e))
                state.value.splice(i,1)
            } 
        } ) ;
    },

 },
});

export const { pushMeet, updateMeet, removeMeet } = meetingSlice.actions;
export default meetingSlice.reducer;