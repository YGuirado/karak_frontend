import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
    value: [
        {type: 'aderyn', powers:[null,null], tresor: 0, life: 3, weapons: ['sword','sword'], key: 1, scroll: ['magic_shot','magic_shot','magic_shot'] },
        {type: 'argentus', powers:[null,null], tresor: 0, life: 5, weapons: ['daggers','daggers'], key: null, scroll: ['heal_portal','magic_shot',null] },
        {type: 'taia', powers:[null,null], tresor: 0, life: 5, weapons: [null,null], key: null, scroll: ['heal_portal','heal_portal','heal_portal'] },
        {type: 'horan', powers:[null,null], tresor: 0, life: 5, weapons: ['axe',null], key: null, scroll: [null,null,null] },
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
        const playerIndex = state.value[state.value.findIndex(e => e.type === action.payload.player)];
        
        if(action.payload.loot === 'heal_portal' || action.payload.loot === 'magic_shot'){    
          const emptySlotIndex = playerIndex.scroll.findIndex(scrolls => scrolls === null);
          if (emptySlotIndex !== -1) {
            playerIndex.scroll[emptySlotIndex] = action.payload.loot;
          } else if (playerIndex.scroll.every(scroll => scroll === 'heal_portal') && action.payload.loot === 'magic_shot'){
            playerIndex.scroll[0] = action.payload.loot;
          } else if (playerIndex.scroll.every(scroll => scroll === 'magic_shot') && action.payload.loot === 'heal_portal'){
            playerIndex.scroll[2] = action.payload.loot;
          } 
        } else if(action.payload.loot === 'key'){
            if (playerIndex.key === null) {
            playerIndex.key = action.payload.loot;
            }
        } else if(action.payload.loot === 'open_chest'){
            playerIndex.tresor += 1
        } else if(action.payload.loot === 'dragon_open_chest'){
            playerIndex.tresor += 1.5
        } else{
            const emptySlotIndex = playerIndex.weapons.findIndex(weapons => weapons === null);
              if (emptySlotIndex !== -1) {
              playerIndex.weapons[emptySlotIndex] = action.payload.loot;
            } else if(playerIndex.weapons[0] === 'daggers' && (action.payload.loot === 'sword' || action.payload.loot === 'axe')){
                playerIndex.weapons[0] = action.payload.loot;
            } else if(playerIndex.weapons[1] === 'daggers' && (action.payload.loot === 'sword' || action.payload.loot === 'axe')){
              playerIndex.weapons[1] = action.payload.loot;
            } else if(playerIndex.weapons[0] === 'sword' && action.payload.loot === 'axe'){
              playerIndex.weapons[0] = action.payload.loot;
            } else if(playerIndex.weapons[1] === 'sword' && action.payload.loot === 'axe'){
              playerIndex.weapons[1] = action.payload.loot;
            }
        }
      }
 },
});

export const { updateTresor, updateTresorDragon, useKey, updateInventory } = inventorySlice.actions;
export default inventorySlice.reducer;