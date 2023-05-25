import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  playerNames_local: [],
  gamecreator: false,
  playerHeroeNames: [],
  game: {
    "_id": "646f046920e995a47c6be12e",
    "gameStarted": false,
    "creationDate": "2023-05-25T06:47:05.355Z",
    "tiles": [
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade987",
          "type": "start",
          "specificity": "fountain",
          "data": [
            1,
            1,
            1,
            1
          ],
          "img": "/tiles/start_fountain-1111.png"
        },
        "rotation": 0,
        "isRotate": true,
        "isPlayed": "20;20",
        "meeting": null,
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be12f"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade98d",
          "type": "angle",
          "specificity": "fountain",
          "data": [
            1,
            1,
            0,
            0
          ],
          "img": "/tiles/angle_fountain-1100.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": null,
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be130"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9b3",
          "type": "cross",
          "specificity": "basic",
          "data": [
            1,
            1,
            1,
            1
          ],
          "img": "/tiles/cross-1111.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": null,
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be131"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9a5",
          "type": "corridor",
          "specificity": "room",
          "data": [
            1,
            0,
            1,
            0
          ],
          "img": "/tiles/corridor_room-1010.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9f1",
          "mob": "key_keeper",
          "strength": 8,
          "loot": "key",
          "value": 0
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be132"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9cf",
          "type": "te",
          "specificity": "room",
          "data": [
            1,
            0,
            1,
            1
          ],
          "img": "/tiles/te_room-1011.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407adea0a",
          "mob": "closed_chest",
          "strength": 0,
          "loot": "open_chest",
          "value": 1
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be133"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9be",
          "type": "cross",
          "specificity": "room",
          "data": [
            1,
            1,
            1,
            1
          ],
          "img": "/tiles/cross_room-1111.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9d8",
          "mob": "rat",
          "strength": 5,
          "loot": "daggers",
          "value": 1
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be134"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9b7",
          "type": "cross",
          "specificity": "room",
          "data": [
            1,
            1,
            1,
            1
          ],
          "img": "/tiles/cross_room-1111.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9fd",
          "mob": "skeleton_king",
          "strength": 10,
          "loot": "axe",
          "value": 3
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be135"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9d4",
          "type": "te",
          "specificity": "room",
          "data": [
            1,
            0,
            1,
            1
          ],
          "img": "/tiles/te_room-1011.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9f2",
          "mob": "key_keeper",
          "strength": 8,
          "loot": "key",
          "value": 0
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be136"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9d2",
          "type": "te",
          "specificity": "room",
          "data": [
            1,
            0,
            1,
            1
          ],
          "img": "/tiles/te_room-1011.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9e1",
          "mob": "giant_spider",
          "strength": 6,
          "loot": "heal_portal",
          "value": 0
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be137"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade99b",
          "type": "corridor",
          "specificity": "basic",
          "data": [
            1,
            0,
            1,
            0
          ],
          "img": "/tiles/corridor-1010.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": null,
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be138"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9c3",
          "type": "cross",
          "specificity": "room",
          "data": [
            1,
            1,
            1,
            1
          ],
          "img": "/tiles/cross_room-1111.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9ef",
          "mob": "key_keeper",
          "strength": 8,
          "loot": "key",
          "value": 0
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be139"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9b4",
          "type": "cross",
          "specificity": "basic",
          "data": [
            1,
            1,
            1,
            1
          ],
          "img": "/tiles/cross-1111.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": null,
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be13a"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9b9",
          "type": "cross",
          "specificity": "room",
          "data": [
            1,
            1,
            1,
            1
          ],
          "img": "/tiles/cross_room-1111.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9e3",
          "mob": "giant_spider",
          "strength": 6,
          "loot": "heal_portal",
          "value": 0
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be13b"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade98c",
          "type": "angle",
          "specificity": "fountain",
          "data": [
            1,
            1,
            0,
            0
          ],
          "img": "/tiles/angle_fountain-1100.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": null,
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be13c"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9cb",
          "type": "te",
          "specificity": "room",
          "data": [
            1,
            0,
            1,
            1
          ],
          "img": "/tiles/te_room-1011.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9f4",
          "mob": "key_keeper",
          "strength": 8,
          "loot": "key",
          "value": 0
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be13d"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9af",
          "type": "corridor",
          "specificity": "portal",
          "data": [
            1,
            0,
            1,
            0
          ],
          "img": "/tiles/corridor_portal-1010.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": null,
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be13e"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9b2",
          "type": "cross",
          "specificity": "basic",
          "data": [
            1,
            1,
            1,
            1
          ],
          "img": "/tiles/cross-1111.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": null,
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be13f"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade99c",
          "type": "corridor",
          "specificity": "basic",
          "data": [
            1,
            0,
            1,
            0
          ],
          "img": "/tiles/corridor-1010.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": null,
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be140"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9d0",
          "type": "te",
          "specificity": "room",
          "data": [
            1,
            0,
            1,
            1
          ],
          "img": "/tiles/te_room-1011.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9e6",
          "mob": "mummy",
          "strength": 7,
          "loot": "magic_shot",
          "value": 0
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be141"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9bb",
          "type": "cross",
          "specificity": "room",
          "data": [
            1,
            1,
            1,
            1
          ],
          "img": "/tiles/cross_room-1111.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9eb",
          "mob": "mummy",
          "strength": 7,
          "loot": "magic_shot",
          "value": 0
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be142"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9ae",
          "type": "corridor",
          "specificity": "portal",
          "data": [
            1,
            0,
            1,
            0
          ],
          "img": "/tiles/corridor_portal-1010.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": null,
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be143"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9a6",
          "type": "corridor",
          "specificity": "room",
          "data": [
            1,
            0,
            1,
            0
          ],
          "img": "/tiles/corridor_room-1010.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407adea02",
          "mob": "dragon",
          "strength": 15,
          "loot": "dragon_open_chest",
          "value": 1.5
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be144"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9a4",
          "type": "corridor",
          "specificity": "room",
          "data": [
            1,
            0,
            1,
            0
          ],
          "img": "/tiles/corridor_room-1010.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9ea",
          "mob": "mummy",
          "strength": 7,
          "loot": "magic_shot",
          "value": 0
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be145"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9a2",
          "type": "corridor",
          "specificity": "room",
          "data": [
            1,
            0,
            1,
            0
          ],
          "img": "/tiles/corridor_room-1010.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9e8",
          "mob": "mummy",
          "strength": 7,
          "loot": "magic_shot",
          "value": 0
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be146"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9ac",
          "type": "corridor",
          "specificity": "portal",
          "data": [
            1,
            0,
            1,
            0
          ],
          "img": "/tiles/corridor_portal-1010.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": null,
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be147"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade995",
          "type": "angle",
          "specificity": "room",
          "data": [
            1,
            0,
            0,
            1
          ],
          "img": "/tiles/angle_room-1001.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9d9",
          "mob": "rat",
          "strength": 5,
          "loot": "daggers",
          "value": 1
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be148"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9d6",
          "type": "te",
          "specificity": "room",
          "data": [
            1,
            0,
            1,
            1
          ],
          "img": "/tiles/te_room-1011.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407adea07",
          "mob": "closed_chest",
          "strength": 0,
          "loot": "open_chest",
          "value": 1
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be149"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade996",
          "type": "angle",
          "specificity": "room",
          "data": [
            1,
            0,
            0,
            1
          ],
          "img": "/tiles/angle_room-1001.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9fe",
          "mob": "skeleton_king",
          "strength": 10,
          "loot": "axe",
          "value": 3
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be14a"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade99a",
          "type": "angle",
          "specificity": "room",
          "data": [
            1,
            0,
            0,
            1
          ],
          "img": "/tiles/angle_room-1001.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407adea01",
          "mob": "ghost",
          "strength": 12,
          "loot": "open_chest",
          "value": 1
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be14b"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9b1",
          "type": "cross",
          "specificity": "basic",
          "data": [
            1,
            1,
            1,
            1
          ],
          "img": "/tiles/cross-1111.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": null,
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be14c"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9b0",
          "type": "cross",
          "specificity": "basic",
          "data": [
            1,
            1,
            1,
            1
          ],
          "img": "/tiles/cross-1111.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": null,
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be14d"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9a9",
          "type": "corridor",
          "specificity": "room",
          "data": [
            1,
            0,
            1,
            0
          ],
          "img": "/tiles/corridor_room-1010.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9f8",
          "mob": "swordsman",
          "strength": 9,
          "loot": "sword",
          "value": 2
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be14e"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9c6",
          "type": "te",
          "specificity": "basic",
          "data": [
            1,
            0,
            1,
            1
          ],
          "img": "/tiles/te-1011.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": null,
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be14f"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9ca",
          "type": "te",
          "specificity": "room",
          "data": [
            1,
            0,
            1,
            1
          ],
          "img": "/tiles/te_room-1011.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407adea06",
          "mob": "closed_chest",
          "strength": 0,
          "loot": "open_chest",
          "value": 1
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be150"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade992",
          "type": "angle",
          "specificity": "room",
          "data": [
            1,
            0,
            0,
            1
          ],
          "img": "/tiles/angle_room-1001.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9ec",
          "mob": "key_keeper",
          "strength": 8,
          "loot": "key",
          "value": 0
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be151"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9bc",
          "type": "cross",
          "specificity": "room",
          "data": [
            1,
            1,
            1,
            1
          ],
          "img": "/tiles/cross_room-1111.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9e7",
          "mob": "mummy",
          "strength": 7,
          "loot": "magic_shot",
          "value": 0
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be152"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9cc",
          "type": "te",
          "specificity": "room",
          "data": [
            1,
            0,
            1,
            1
          ],
          "img": "/tiles/te_room-1011.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9e0",
          "mob": "giant_spider",
          "strength": 6,
          "loot": "heal_portal",
          "value": 0
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be153"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade99f",
          "type": "corridor",
          "specificity": "room",
          "data": [
            1,
            0,
            1,
            0
          ],
          "img": "/tiles/corridor_room-1010.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9da",
          "mob": "rat",
          "strength": 5,
          "loot": "daggers",
          "value": 1
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be154"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9a1",
          "type": "corridor",
          "specificity": "room",
          "data": [
            1,
            0,
            1,
            0
          ],
          "img": "/tiles/corridor_room-1010.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9ee",
          "mob": "key_keeper",
          "strength": 8,
          "loot": "key",
          "value": 0
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be155"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9a8",
          "type": "corridor",
          "specificity": "room",
          "data": [
            1,
            0,
            1,
            0
          ],
          "img": "/tiles/corridor_room-1010.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407adea0c",
          "mob": "closed_chest",
          "strength": 0,
          "loot": "open_chest",
          "value": 1
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be156"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9bf",
          "type": "cross",
          "specificity": "room",
          "data": [
            1,
            1,
            1,
            1
          ],
          "img": "/tiles/cross_room-1111.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407adea04",
          "mob": "closed_chest",
          "strength": 0,
          "loot": "open_chest",
          "value": 1
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be157"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9c0",
          "type": "cross",
          "specificity": "room",
          "data": [
            1,
            1,
            1,
            1
          ],
          "img": "/tiles/cross_room-1111.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9db",
          "mob": "rat",
          "strength": 5,
          "loot": "daggers",
          "value": 1
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be158"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9a0",
          "type": "corridor",
          "specificity": "room",
          "data": [
            1,
            0,
            1,
            0
          ],
          "img": "/tiles/corridor_room-1010.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9f0",
          "mob": "key_keeper",
          "strength": 8,
          "loot": "key",
          "value": 0
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be159"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade98e",
          "type": "angle",
          "specificity": "room",
          "data": [
            1,
            0,
            0,
            1
          ],
          "img": "/tiles/angle_room-1001.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9f9",
          "mob": "swordsman",
          "strength": 9,
          "loot": "sword",
          "value": 2
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be15a"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade997",
          "type": "angle",
          "specificity": "room",
          "data": [
            1,
            0,
            0,
            1
          ],
          "img": "/tiles/angle_room-1001.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407adea05",
          "mob": "closed_chest",
          "strength": 0,
          "loot": "open_chest",
          "value": 1
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be15b"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9a3",
          "type": "corridor",
          "specificity": "room",
          "data": [
            1,
            0,
            1,
            0
          ],
          "img": "/tiles/corridor_room-1010.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9de",
          "mob": "rat",
          "strength": 5,
          "loot": "daggers",
          "value": 1
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be15c"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9ce",
          "type": "te",
          "specificity": "room",
          "data": [
            1,
            0,
            1,
            1
          ],
          "img": "/tiles/te_room-1011.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9e4",
          "mob": "mummy",
          "strength": 7,
          "loot": "magic_shot",
          "value": 0
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be15d"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9c9",
          "type": "te",
          "specificity": "basic",
          "data": [
            1,
            0,
            1,
            1
          ],
          "img": "/tiles/te-1011.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": null,
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be15e"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade99d",
          "type": "corridor",
          "specificity": "basic",
          "data": [
            1,
            0,
            1,
            0
          ],
          "img": "/tiles/corridor-1010.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": null,
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be15f"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9aa",
          "type": "corridor",
          "specificity": "room",
          "data": [
            1,
            0,
            1,
            0
          ],
          "img": "/tiles/corridor_room-1010.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9f6",
          "mob": "key_keeper",
          "strength": 8,
          "loot": "key",
          "value": 0
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be160"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9c5",
          "type": "te",
          "specificity": "basic",
          "data": [
            1,
            0,
            1,
            1
          ],
          "img": "/tiles/te-1011.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": null,
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be161"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9cd",
          "type": "te",
          "specificity": "room",
          "data": [
            1,
            0,
            1,
            1
          ],
          "img": "/tiles/te_room-1011.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9f5",
          "mob": "key_keeper",
          "strength": 8,
          "loot": "key",
          "value": 0
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be162"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9c1",
          "type": "cross",
          "specificity": "room",
          "data": [
            1,
            1,
            1,
            1
          ],
          "img": "/tiles/cross_room-1111.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407adea00",
          "mob": "ghost",
          "strength": 12,
          "loot": "open_chest",
          "value": 1
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be163"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9ad",
          "type": "corridor",
          "specificity": "portal",
          "data": [
            1,
            0,
            1,
            0
          ],
          "img": "/tiles/corridor_portal-1010.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": null,
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be164"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9c7",
          "type": "te",
          "specificity": "basic",
          "data": [
            1,
            0,
            1,
            1
          ],
          "img": "/tiles/te-1011.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": null,
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be165"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade991",
          "type": "angle",
          "specificity": "room",
          "data": [
            1,
            0,
            0,
            1
          ],
          "img": "/tiles/angle_room-1001.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407adea0b",
          "mob": "closed_chest",
          "strength": 0,
          "loot": "open_chest",
          "value": 1
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be166"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9d3",
          "type": "te",
          "specificity": "room",
          "data": [
            1,
            0,
            1,
            1
          ],
          "img": "/tiles/te_room-1011.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9dc",
          "mob": "rat",
          "strength": 5,
          "loot": "daggers",
          "value": 1
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be167"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade990",
          "type": "angle",
          "specificity": "room",
          "data": [
            1,
            0,
            0,
            1
          ],
          "img": "/tiles/angle_room-1001.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9e2",
          "mob": "giant_spider",
          "strength": 6,
          "loot": "heal_portal",
          "value": 0
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be168"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade988",
          "type": "angle",
          "specificity": "basic",
          "data": [
            1,
            1,
            0,
            0
          ],
          "img": "/tiles/angle-1100.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": null,
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be169"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9a7",
          "type": "corridor",
          "specificity": "room",
          "data": [
            1,
            0,
            1,
            0
          ],
          "img": "/tiles/corridor_room-1010.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9fc",
          "mob": "swordsman",
          "strength": 9,
          "loot": "sword",
          "value": 2
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be16a"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade98b",
          "type": "angle",
          "specificity": "basic",
          "data": [
            1,
            1,
            0,
            0
          ],
          "img": "/tiles/angle-1100.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": null,
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be16b"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade993",
          "type": "angle",
          "specificity": "room",
          "data": [
            1,
            0,
            0,
            1
          ],
          "img": "/tiles/angle_room-1001.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9e5",
          "mob": "mummy",
          "strength": 7,
          "loot": "magic_shot",
          "value": 0
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be16c"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade98a",
          "type": "angle",
          "specificity": "basic",
          "data": [
            1,
            1,
            0,
            0
          ],
          "img": "/tiles/angle-1100.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": null,
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be16d"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9c4",
          "type": "cross",
          "specificity": "room",
          "data": [
            1,
            1,
            1,
            1
          ],
          "img": "/tiles/cross_room-1111.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9df",
          "mob": "rat",
          "strength": 5,
          "loot": "daggers",
          "value": 1
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be16e"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9b6",
          "type": "cross",
          "specificity": "basic",
          "data": [
            1,
            1,
            1,
            1
          ],
          "img": "/tiles/cross-1111.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": null,
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be16f"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade998",
          "type": "angle",
          "specificity": "room",
          "data": [
            1,
            0,
            0,
            1
          ],
          "img": "/tiles/angle_room-1001.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407adea09",
          "mob": "closed_chest",
          "strength": 0,
          "loot": "open_chest",
          "value": 1
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be170"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9ab",
          "type": "corridor",
          "specificity": "room",
          "data": [
            1,
            0,
            1,
            0
          ],
          "img": "/tiles/corridor_room-1010.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9ff",
          "mob": "skeleton_king",
          "strength": 10,
          "loot": "axe",
          "value": 3
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be171"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade99e",
          "type": "corridor",
          "specificity": "basic",
          "data": [
            1,
            0,
            1,
            0
          ],
          "img": "/tiles/corridor-1010.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": null,
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be172"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9b8",
          "type": "cross",
          "specificity": "room",
          "data": [
            1,
            1,
            1,
            1
          ],
          "img": "/tiles/cross_room-1111.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9f7",
          "mob": "key_keeper",
          "strength": 8,
          "loot": "key",
          "value": 0
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be173"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade98f",
          "type": "angle",
          "specificity": "room",
          "data": [
            1,
            0,
            0,
            1
          ],
          "img": "/tiles/angle_room-1001.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407adea03",
          "mob": "closed_chest",
          "strength": 0,
          "loot": "open_chest",
          "value": 1
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be174"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9c2",
          "type": "cross",
          "specificity": "room",
          "data": [
            1,
            1,
            1,
            1
          ],
          "img": "/tiles/cross_room-1111.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9fb",
          "mob": "swordsman",
          "strength": 9,
          "loot": "sword",
          "value": 2
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be175"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade989",
          "type": "angle",
          "specificity": "basic",
          "data": [
            1,
            1,
            0,
            0
          ],
          "img": "/tiles/angle-1100.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": null,
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be176"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade999",
          "type": "angle",
          "specificity": "room",
          "data": [
            1,
            0,
            0,
            1
          ],
          "img": "/tiles/angle_room-1001.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407adea08",
          "mob": "closed_chest",
          "strength": 0,
          "loot": "open_chest",
          "value": 1
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be177"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9ba",
          "type": "cross",
          "specificity": "room",
          "data": [
            1,
            1,
            1,
            1
          ],
          "img": "/tiles/cross_room-1111.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9e9",
          "mob": "mummy",
          "strength": 7,
          "loot": "magic_shot",
          "value": 0
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be178"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9d5",
          "type": "te",
          "specificity": "room",
          "data": [
            1,
            0,
            1,
            1
          ],
          "img": "/tiles/te_room-1011.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9dd",
          "mob": "rat",
          "strength": 5,
          "loot": "daggers",
          "value": 1
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be179"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9bd",
          "type": "cross",
          "specificity": "room",
          "data": [
            1,
            1,
            1,
            1
          ],
          "img": "/tiles/cross_room-1111.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9ed",
          "mob": "key_keeper",
          "strength": 8,
          "loot": "key",
          "value": 0
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be17a"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9c8",
          "type": "te",
          "specificity": "basic",
          "data": [
            1,
            0,
            1,
            1
          ],
          "img": "/tiles/te-1011.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": null,
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be17b"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9d1",
          "type": "te",
          "specificity": "room",
          "data": [
            1,
            0,
            1,
            1
          ],
          "img": "/tiles/te_room-1011.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9f3",
          "mob": "key_keeper",
          "strength": 8,
          "loot": "key",
          "value": 0
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be17c"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade9b5",
          "type": "cross",
          "specificity": "basic",
          "data": [
            1,
            1,
            1,
            1
          ],
          "img": "/tiles/cross-1111.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": null,
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be17d"
      },
      {
        "tile": {
          "_id": "646b4ff7f17a77f407ade994",
          "type": "angle",
          "specificity": "room",
          "data": [
            1,
            0,
            0,
            1
          ],
          "img": "/tiles/angle_room-1001.png"
        },
        "rotation": 0,
        "isRotate": false,
        "isPlayed": null,
        "meeting": {
          "_id": "646b5047f17a77f407ade9fa",
          "mob": "swordsman",
          "strength": 9,
          "loot": "sword",
          "value": 2
        },
        "issue": false,
        "players": [],
        "_id": "646f046920e995a47c6be17e"
      }
    ],
    "players": [
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
    "__v": 0
  },
}

