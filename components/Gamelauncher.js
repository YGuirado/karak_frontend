import styles from '../styles/ConfigGame.module.css';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router';
import { RWebShare } from "react-web-share";
import { AddPlayerHeroeNames } from '../reducers/games';

const { REMOTE_URL } = require('../modules/urls');

function Gamelauncher() {
    const [nbJoueurs, setNbJoueurs] = useState(0)
    const router = useRouter()
    const gameId = useSelector((state) => state.games.id);
    console.log('id game: ', gameId);
    const gamecreator = useSelector((state) => state.games.gamecreator);
    const playerHeroeNames = useSelector((state) => state.games.playerHeroeNames);
    const [intervalID, setIntervalID] = useState(null)
    console.log('playerHeroeNames:', playerHeroeNames)
    const dispatch = useDispatch();


    function fetch_getPlayerHeroe() {
        console.log('Entry in fetch_getPlayerHeroe');
        fetch(REMOTE_URL + '/getPlayerHeroe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: gameId }),
        }).then(response => response.json())
            .then(data => {
                if (data.result === true) {
                    console.log('ok to  get player/heroe');
                    if (data.infos !== playerHeroeNames) {
                        dispatch(AddPlayerHeroeNames(data.infos))
                    }
                } else {
                    console.log('Cannot get player/heroe');
                }
            })
    }

    useEffect(() => {
        setNbJoueurs(playerHeroeNames.length)
        const local_intervalID = setInterval(fetch_getPlayerHeroe, 1000 * 30)
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
    console.log('joueurs_heroes jsx : ', playerHeroeNames_jsx);

    return (
        <div className={styles.container}>

            <div className={styles.headerContainer}>
                <span className={styles.logoLetter}>K</span>
                <p className={styles.headerText}>En attente des joueurs</p>
            </div>

            <div className={styles.subContainer}>

                <div className={styles.urlSection}>
                    <span className={styles.h2}>
                        {nbJoueurs} joueurs ont rejoint la partie
                    </span>

                    <span className={styles.h2}>
                        ICI UN "SLIDER"
                    </span>

                    {gamecreator &&
                        (<div title="Démarrer la partie"  >
                            <button onClick={() => alert('La partie commence')} className={styles.largeBtn}>
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
