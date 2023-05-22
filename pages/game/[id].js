import Header from '../../components/Header';
import Map from '../../components/Map';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Inventory from '../../components/Inventory';
import Meeting from '../../components/Meeting';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import styles from '../../styles/Game.module.css';

function Game() {
  
  const game_in_store = useSelector((state) => state.games.game);
  const local_users = useSelector((state) => state.games.playerNames_local);
  useEffect( () => {
    console.log('game in store before playing: ', game_in_store)
    console.log('local user: ', local_users)
  }, [])

  return (
    <div className={styles.container}>
      <Meeting/>
        <div className={styles.header}>
            <Header />
        </div>
        <div className={styles.map}>
            <Map />
        </div>
        <div className={styles.inventory}>
            <Inventory />
        </div>
    </div>
  );
}

export default Game;
