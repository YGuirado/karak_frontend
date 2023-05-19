import styles from '../styles/ConfigGame.module.css';
import Link from 'next/link';
import React from 'react';
import { useState, } from 'react';
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router';
import { gameId } from '../reducers/games';



function Home() {
  const dispatch = useDispatch();
  const [joinGame, setJoinGame] = useState('');
  const router = useRouter()

  //au clic sur "créer une partie", la DB renvoie un iD dans le store redux"
  const handleNewGame = () => {
    fetch('http://localhost:3000/newGame')
      .then(response => response.json())
      .then(data => {
        if (data.result === true) {
          dispatch(gameId(data.id ));
          //ajouter navigation vers share URL

          //hook de route useRouter de next/router 
          router.push('/inviteplayers')
        } else {
          res.json({ result: false, error: 'Game cannot be lauched' });
        }
      });
  }
//Rejoindre une partie
  const handleJoinGame = () => {
    if (joinGame !== ""){}
    fetch('http://localhost:3000/joinGame', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: "id345" }),
    }).then(response => response.json())
      .then(data => {
        if (data.result === true) {
          //information de connexion à la DB pour mise à jour du compteur de joueurs du gameMaster ?
          dispatch(gameId({ id: "id" }));
          router.push('/addplayers')
        } else {
          res.json({ result: false, error: 'Game cannot be lauched' });
        }
      });
  };



  return (
    <div className={styles.container}>
      
        <div className={styles.logocontainer}>
          <img src="logo-karak.png" alt="Logo" className={styles.logo}/>
          <span className={styles.title}>
            Welcome to Karak!
          </span>
          <span className={styles.h2}>
            Jouez en famille ou entre amis, <br/> même à distance.
          </span>          
        </div>

        <div className={styles.launchGame}>  
            <button onClick={() => handleNewGame()} className={styles.largeBtn}>
              <span>Créer une partie</span>
            </button>
        </div>
        <div className={styles.joinGame}>            
              <input onChange={(e) => setJoinGame(e.target.value)} value={joinGame} className={styles.inputUrl} />              
              <button onClick={() => handleJoinGame()} className={styles.mediumBtn}><span>Rejoindre une partie</span></button>
         </div>
        

        <div title="Découvrir les règles ?"  >
          <button onClick={() => router.push('/regles_karak.pdf')} className={styles.mediumBtn}>
            <span>Découvrir les règles</span>
          </button>
        </div>
    </div>
  );
}

export default Home;
