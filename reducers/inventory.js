import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [
        {type: 'aderyn', powers:[null,null], tresor: 12.5, life: 1, weapons: [['sword', 2],[null, null]], key: 1, scroll: [['firescroll',1],[null, null],[null, null]] },
        {type: 'argentus', powers:[null,null], tresor: 10, life: 5, weapons: [['daggers',1],[null, null]], key: null, scroll: [[null, null],['firescroll',1],[null, null]] },
        {type: 'taia', powers:[null,null], tresor:8, life: 5, weapons: [['axe', 3],['sword', 2]], key: null, scroll: [['lifescroll',1],[null, null],[null, null]] },
        {type: 'horan', powers:[null,null], tresor: 11, life: 5, weapons: [[null, null],[null, null]], key: null, scroll: [[null, null],[null, null],[null, null]] },
      ],
};

export const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
    updateTresor: (state, action) => { 
        state.value[state.value.findIndex(e => e.type === action.payload)].tresor += 1;
    },
    updateTresorDragon: (state, action) => { 
        state.value[state.value.findIndex(e => e.type === action.payload)].tresor += 1.5;
    },
    useKey: (state, action) => { 
        state.value[state.value.findIndex(e => e.type === action.payload)].key = null;
    },
 },
});

export const { updateTresor, updateTresorDragon, useKey } = inventorySlice.actions;
export default inventorySlice.reducer;