export const gamesSlice = createSlice({
  name: 'games',

  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
      console.log('REDUX Exit setID, state.id: ', state.id);
    },

    addPlayerNames_local: (state, action) => {
      // receive [ <player 1 name>, <player 2 name> ...], only local players
      // due to implementation and go back to addplayer 
      // it is better to add the players
      state.playerNames_local.push(...action.payload);
      // console.log('Exit AddPlayerNames, state.playerName: ', state.playerNames_local)
      console.log('REDUX Exit AddPlayerNames_local, state.playerName_local: ', current(state.playerNames_local))
    },

    setCreator: (state) => {
      state.gamecreator = true
      console.log('REDUX setCreator is called')
    },

    setPlayerHeroeNames: (state, action) => {
      // action.payload is an array of {username:..., heroe:...}
      state.playerHeroeNames = action.payload;
      console.log('REDUX Exit setPlayerHeroeNames, state.playerHeroeNames: ', state.playerHeroeNames);
    },

    setGame: (state, action) => {
      // receive in action.payload the object game : { _id: ..., gameStarted: ..., tiles: [...], players: [...]}
      state.game = action.payload
    },
  },
});

export const { setId, addPlayerNames_local, setCreator, setPlayerHeroeNames, setGame } = gamesSlice.actions;
export default gamesSlice.reducer;
