import Tile from './tile';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faRotate } from '@fortawesome/free-solid-svg-icons';
import { TransformWrapper, TransformComponent, Template } from "react-zoom-pan-pinch";
import React from 'react';

function Map() {
  const row = 41;
  const col = 41;
  const rowmid = Math.floor(row/2);
  const colmid = Math.floor(col/2);

  
  const dataStart = {type: 'start', "meeting": false, data: [1,1,1,1], "isRotate": true, "rotation": 0, img: 'depart_fontaine-1111'}
  const dataVide = {type: 'vide', data: [null,null,null,null], "isRotate": false, "rotation": 0,img: 'vide'}
  
  let dataPioche=[
    {"type":"start","meeting": false,"data":[1,1,1,1],"isRotate":true,"rotation": 0,"img":"depart_fontaine-1111"},
    {"type":"couloir-salle","meeting": false,"data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir_salle-1010"},
    {"type":"couloir-salle","meeting": true,"data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir_salle-1010"},
    {"type":"couloir-portail","data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir_portail-1010"},
    {"type":"couloir-salle","data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir_salle-1010"},
    {"type":"couloir","data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir-1010"},
    {"type":"couloir-salle","data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir_salle-1010"},
    {"type":"couloir","data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir-1010"},
    {"type":"angle_salle","data":[1,0,0,1],"isRotate": false,"rotation": 0,"img":"angle_salle-1001"},
    {"type":"couloir-salle","data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir_salle-1010"},
    {"type":"angle","data":[1,1,0,0],"isRotate": false,"rotation": 0,"img":"angle-1100"},
    {"type":"croix-salle","data":[1,1,1,1],"isRotate": false,"rotation": 0,"img":"croix_salle-1111"},
    {"type":"te-salle","data":[1,0,1,1],"isRotate": false,"rotation": 0,"img":"te_salle-1011"},
    {"type":"croix-salle","data":[1,1,1,1],"isRotate": false,"rotation": 0,"img":"croix_salle-1111"},
    {"type":"croix-salle","data":[1,1,1,1],"isRotate": false,"rotation": 0,"img":"croix_salle-1111"},
    {"type":"couloir-salle","data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir_salle-1010"},
    {"type":"angle","data":[1,1,0,0],"isRotate": false,"rotation": 0,"img":"angle-1100"},
    {"type":"croix-salle","data":[1,1,1,1],"isRotate": false,"rotation": 0,"img":"croix_salle-1111"},
    {"type":"croix-salle","data":[1,1,1,1],"isRotate": false,"rotation": 0,"img":"croix_salle-1111"},
    {"type":"croix-salle","data":[1,1,1,1],"isRotate": false,"rotation": 0,"img":"croix_salle-1111"},
    {"type":"angle_salle","data":[1,0,0,1],"img":"angle_salle-1001"},
    {"type":"couloir-salle","data":[1,0,1,0],"img":"couloir_salle-1010"},
    {"type":"croix","data":[1,1,1,1],"img":"croix-1111"},
    {"type":"couloir-salle","data":[1,0,1,0],"img":"couloir_salle-1010"},{"type":"te-salle","data":[1,0,1,1],"img":"te_salle-1011"},{"type":"angle_salle","data":[1,0,0,1],"img":"angle_salle-1001"},{"type":"couloir","data":[1,0,1,0],"img":"couloir-1010"},{"type":"angle_salle","data":[1,0,0,1],"img":"angle_salle-1001"},{"type":"angle_salle","data":[1,0,0,1],"img":"angle_salle-1001"},{"type":"te-salle","data":[1,0,1,1],"img":"te_salle-1011"},{"type":"couloir-portail","data":[1,0,1,0],"img":"couloir_portail-1010"},{"type":"te-salle","data":[1,0,1,1],"img":"te_salle-1011"},{"type":"croix","data":[1,1,1,1],"img":"croix-1111"},{"type":"croix-salle","data":[1,1,1,1],"img":"croix_salle-1111"},{"type":"couloir-salle","data":[1,0,1,0],"img":"couloir_salle-1010"},{"type":"start","data":[1,1,1,1],"img":"depart_fontaine-1111"},{"type":"croix-salle","data":[1,1,1,1],"img":"croix_salle-1111"},{"type":"te-salle","data":[1,0,1,1],"img":"te_salle-1011"},{"type":"croix","data":[1,1,1,1],"img":"croix-1111"},{"type":"te","data":[1,0,1,1],"img":"te-1011"},{"type":"angle_salle","data":[1,0,0,1],"img":"angle_salle-1001"},{"type":"angle_salle","data":[1,0,0,1],"img":"angle_salle-1001"},{"type":"angle","data":[1,1,0,0],"img":"angle-1100"},{"type":"couloir-salle","data":[1,0,1,0],"img":"couloir_salle-1010"},{"type":"croix","data":[1,1,1,1],"img":"croix-1111"},{"type":"te-salle","data":[1,0,1,1],"img":"te_salle-1011"},{"type":"angle_salle","data":[1,0,0,1],"img":"angle_salle-1001"},{"type":"te","data":[1,0,1,1],"img":"te-1011"},{"type":"couloir-salle","data":[1,0,1,0],"img":"couloir_salle-1010"},{"type":"angle_salle","data":[1,0,0,1],"img":"angle_salle-1001"},{"type":"angle_salle","data":[1,0,0,1],"img":"angle_salle-1001"},{"type":"te","data":[1,0,1,1],"img":"te-1011"},{"type":"te","data":[1,0,1,1],"img":"te-1011"},{"type":"angle_salle","data":[1,0,0,1],"img":"angle_salle-1001"},{"type":"croix-salle","data":[1,1,1,1],"img":"croix_salle-1111"},{"type":"te-salle","data":[1,0,1,1],"img":"te_salle-1011"},{"type":"croix","data":[1,1,1,1],"img":"croix-1111"},{"type":"croix-salle","data":[1,1,1,1],"img":"croix_salle-1111"},{"type":"croix-salle","data":[1,1,1,1],"img":"croix_salle-1111"},{"type":"te","data":[1,0,1,1],"img":"te-1011"},{"type":"couloir-portail","data":[1,0,1,0],"img":"couloir_portail-1010"},{"type":"te-salle","data":[1,0,1,1],"img":"te_salle-1011"},{"type":"couloir-portail","data":[1,0,1,0],"img":"couloir_portail-1010"},{"type":"angle-fontaine","data":[1,1,0,0],"img":"angle_fontaine-1100"},{"type":"couloir-salle","data":[1,0,1,0],"img":"couloir_salle-1010"},{"type":"couloir-salle","data":[1,0,1,0],"img":"couloir_salle-1010"},{"type":"croix-salle","data":[1,1,1,1],"img":"croix_salle-1111"},{"type":"angle-fontaine","data":[1,1,0,0],"img":"angle_fontaine-1100"},{"type":"te-salle","data":[1,0,1,1],"img":"te_salle-1011"},{"type":"croix-salle","data":[1,1,1,1],"img":"croix_salle-1111"},{"type":"angle_salle","data":[1,0,0,1],"img":"angle_salle-1001"},{"type":"te-salle","data":[1,0,1,1],"img":"te_salle-1011"},{"type":"croix","data":[1,1,1,1],"img":"croix-1111"},{"type":"te-salle","data":[1,0,1,1],"img":"te_salle-1011"},{"type":"angle","data":[1,1,0,0],"img":"angle-1100"},{"type":"croix","data":[1,1,1,1],"img":"croix-1111"},{"type":"couloir","data":[1,0,1,0],"img":"couloir-1010"},{"type":"croix-salle","data":[1,1,1,1],"img":"croix_salle-1111"},{"type":"te-salle","data":[1,0,1,1],"img":"te_salle-1011"},{"type":"te-salle","data":[1,0,1,1],"img":"te_salle-1011"},{"type":"angle_salle","data":[1,0,0,1],"img":"angle_salle-1001"}]

  const [dataPiocheTemp, setDataPiocheTemp] = useState(dataPioche)
  const [playedCoords, setPlayedCoords ] = useState([`${rowmid};${colmid}`]);
  const [player, setPlayer] = useState([
    {id: 0, userName: "Yo", coords: `${rowmid};${colmid}`, prevCoords: `${rowmid};${colmid}`, type: "aderyn"}, 
    {id: 1, userName: "Sam", coords: `${rowmid};${colmid}`, prevCoords: `${rowmid};${colmid}`, type: "argentus"}, 
    {id: 2, userName: "Katy", coords: `${rowmid};${colmid}`, prevCoords: `${rowmid};${colmid}`, type: "taia"}, 
    {id: 3, userName: "Marc", coords: `${rowmid};${colmid}`, prevCoords: `${rowmid};${colmid}`, type: "horan"}]);
  const [playerTurn, setPlayerTurn] = useState(0);
  const [mooves, setMooves] = useState(0);
  const [nbTours, setNbTours] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isRotationValid, setIsRotationValid] = useState(false);
    
  const isArgentus = (player[playerTurn].type === 'argentus');
  const isAderyn = (player[playerTurn].type === 'aderyn');
  

  let meeting = dataPiocheTemp[playedCoords.findIndex(coord => coord === player[playerTurn].coords)].meeting
  if(mooves === 4){
    setMooves(0);
    if(playerTurn < player.length -1){
      setPlayerTurn(playerTurn +1)
    }else{
      setPlayerTurn(0);
      setNbTours(nbTours +1)
    }
  }

  useEffect(()=>{
    let info = 'Cliques sur une tuile pour te déplacer..'
    if(isOpen) info = 'Tournes ta tuile comme tu le souhaites..'
    if(!isOpen && meeting && !isAderyn) info = 'Combat! Jettes les dés..'
    if(!isOpen && meeting && isAderyn) info = 'Combats ou continues d’avancer..'
    console.log(player[playerTurn].userName, ' Tour', nbTours,'| Déplacement', `${mooves}/4`, ' ', info)
  },[isOpen, playerTurn])
  
  let isWayabletemp = false;
  useEffect(() => {
    // dernière id, carte jouée par le joueur
    const previousLastTilesID = player.find((player) => player.id === playerTurn).prevCoords
    const previousCoords = previousLastTilesID.split(';');
    // avant-dernière id, carte jouée par le joueur
    const lastTileID = player.find((player) => player.id === playerTurn).coords;
    const coords = lastTileID.split(';');
    const lastTileData = dataPiocheTemp[playedCoords.findIndex(coord => coord === player[playerTurn].coords)].data
    
    // logique isWayable
    if( Number(coords[0] === previousCoords[0] && coords[1] < previousCoords[1]) ) setIsRotationValid(lastTileData[2] === 1)//gauche
    else if( Number(coords[0] < previousCoords[0] && coords[1] === previousCoords[1]) ) setIsRotationValid(lastTileData[3] === 1)//haut
    else if( Number(coords[0] === previousCoords[0] && coords[1] > previousCoords[1]) ) setIsRotationValid(lastTileData[0] === 1)//droite
    else if( Number(coords[0] > previousCoords[0] && coords[1] === previousCoords[1]) ) setIsRotationValid(lastTileData[1] === 1)//bas
  }, [playedCoords])
  
  let modalValid;
  if(isRotationValid)
  modalValid = (
    <FontAwesomeIcon
      style={{width: '20px', height: '20px', padding: '5px', backgroundColor: 'white', opacity:.6, borderRadius: '50%', color : '#324E01', cursor: 'pointer'}}
      onClick={() => {
        setIsOpen(false);
        setRotation(0);

        setMooves(mooves +1)
        // cf. onTileClick
        if(dataPiocheTemp[playedCoords.findIndex(coord => coord === player[playerTurn].coords)].meeting && !isAderyn) {
          console.log('combat')
          setMooves(0)
          if(playerTurn < player.length -1){
            setPlayerTurn(playerTurn +1)
          }else{
            setPlayerTurn(0);
            setNbTours(nbTours +1)
          }
        }else if(dataPiocheTemp[playedCoords.findIndex(coord => coord === player[playerTurn].coords)].meeting && isAderyn){
          console.log('combat')
        }
      }} 
      icon={faCheck} />
  )
  
  let modalContent;
  if(isOpen){
    let placement = playedCoords[playedCoords.length-1].split(';')
    let top = Number(placement[0])*100
    let left = Number(placement[1])*100
    modalContent = (
      <div style={{position: 'absolute', padding: '2px', marginTop: `${top}px`, marginLeft: `${left}px`, width: '100px', height: '100px', display: 'flex', justifyContent: 'space-between', zIndex: 10}}>
        <div>
          <FontAwesomeIcon
            style={{width: '20px', height: '20px', padding: '5px', backgroundColor: 'white', opacity:.6, borderRadius: '50%', color : '#BC6900', cursor: 'pointer'}}
            onClick={() => {
              setRotation(rotation + 1);
              let pioche = dataPiocheTemp
              let i = playedCoords.length-1;
              pioche[i].rotation += 1;
              pioche[i].data = shiftArray(pioche[i].data);
              setDataPiocheTemp(pioche);
              setPlayedCoords([...playedCoords]);
            }} 
            icon={faRotate} />
        </div>
        <div>
          {modalValid}
        </div>
      </div>
    )
  }

  const shiftArray = (arr) => {
    arr.push(arr.shift());
    return arr
  }
  
  const onTileClick = (id) => {
    // cf. modalValid
    if(dataPiocheTemp[playedCoords.findIndex(coord => coord === player[playerTurn].coords && playedCoords.includes(id)) +1].meeting && !isAderyn) {
      console.log('combat')
      setMooves(0)
      if(playerTurn < player.length -1){
        setPlayerTurn(playerTurn +1)
      }else{
        setPlayerTurn(0);
        setNbTours(nbTours +1)
      }
    }else if(isAderyn && playedCoords.includes(id)) {
      console.log('combat')
      setMooves(mooves +1)
    }else if(!isAderyn && playedCoords.includes(id)){
      setMooves(mooves +1)
    }
  
    if(!playedCoords.includes(id)) {
      setPlayedCoords([...playedCoords, id]);
      setIsOpen(true)
    }
    
    //ajouter les coordonnées de la dernière carte jouée à l'ensemble des cartes jouées
    if(!playedCoords.includes(id)) {
      setPlayedCoords([...playedCoords, id])
    };

    //attribuer les coordonnées de la dernière carte jouée par chaque joueur
    const allPlayers = player;
    allPlayers.filter((player) => {
      if(player.id === playerTurn){
        player.prevCoords = player.coords;
        player.coords = id;
      }
    })
    setPlayer([... allPlayers]);
  };

  const carte = []
  for (let i=0; i<row; i++){
    
    for (let j=0; j<col; j++){
      
      let card = dataVide
      let isPlayed = false
      let isPlayable = false
      
      for(let k=0; k<playedCoords.length; k++){
        if(playedCoords[k] === `${i};${j}`) {isPlayed = true}
        if(playedCoords[k] === `${i};${j}`) {
          card = dataPiocheTemp[k];
        }
        
        const lastTileData = dataPiocheTemp[playedCoords.findIndex(coord => coord === player[playerTurn].coords)].data
        const lastTileID = player.find((player) => player.id === playerTurn).coords;
        const coords = lastTileID.split(';');
        const x = Number(coords[0])
        const y = Number(coords[1])
                
        if(!isOpen){
          if(!meeting || isAderyn){
            isPlayable = (
              //(si data de la tuile actuelle = 1 || (isArgentus && a tuile d'à côté à déjà été jouée)     ) && 
              ((lastTileData[0] || (isArgentus && playedCoords.includes(`${x};${y-1}`)) ) && x === i && y-1 === j)||
              ((lastTileData[2] || (isArgentus && playedCoords.includes(`${x};${y+1}`)) ) && x === i && y+1 === j)||
              ((lastTileData[1] || (isArgentus && playedCoords.includes(`${x-1};${y}`)) ) && x-1 === i && y === j)||
              ((lastTileData[3] || (isArgentus && playedCoords.includes(`${x+1};${y}`)) ) && x+1 === i && y === j)
            )
          }
        }       

      }
      
      carte.push(
        <Tile 
          key={`${i};${j}`} 
          id={`${i};${j}`} 
          onTileClick={(id) => onTileClick(id)} 
          isPlayable={isPlayable} 
          card={card}
          player={player}
          isPlayed={isPlayed}
        />
      )
    }
  }  

  //transform: [`translate(calc(${-(row*100/2)}px + 50vw), calc(${-(col*100/2)}px + 30vh))`], 

  //const container = {display: 'flex', width: `${col*100}px`, height: `${row*100}px`, justifyContent: 'center', alignItems: 'center'}
  const map = {display: 'flex', width: `${col*100}px`, height: `${row*100}px`, flexDirection: 'row', flexWrap: 'wrap'}


  return (
    <TransformWrapper
      initialScale={.8}
      minScale={0.3}
      maxScale={1.5}
      limitToBounds={false}
      disablePadding={true}
      centerOnInit={false}
      initialPositionX={-2100 + 640}
      initialPositionY={-2100 + 720}
    >
      <TransformComponent>
        <main style={map}>
          {carte}
          {modalContent}
        </main>
      </TransformComponent>
    </TransformWrapper>
  );
}

export default Map;