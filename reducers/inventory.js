import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
    value: [
      {
        "player": {
          "_id": "646b4fe7f17a77f407ade982",
          "name": "Aderyn",
          "powers": [
            "attack_from_behind",
            "crawled_walk"
          ]
        },
        "type": "Aderyn",
        "username": "",
        "turn": false,
        "life": 5,
        "weapons": [
          null,
          null
        ],
        "key": null,
        "scroll": [
          null,
          null,
          null
        ],
        "treasure": 0,
        "malediction": false,
        "coords": "20;20",
        "prevCoords": "20;20",
        "_id": "646f046920e995a47c6be17f"
      },
      {
        "player": {
          "_id": "646b4fe7f17a77f407ade981",
          "name": "Horan",
          "powers": [
            "double_attack",
            "reincarnation"
          ]
        },
        "type": "Horan",
        "username": "",
        "turn": false,
        "life": 5,
        "weapons": [
          null,
          null
        ],
        "key": null,
        "scroll": [
          null,
          null,
          null
        ],
        "treasure": 0,
        "malediction": false,
        "coords": "20;20",
        "prevCoords": "20;20",
        "_id": "646f046920e995a47c6be180"
      },
      {
        "player": {
          "_id": "646b4fe7f17a77f407ade983",
          "name": "Lord-Xanros",
          "powers": [
            "Sacrifice",
            "Substitution"
          ]
        },
        "type": "Lord-Xanros",
        "username": "",
        "turn": false,
        "life": 5,
        "weapons": [
          null,
          null
        ],
        "key": null,
        "scroll": [
          null,
          null,
          null
        ],
        "treasure": 0,
        "malediction": false,
        "coords": "20;20",
        "prevCoords": "20;20",
        "_id": "646f046920e995a47c6be181"
      },
      {
        "player": {
          "_id": "646b4fe7f17a77f407ade985",
          "name": "Taia",
          "powers": [
            "premonition",
            "fate_weaver"
          ]
        },
        "type": "Taia",
        "username": "",
        "turn": false,
        "life": 5,
        "weapons": [
          null,
          null
        ],
        "key": null,
        "scroll": [
          null,
          null,
          null
        ],
        "treasure": 0,
        "malediction": false,
        "coords": "20;20",
        "prevCoords": "20;20",
        "_id": "646f046920e995a47c6be182"
      },
      {
        "player": {
          "_id": "646b4fe7f17a77f407ade984",
          "name": "Victorius",
          "powers": [
            "combat_trainer",
            "unstoppable"
          ]
        },
        "type": "Victorius",
        "username": "",
        "turn": false,
        "life": 5,
        "weapons": [
          null,
          null
        ],
        "key": null,
        "scroll": [
          null,
          null,
          null
        ],
        "treasure": 0,
        "malediction": false,
        "coords": "20;20",
        "prevCoords": "20;20",
        "_id": "646f046920e995a47c6be183"
      }
    ],
};

// {type: 'aderyn', powers:[null,null], tresor: 0, life: 3, weapons: ['sword','sword'], key: 1, scroll: ['magic_shot','magic_shot','magic_shot'] },
// {type: 'argentus', powers:[null,null], tresor: 0, life: 5, weapons: ['daggers','daggers'], key: null, scroll: ['heal_portal','magic_shot',null] },
// {type: 'taia', powers:[null,null], tresor: 0, life: 5, weapons: [null,null], key: null, scroll: ['heal_portal','heal_portal','heal_portal'] },
// {type: 'horan', powers:[null,null], tresor: 0, life: 5, weapons: ['axe',null], key: null, scroll: [null,null,null] },

export const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
    initInventory: (state, action) => { 
      console.log(action.payload)
      state.value = action.payload
    },
    looseLife: (state, action) => { 
      if(state.value[state.value.findIndex(e => e.type === action.payload)].life > 0){
        state.value[state.value.findIndex(e => e.type === action.payload)].life -= 1;
      }
    },
    restoreLife: (state, action) => { 
        state.value[state.value.findIndex(e => e.type === action.payload)].life = 5;
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
            playerIndex.treasure += 1
        } else if(action.payload.loot === 'dragon_open_chest'){
            playerIndex.treasure += 1.5
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

export const { initInventory, updateTresor, updateTresorDragon, useKey, updateInventory, looseLife, restoreLife } = inventorySlice.actions;
export default inventorySlice.reducer;