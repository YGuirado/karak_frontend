import styles from '../styles/Addplayer.module.css';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useState} from 'react';
import { Slider } from 'antd';
import { useDispatch } from 'react-redux';
import { AddPlayersNames } from '../reducers/games';





function Addplayer() {
  const dispatch = useDispatch();
  const [nbrPlayers, setNbrPlayers] = useState(1);
  const [playerNames, setPlayerNames] = useState([]);


  const playerInputs = [];
  for (let i = 0; i < nbrPlayers; i++) {
    playerInputs.push(
      <div key={i} className={styles.inputContainer}>
        <p>Joueur {i + 1}</p>
        <input id={i} value={playerNames[i]}
          className={styles.inputName}
          onChange={(e) => handleInputChange(e, i)}/>
      </div>
    );
  }

  const handleInputChange = (e, index) => {
    const tempPlayerNames = [... playerNames];
    tempPlayerNames[index] = e.target.value;
    setPlayerNames(tempPlayerNames);
  };

  const handleLaunchGame = () => {
    console.log(playerNames)
    fetch('http://localhost:3000/addPlayers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: "id345", token:"1234", players: playerNames }),
    }).then(response => response.json())
      .then(data => {
        if (data.result === true) {
          
          dispatch(AddPlayersNames({ players: playerNames }));
          //router.push('/game')
        } else {
          res.json({ result: false, error: 'Game cannot be lauched' });
        }
      });
  }


  return (
    <div className={styles.container}>

      <div className={styles.headerContainer}>
        <h1 className={styles.logoLetter}>K</h1>
        <p className={styles.headerText}>Joueurs chez moi</p>
      </div>

      <div className={styles.subContainer}>
        <div className={styles.slidecontainer}>
          <p>Nombre de personnages différents qui jouent à tour de rôle sur le même écran</p>
          <div className={styles.slider}>
            <Slider
              defaultValue={1}
              tooltip={{
                open: true,
                placement: 'bottom',
              }}
              max={5}
              min={1}
              trackStyle={{backgroundColor:'#324E01'}}
              railStyle={{backgroundColor:'#a89b93'}}
              handleStyle={{borderColor:'red'}}
              onChange={(e) => setNbrPlayers(e)}
            />  
          </div>
        </div>

      </div>
      <div className={styles.playersNames}>
        {playerInputs}
        <div>
          <button onClick={() => handleLaunchGame()} className={styles.btnValid}><span>Valider</span></button>
        </div>
      </div>



    </div>


  );
}

export default Addplayer;
