import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [
        {type: 'aderyn', powers:[null,null], tresor: 12.5, life: 1, weapons: ['sword',null], key: 1, scroll: ['magic_shot',null,null] },
        {type: 'argentus', powers:[null,null], tresor: 10, life: 5, weapons: ['daggers',null], key: null, scroll: [null,'magic_shot',null] },
        {type: 'taia', powers:[null,null], tresor:8, life: 5, weapons: [null,null], key: null, scroll: ['heal_portal',null,null] },
        {type: 'horan', powers:[null,null], tresor: 11, life: 5, weapons: ['axe',null], key: null, scroll: [null,null,null] },
      ],
};

export const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
    updateTresor: (state, action) => { 
        state.value[state.value.findIndex(e => e.type === action.payload)].tresor += 1;
    },
    useKey: (state, action) => { 
        state.value[state.value.findIndex(e => e.type === action.payload)].key = null;
    },
 },
});

export const { updateTresor, useKey } = inventorySlice.actions;
export default inventorySlice.reducer;