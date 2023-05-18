import styles from '../styles/Header.module.css';
import React from 'react';



function Header() {

  return (
    <div>
        <div className={styles.player}>
            Joueur 1
        </div>
        <div className={styles.tour}>
            Tour 1 / Deplacement 0/4
            <hr style={{border: '3px solid green'}}></hr>
        </div>
        <div className={styles.info}>
            Clique sur la tuile ou tu veux te déplacer
        </div>
    </div>
  );
}

export default Header;
