import styles from '../styles/Header.module.css';
import React from 'react';
import { useSelector } from 'react-redux';


function Header() {
	const info = useSelector((state) => state.header.value);

  let color = 'E8E7DD';
  if(info.type === 'horan') color = '#69A5C3';
  if(info.type === 'aderyn') color = '#BDB83C';
  if(info.type === 'argentus') color = '#D3E5EF';
  if(info.type === 'victorius') color = '#E6A840';
  if(info.type === 'lord-xanros') color = '#8D92B8';
  if(info.type === 'taia') color = '#C6C5AB';

  return (
    <div>
        <div className={styles.player} style={{color: `${color}`}}>
            {info.username}
        </div>
        <div className={styles.tour}>
            Tour {info.nbTours} &rsaquo; Deplacement {info.mooves}/4
            <hr style={{border: `3px solid ${color}`, margin: '4px -10px'}}></hr>
        </div>
        <div className={styles.info}>
          {info.msg}
        </div>
    </div>
  );
}

export default Header;
