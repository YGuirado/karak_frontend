import styles from '../styles/ConfigGame.module.css';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router';
import { RWebShare } from "react-web-share";



function Gamelauncher() {
    const [nbJoueurs, setNbJoueurs] = useState(0)
    const router = useRouter()
    const gameId = useSelector((state) => state.games.id);
    console.log('id game: ', gameId);
    const gamecreator = useSelector((state) => state.games.gamecreator);
    const playerHeroeNames = useSelector((state) => state.games.playerHeroeNames);
    console.log('playerHeroeNames:', playerHeroeNames)

    useEffect(() => {
        setNbJoueurs(playerHeroeNames.length)
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
