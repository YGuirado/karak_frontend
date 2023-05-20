import styles from '../styles/ConfigGame.module.css';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Slider from '@mui/material/Slider'
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from 'react-redux';
import { AddPlayersNames, AddPlayerHeroeNames } from '../reducers/games';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { RWebShare } from "react-web-share";


const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_URL;


function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="bottom" title={value}>
      {children}
    </Tooltip>
  );
}

const KarakSlider = styled(Slider)({
  color: "#324E01",
  height: 8,
  "& .MuiSlider-track": {
    border: "none"
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit"
    },
    "&:before": {
      display: "none"
    }
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)"
    },
    "& > *": {
      transform: "rotate(45deg)"
    }
  }
});

function Addplayer() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [nbrPlayers, setNbrPlayers] = useState(1);
  const [playerNames, setPlayerNames] = useState(Array(5).fill(''));
  console.log(playerNames)
  const gameId = useSelector((state) => state.games.id);
  console.log(gameId)
  console.log('FRONTEND_URL: ', FRONTEND_URL);


  const playerInputs = [];
  for (let i = 0; i < nbrPlayers; i++) {
    playerInputs.push(
      <div key={i} className={styles.inputContainer}>
        <p>Joueur {i + 1}</p>
        <input id={i} value={playerNames[i]}
          className={styles.inputName}
          onChange={(e) => handleInputChange(e, i)} />
      </div>
    );
  }

  const handleInputChange = (e, index) => {
    const tempPlayerNames = [...playerNames];
    tempPlayerNames[index] = e.target.value;
    setPlayerNames(tempPlayerNames);
  };

  /*useEffect pour afficher la liste des joueurs déjà présents dans un partie
fetch 
tabeau de tous les joueurs 
state loggedPayers
boucle pour remplir des champs  en disabled
slider : le mettre au nbr de joueurs inscrits +1
*/

  const handleLaunchGame = () => {
    // Vérifier si tous les champs d'entrée sont remplis
    const nbrElem = playerNames.slice(0, nbrPlayers)
    const emptyFields = nbrElem.every((name) => name !== '');
    console.log(emptyFields, nbrElem, nbrPlayers, gameId)
    if (emptyFields) {
      console.log(nbrElem)
      fetch(BACKEND_URL + '/addPlayers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: gameId, players: nbrElem }),
      }).then(response => response.json())
        .then(data => {
          if (data.result === true) {

            dispatch(AddPlayersNames({ players: nbrElem }));
            //router.push('/game')
            // Vider les champs d'entrée une fois le fetch passé avec succès
            setPlayerNames(Array(playerNames.length).fill(''));
            dispatch(AddPlayerHeroeNames(data.infos))
            router.push('/gamelauncher')

          } else if (data.gameStarted) {
            alert('Sorry but the game is yet started');
          } else {
            console.log('Cannot add players');
          }
        });
    } else {
      // Gérer le cas où un champ d'entrée n'est pas rempli
      console.log("Veuillez remplir tous les champs d'entrée");
    }
  }


  return (
    <div className={styles.container}>

      <div className={styles.headerContainer}>
        <h1 className={styles.logoLetter}>K</h1>
        <p className={styles.headerText}>Configure les joueurs</p>
      </div>

      <div className={styles.idSection}>
        <button className={styles.mediumBtn}>
          <RWebShare
            data={{
              text: "Rejoins moi sur une partie de Karak !",
              url: FRONTEND_URL + '/addplayers/' + gameId,
              title: "Karak",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <span>Inviter les joueurs à distance<span>&nbsp;&nbsp;</span>
              <FontAwesomeIcon icon={faShareNodes} className={styles.shareIcon} />
            </span>
          </RWebShare>
        </button>
      </div>

      <div className={styles.subContainer}>
        <div className={styles.slidecontainer}>
          <p className={styles.introSlider}>Nombre de personnages différents qui jouent à tour de rôle sur mon écran : </p>
          <div className={styles.slider}>
            <KarakSlider defaultValue={nbrPlayers}
              min={1}
              max={5}
              valueLabelDisplay="auto"
              slots={{
                valueLabel: ValueLabelComponent
              }}
              value={nbrPlayers}
              onChange={(e, value) => setNbrPlayers(value)}
            />
          </div>
        </div>

      </div>
      <div className={styles.playersNames}>
        {playerInputs}
        <div>
          <button onClick={() => handleLaunchGame()} className={styles.mediumBtn}><span>Lancer la partie</span></button>
        </div>
      </div>



    </div>


  );
}

export default Addplayer;
