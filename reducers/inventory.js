import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [
        {type: 'aderyn', powers:[null,null], tresor: 12.5, life: 3, weapons: ['sword','sword'], key: 1, scroll: ['magic_shot','magic_shot','magic_shot'] },
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
    updateTresorDragon: (state, action) => { 
        state.value[state.value.findIndex(e => e.type === action.payload)].tresor += 1.5;
    },
    useKey: (state, action) => { 
        state.value[state.value.findIndex(e => e.type === action.payload)].key = null;
    },
    updateInventory: (state, action) => {
        console.log(action.payload.loot)
        const playerIndex = state.value[state.value.findIndex(e => e.type === action.payload.player)]; 
        
        if(action.payload.loot === 'heal_portal' || action.payload.loot === 'magic_shot'){    
           const emptySlotIndex = playerIndex.scroll.findIndex(scrolls => scrolls === null);
           const slotChosed = action.payload.slotChosed;
           if (emptySlotIndex !== -1) {
            playerIndex.scroll[emptySlotIndex] = action.payload.loot;
          }
          else{
            playerIndex.scroll[slotChosed] = action.payload.loot;
          }
        }
        else if(action.payload.loot === 'key'){
           if (playerIndex.key === null) {
            playerIndex.key = action.payload.loot;
          }
        }
        else{
           const emptySlotIndex = playerIndex.weapons.findIndex(weapons => weapons === null);
           const slotChosed = action.payload.slotChosed;
           if (emptySlotIndex !== -1) {
            playerIndex.weapons[emptySlotIndex] = action.payload.loot;
          }
          else{
            playerIndex.weapons[slotChosed] = action.payload.loot;
          }
        }
        }
    
 },
});

export const { updateTresor, updateTresorDragon, useKey, updateInventory } = inventorySlice.actions;
export default inventorySlice.reducer;