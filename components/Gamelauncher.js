import styles from '../styles/ConfigGame.module.css';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router';
import { setPlayerHeroeNames, setGame } from '../reducers/games';
import {styled} from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

function Gamelauncher() {
    const [nbJoueurs, setNbJoueurs] = useState(0)
    const router = useRouter()
    const gameId = useSelector((state) => state.games.id);
    // console.log('id game: ', gameId);
    const gamecreator = useSelector((state) => state.games.gamecreator);
    const playerHeroeNames = useSelector((state) => state.games.playerHeroeNames);
    const [intervalID, setIntervalID] = useState(null)
    // console.log('playerHeroeNames:', playerHeroeNames)
    const dispatch = useDispatch();

    function fetch_getPlayerHeroe() {
        // this function is launched by setInterval
        // console.log('Entry in fetch_getPlayerHeroe');
        fetch(BACKEND_URL + '/getPlayerHeroe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: gameId }),
        }).then(response => response.json())
            .then(data => {
                if (data.result === true) {
                    if (JSON.stringify(data.infos) !== JSON.stringify(playerHeroeNames)) {
                        // console.log('data.infos: ', data.infos);
                        // console.log('playerHeroeNames: ', playerHeroeNames);
                        dispatch(setPlayerHeroeNames(data.infos))
                    }
                    if (data.gameStarted) {
                        fetch(BACKEND_URL + '/getGame', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ id: gameId }),
                        })
                            .then(response => response.json())
                            .then(data_game => {
                                if (data_game.result === true) {
                                    console.log(data_game.game);
                                    dispatch(setGame(data_game.game))
                                    router.push('/game')
                                } else {
                                    alert('Bad luck : Cannot get the game');
                                }
                            });
                    }
                } else {
                    console.log('Cannot get player/heroe');
                }
            })
    }

    useEffect(() => {
        const local_intervalID = setInterval(fetch_getPlayerHeroe, 1000 * 5)
        // setIntervalID(local_intervalID)
        console.log('set intervalID: ', local_intervalID)

        return () => {
            console.log('clear intervalID: ', local_intervalID)
            // clearInterval(intervalID);
            clearInterval(local_intervalID);
            console.log('clear intervalID: ', local_intervalID)
        }
    }, [])

    const playerHeroeNames_jsx = playerHeroeNames.map((couple, ii) => {
        return (
            <div key={ii}>
                {/* {couple.username + ' is ' + couple.heroe} */}
                {couple.username + ' has join the game'}
            </div>
        )
    })
    // console.log('joueurs_heroes jsx : ', playerHeroeNames_jsx);

    useEffect(() => {
        setNbJoueurs(playerHeroeNames.length)
    }, [playerHeroeNames])

    const handleStartGame = () => {
        fetch(BACKEND_URL + '/startGame', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: gameId }),
        })
            .then(response => response.json())
            .then(data_game => {
                if (data_game.result === true) {
                    console.log(data_game.game);
                    dispatch(setGame(data_game.game))
                    router.push('/game')
                } else {
                    alert('Bad luck : Cannot get the game');
                }
            });

    }


const karakCircularProgress =styled (CircularProgress)({color : "#324E01"})

    return (
        <div className={styles.container}>

            <div className={styles.headerContainer}>
                <span className={styles.logoLetter}>K</span>
                <p className={styles.headerText}>En attente des joueurs</p>
            </div>

            <div className={styles.subContainer}>

                <div className={styles.urlSection}>
                <CircularProgress sx={{color: '#324E01'}}/>
                    <span className={styles.h2}>
                        {nbJoueurs} joueurs ont rejoint la partie
                    </span>





                    {gamecreator &&
                        (<div title="Démarrer la partie"  >
                            <button onClick={handleStartGame} className={styles.largeBtn}>
                                <span>Démarrer à {nbJoueurs}</span>
                            </button>
                        </div>)
                    }
                    <div>
                        {playerHeroeNames_jsx}
                    </div>
                </div>

            </div>

        </div>



    )
};

export default Gamelauncher;
