import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [
        {type: 'aderyn', powers:[null,null], tresor: 12.5, life: 1, weapons: ['sword',null], key: 1, scroll: ['fireScroll',null,null] },
        {type: 'argentus', powers:[null,null], tresor: 10, life: 5, weapons: ['daggers',null], key: null, scroll: [null,'firescroll',null] },
        {type: 'taia', powers:[null,null], tresor:8, life: 5, weapons: [null,null], key: null, scroll: ['lifescroll',null,null] },
        {type: 'horan', powers:[null,null], tresor: 11, life: 5, weapons: ['axe',null], key: null, scroll: [null,null,null] },
      ],
};

export const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
    updateInventory: (state, action) => { 
        state.value = action.payload;
    },
 },
});

export const { updateInventory } = inventorySlice.actions;
export default inventorySlice.reducer;