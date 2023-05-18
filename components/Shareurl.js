import styles from '../styles/Shareurl.module.css';
import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router';



function Shareurl() {
    const router = useRouter()
    const games = useSelector((state) => state.games.value);

    const useMobileDevice = () => {
        const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

        useEffect(() => {
            setIsMobileOrTablet(isMobileOrTabletDevice());
        });
        return [isMobileOrTablet];
    };

    const handleShare = () => {
        console.log("verif handleshare", navigator.share)
        if (navigator.share) {
            navigator
                .share({
                    title: "numéro de partie",
                    text: `${games.id} `,
                })
                .then(() => {
                    console.log('Successfully shared');
                })
                .catch(error => {
                    console.error('Something went wrong sharing the blog', error);
                });
        }
    };

    return (
        <div className={styles.container}>

            <div className={styles.headerContainer}>
                <h1 className={styles.logoLetter}>K</h1>
                <p className={styles.headerText}>Partage le lien de la partie</p>
            </div>
            <div className={styles.subContainer}>

                <div className={styles.urlSection}>
                    <span className={styles.h2}>
                        Invite les autres joueurs <br/>en partageant le lien ci-dessous
                    </span>
                    <div className={styles.idSection}>
                        <span className={styles.h2}>Id : {games.id}
                        <FontAwesomeIcon icon={faShareNodes} className={styles.shareIcon}
                            onClick={() => handleShare()}/>  
                        </span>
                    </div>
                    <span className={styles.h2}>
                        Puis lance la partie
                    </span>
                    <div title="Lance la partie"  >
                        <button onClick={() => router.push('/addplayers')} className={styles.launchBtn}>
                            <span>Lancer la partie</span>
                        </button>
                    </div>
                    </div>
            </div>



            



        </div>



    )
};

export default Shareurl;
