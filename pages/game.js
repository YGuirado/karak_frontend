import Header from '../components/Header';
import Map from '../components/Map';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Inventory from '../components/Inventory';
import Meeting from '../components/Meeting';
import React from 'react';

import styles from '../styles/Game.module.css';



function Game() {
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
