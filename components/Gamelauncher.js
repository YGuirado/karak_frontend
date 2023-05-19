import styles from '../styles/ConfigGame.module.css';
import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router';




function Gamelauncher() {
    const router = useRouter()
    const gameId = useSelector((state) => state.games.id);
    console.log('id game: ', gameId);
    const gamecreator = useSelector((state) => state.games.gamecreator);


    return (
        <div className={styles.container}>

            <div className={styles.headerContainer}>
                <span className={styles.logoLetter}>K</span>
                <p className={styles.headerText}>En attente des joueurs</p>
            </div>

            <div className={styles.subContainer}>

                <div className={styles.urlSection}>
                    <span className={styles.h2}>
                        n joueurs ont rejoint la partie
                    </span>

                    <span className={styles.h2}>
                        ICI UN "SLIDER"
                    </span>

                    {gamecreator &&
                        (<div title="Démarrer la partie"  >
                            <button onClick={() => alert('La partie commence')} className={styles.largeBtn}>
                                <span>Démarrer à n</span>
                            </button>
                        </div>)
                    }
                </div>
            </div>

        </div>



    )
};

export default Gamelauncher;
