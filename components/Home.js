import styles from '../styles/ConfigGame.module.css';
import Link from 'next/link';
import React from 'react';
import { useState, } from 'react';
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router';
import { setCreator } from '../reducers/games';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

function Home() {
  const dispatch = useDispatch();
  const [joinGame, setJoinGame] = useState('');
  const router = useRouter()
  console.log('BACKEND_URL: ', BACKEND_URL);

  //au clic sur "créer une partie", la DB renvoie un iD dans le store redux"
  const handleNewGame = () => {
    fetch(BACKEND_URL + '/newGame')
      .then(response => response.json())
      .then(data => {
        if (data.result === true) {
          // dispatch(gameId(data.id));
          dispatch(setCreator())
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
    if (id_array) {
      const id = id_array[1]
      router.push(`/addplayers/${id}`)
      // fetch(BACKEND_URL + '/joinGame', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ id: id }),
      // }).then(response => response.json())
      //   .then(data => {
      //     if (data.result === true) {
      //       //information de connexion à la DB pour mise à jour du compteur de joueurs du gameMaster ?
      //       dispatch(gameId(id));
      //       router.push('/addplayers/' + id)
      //     } else if (data.gameStarted) {
      //       alert('Sorry but the game is yet started');
      //     } else {
      //       alert('Sorry but we cannot join the game, check the url');
      //     }
      //   });
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
