import styles from '../styles/ConfigGame.module.css';
import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router';
import { RWebShare } from "react-web-share";



function Shareurl() {
    const router = useRouter()
    const games = useSelector((state) => state.games.id);

   
    return (
        <div className={styles.container}>

            <div className={styles.headerContainer}>
                <span className={styles.logoLetter}>K</span>
                <p className={styles.headerText}>Partage le lien de la partie</p>
            </div>
            <div className={styles.subContainer}>

                <div className={styles.urlSection}>
                    <span className={styles.h2}>
                        Invite les autres joueurs <br/>en partageant le lien ci-dessous
                    </span>
                    <div className={styles.idSection}>
                        <RWebShare
                            data={{
                                text: "Rejoins moi sur une partie de Karak !",
                                url: "http://localhost:3001/",
                                title: "Karak",
                            }}
                            onClick={() => console.log("shared successfully!")}
                        >
                            <span className={styles.h2}>Id :{games.id}
                        <FontAwesomeIcon icon={faShareNodes} className={styles.shareIcon}/>  
                        </span>
                        </RWebShare>
                    </div>
                    <span className={styles.h2}>
                        Puis lance la partie
                    </span>
                    <div title="Lance la partie"  >
                        <button onClick={() => router.push('/addplayers')} className={styles.largeBtn}>
                            <span>Lancer la partie</span>
                        </button>
                    </div>
                    </div>
            </div> 

        </div>



    )
};

export default Shareurl;
