import styles from '../styles/Home.module.css';
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
          dispatch(gameId({ id: data.game.id }));
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
          <img src="logo-karak.png" alt="Logo" className={styles.logo} />
          <h1 className={styles.title}>
            Welcome to Karak!
          </h1>
          <h2 className={styles.titleH2}>
            Jouez en famille ou entre amis, 
          </h2>
          <h2 className={styles.titleH2}>
            même à distance.
          </h2>
          
        </div>

        <div className={styles.launchGame}>

          <div title="Créer une partie"  >
            <button onClick={() => handleNewGame()} className={styles.createBtn}>
              <span>Créer une partie</span>
            </button>
          </div>

          <div className={styles.joinGame}>
            <div>
              <input onChange={(e) => setJoinGame(e.target.value)} value={joinGame} className={styles.inputUrl} />
            </div>
            <div title="Rejoindre une partie"  >
              <button onClick={() => handleJoinGame()} className={styles.joinBtn}><span>Rejoindre une partie</span></button>
            </div>
          </div>
        </div>

        <div title="Découvrir les règles ?"  >
          <button onClick={() => router.push('/regles_karak.pdf')} className={styles.rulesBtn}>
            <span>Découvrir les règles</span>
          </button>
        </div>
    </div>
  );
}

export default Home;
