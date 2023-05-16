import styles from '../styles/Home.module.css';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';




function Addplayers() {

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.logocontainer}>
          <img src="logo-karak.png" alt="Logo" className={styles.logo} />
          <h1 className={styles.title}>
            Welcome to Karak!
          </h1>
          <h2 className={styles.titleH2}>
            Jouez en famille ou entre amis, même à distance.
          </h2>
        </div>

        </div>

    </div>
  );
}

export default Addplayers;
