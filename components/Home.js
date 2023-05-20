import styles from '../styles/ConfigGame.module.css';
import Link from 'next/link';
import React from 'react';
import { useState, } from 'react';
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router';
import { gameId, setCreator } from '../reducers/games';
// require('dotenv').config()

// const REMOTE_URL = process.env.REMOTE_URL;
const { REMOTE_URL } = require('../modules/urls');

function Home() {
  const dispatch = useDispatch();
  const [joinGame, setJoinGame] = useState('');
  const router = useRouter()
  console.log('REMOTE_URL: ', REMOTE_URL);

  //au clic sur "créer une partie", la DB renvoie un iD dans le store redux"
  const handleNewGame = () => {
    console.log('REMOTE_URL: ', REMOTE_URL);
    fetch(REMOTE_URL + '/newGame')
      .then(response => response.json())
      .then(data => {
        if (data.result === true) {
          dispatch(gameId(data.id));
          dispatch(setCreator())
          //ajouter navigation vers share URL

          //hook de route useRouter de next/router 
          router.push(`/addplayers/${data.id}`)
        } else {
          alert('error: The Game cannot be created');
        }
      });
  }
  //Rejoindre une partie
  const handleJoinGame = () => {
    const id_array = joinGame.match(/.*\/(.*$)/)
    console.log('id from url: ', id_array)
    if ( id_array) {
      const id = id_array[1]
      fetch(REMOTE_URL + '/joinGame', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: id }),
      }).then(response => response.json())
        .then(data => {
          if (data.result === true) {
            //information de connexion à la DB pour mise à jour du compteur de joueurs du gameMaster ?
            dispatch(gameId(id));
            router.push('/addplayers/' + id)
          } else {
            alert('Sorry but we cannot join the game, check the url');
          }
        });
    } else {
      alert('Check the url, the format is incorrect')
    }
  };



  return (
    <div className={styles.container}>

      <div className={styles.logocontainer}>
        <img src="logo-karak.png" alt="Logo" className={styles.logo} />
        <span className={styles.title}>
          Welcome to Karak!
        </span>
        <span className={styles.h2}>
          Jouez en famille ou entre amis, <br /> même à distance.
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
