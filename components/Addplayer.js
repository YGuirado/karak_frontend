import styles from '../styles/Home.module.css';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';




function Addplayer() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [nbrPlayers, setNbrPlayers] = useState();


  
 
  //const Players= 
  //tableau de joueurs usestate ([])
  //boucle for i 1 à >2 construire un composant <burger>

  return (
     <div className={styles.container}>


      <div className={styles.headerContainer}>
        <h1 className={styles.logoLetter}>K</h1>
        <p className={styles.headerText}>Joueurs chez moi</p>
      </div>

      <div className={styles.slidecontainer}>
        <input type="range" min="1" max="5" value="2" class="slider" 
        onChange={(e) => setNbrPlayers(e.target.value)} value={nbrPlayers}
        />
        <p>Value: <span>counter</span></p>
      </div>

      <div>
        <div className={styles.counterContainer}>
          <p>Nombre de peronnages différents qui jouent à tour de rôle sur le même écran</p>
        </div>

        <div className={styles.playersNames}>
          <div>
            <p>Joueur 1</p>
            <input onChange={(e) => setName1(e.target.value)} value={name1}
              className={styles.inputName} />
          </div>
          <div>
            <p>Joueur 2</p>
            <input onChange={(e) => setName2(e.target.value)} value={name2}
              className={styles.inputName} />
          </div>

          <div title="Valider"  >
            <button onClick={() => handleLaunchGame()} className={styles.joinBtn}><span>Valider</span></button>
          </div>
        </div>
      </div>



    </div>


  );
}

export default Addplayer;
