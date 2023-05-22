import Tile from './tile';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faRotate } from '@fortawesome/free-solid-svg-icons';
import { TransformWrapper, TransformComponent, Template } from "react-zoom-pan-pinch";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pushInfo } from '../reducers/header';
import { pushMeet } from '../reducers/meeting';
import { pushPosition } from '../reducers/position';


function Map() {
  const dispatch = useDispatch();

  const row = 41;
  const col = 41;
  const rowmid = Math.floor(row/2);
  const colmid = Math.floor(col/2);

  
  const dataStart = {type: 'start', "meeting": false, data: [1,1,1,1], "isRotate": true, "rotation": 0, img: 'depart_fontaine-1111'}
  const dataVide = {type: 'vide', data: [0,0,0,0], "isRotate": false, "rotation": 0,img: 'vide'}
  
  //{mob: 'coffre', strength: 5, loot: 'daggers', value:1}
  let dataPioche=[
    {"type":"start","specificity":"fontaine","meeting": false,"data":[1,1,1,1],"isRotate":false,"rotation": 0,"img":"depart_fontaine-1111"},
    {"type":"couloir","specificity":"portail","meeting": false,"data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir_portail-1010"},
    {"type":"couloir","specificity":"salle","meeting": {mob: 'coffre', strength: 5, loot: 'daggers', value:1},"data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir_salle-1010"},
    {"type":"couloir","specificity":"portail","meeting": false,"data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir_portail-1010"},
    {"type":"couloir","specificity":"salle","meeting": false,"data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir_salle-1010"},
    {"type":"couloir","specificity":"portail","meeting": false,"data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir_portail-1010"},
    {"type":"couloir","specificity":"salle","meeting": false,"data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir_salle-1010"},
    {"type":"couloir","specificity":"basique","meeting": false,"data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir-1010"},
    {"type":"couloir","specificity":"salle","meeting": false,"data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir_salle-1010"},
    {"type":"couloir","specificity":"basique","meeting": false,"data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir-1010"},
    {"type":"angle","specificity":"salle","meeting": false,"data":[1,0,0,1],"isRotate": false,"rotation": 0,"img":"angle_salle-1001"},
    {"type":"couloir","specificity":"salle","meeting": false,"data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir_salle-1010"},
    {"type":"angle","specificity":"basique","meeting": false,"data":[1,1,0,0],"isRotate": false,"rotation": 0,"img":"angle-1100"},
    {"type":"croix","specificity":"salle","meeting": false,"data":[1,1,1,1],"isRotate": false,"rotation": 0,"img":"croix_salle-1111"},
    {"type":"te","specificity":"salle","meeting": false,"data":[1,0,1,1],"isRotate": false,"rotation": 0,"img":"te_salle-1011"},
    {"type":"croix","specificity":"salle","meeting": false,"data":[1,1,1,1],"isRotate": false,"rotation": 0,"img":"croix_salle-1111"},
    {"type":"croix","specificity":"salle","meeting": false,"data":[1,1,1,1],"isRotate": false,"rotation": 0,"img":"croix_salle-1111"},
    {"type":"couloir","specificity":"salle","meeting": false,"data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir_salle-1010"},
    {"type":"angle","specificity":"basique","meeting": false,"data":[1,1,0,0],"isRotate": false,"rotation": 0,"img":"angle-1100"},
    {"type":"croix","specificity":"salle","meeting": false,"data":[1,1,1,1],"isRotate": false,"rotation": 0,"img":"croix_salle-1111"},
    {"type":"croix","specificity":"salle","meeting": false,"data":[1,1,1,1],"isRotate": false,"rotation": 0,"img":"croix_salle-1111"},
    {"type":"croix","specificity":"salle","meeting": false,"data":[1,1,1,1],"isRotate": false,"rotation": 0,"img":"croix_salle-1111"},
    {"type":"angle","specificity":"salle","meeting": false,"data":[1,0,0,1],"isRotate": false,"rotation": 0,"img":"angle_salle-1001"},
    {"type":"couloir","specificity":"salle","meeting": false,"data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir_salle-1010"},
    {"type":"croix","specificity":"basique","meeting": false,"data":[1,1,1,1],"isRotate": false,"rotation": 0,"img":"croix-1111"},
    {"type":"couloir","specificity":"salle","meeting": false,"data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir_salle-1010"},
    {"type":"te","specificity":"salle","meeting": false,"data":[1,0,1,1],"isRotate": false,"rotation": 0,"img":"te_salle-1011"},
    {"type":"angle","specificity":"salle","meeting": false,"data":[1,0,0,1],"isRotate": false,"rotation": 0,"img":"angle_salle-1001"},
    {"type":"couloir","specificity":"basique","meeting": false,"data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir-1010"},
    {"type":"angle","specificity":"salle","meeting": false,"data":[1,0,0,1],"isRotate": false,"rotation": 0,"img":"angle_salle-1001"},
    {"type":"angle","specificity":"salle","meeting": false,"data":[1,0,0,1],"isRotate": false,"rotation": 0,"img":"angle_salle-1001"},
    {"type":"te","specificity":"salle","meeting": false,"data":[1,0,1,1],"isRotate": false,"rotation": 0,"img":"te_salle-1011"},
    {"type":"te","specificity":"salle","meeting": false,"data":[1,0,1,1],"isRotate": false,"rotation": 0,"img":"te_salle-1011"},
    {"type":"croix","specificity":"basique","meeting": false,"data":[1,1,1,1],"isRotate": false,"rotation": 0,"img":"croix-1111"},
    {"type":"croix","specificity":"salle","meeting": false,"data":[1,1,1,1],"isRotate": false,"rotation": 0,"img":"croix_salle-1111"},
    {"type":"couloir","specificity":"salle","meeting": false,"data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir_salle-1010"},
    {"type":"croix","specificity":"salle","meeting": false,"data":[1,1,1,1],"isRotate": false,"rotation": 0,"img":"croix_salle-1111"},
    {"type":"te","specificity":"salle","meeting": false,"data":[1,0,1,1],"isRotate": false,"rotation": 0,"img":"te_salle-1011"},
    {"type":"croix","specificity":"basique","meeting": false,"data":[1,1,1,1],"isRotate": false,"rotation": 0,"img":"croix-1111"},
    {"type":"te","specificity":"basique","meeting": false,"data":[1,0,1,1],"isRotate": false,"rotation": 0,"img":"te-1011"},
    {"type":"angle","specificity":"salle","meeting": false,"data":[1,0,0,1],"isRotate": false,"rotation": 0,"img":"angle_salle-1001"},
    {"type":"angle","specificity":"salle","meeting": false,"data":[1,0,0,1],"isRotate": false,"rotation": 0,"img":"angle_salle-1001"},
    {"type":"angle","specificity":"basique","meeting": false,"data":[1,1,0,0],"isRotate": false,"rotation": 0,"img":"angle-1100"},
    {"type":"couloir","specificity":"salle","meeting": false,"data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir_salle-1010"},
    {"type":"croix","specificity":"basique","meeting": false,"data":[1,1,1,1],"isRotate": false,"rotation": 0,"img":"croix-1111"},
    {"type":"te","specificity":"salle","meeting": false,"data":[1,0,1,1],"isRotate": false,"rotation": 0,"img":"te_salle-1011"},
    {"type":"angle","specificity":"salle","meeting": false,"data":[1,0,0,1],"isRotate": false,"rotation": 0,"img":"angle_salle-1001"},
    {"type":"te","specificity":"basique","meeting": false,"data":[1,0,1,1],"isRotate": false,"rotation": 0,"img":"te-1011"},
    {"type":"couloir","specificity":"salle","meeting": false,"data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir_salle-1010"},
    {"type":"angle","specificity":"salle","meeting": false,"data":[1,0,0,1],"isRotate": false,"rotation": 0,"img":"angle_salle-1001"},
    {"type":"angle","specificity":"salle","meeting": false,"data":[1,0,0,1],"isRotate": false,"rotation": 0,"img":"angle_salle-1001"},
    {"type":"te","specificity":"basique","meeting": false,"data":[1,0,1,1],"isRotate": false,"rotation": 0,"img":"te-1011"},
    {"type":"te","specificity":"basique","meeting": false,"data":[1,0,1,1],"isRotate": false,"rotation": 0,"img":"te-1011"},
    {"type":"angle","specificity":"salle","meeting": false,"data":[1,0,0,1],"isRotate": false,"rotation": 0,"img":"angle_salle-1001"},
    {"type":"croix","specificity":"salle","meeting": false,"data":[1,1,1,1],"isRotate": false,"rotation": 0,"img":"croix_salle-1111"},
    {"type":"te","specificity":"salle","meeting": false,"data":[1,0,1,1],"isRotate": false,"rotation": 0,"img":"te_salle-1011"},
    {"type":"croix","specificity":"basique","meeting": false,"data":[1,1,1,1],"isRotate": false,"rotation": 0,"img":"croix-1111"},
    {"type":"croix","specificity":"salle","meeting": false,"data":[1,1,1,1],"isRotate": false,"rotation": 0,"img":"croix_salle-1111"},
    {"type":"croix","specificity":"salle","meeting": false,"data":[1,1,1,1],"isRotate": false,"rotation": 0,"img":"croix_salle-1111"},
    {"type":"te","specificity":"basique","meeting": false,"data":[1,0,1,1],"isRotate": false,"rotation": 0,"img":"te-1011"},
    {"type":"te","specificity":"salle","meeting": false,"data":[1,0,1,1],"isRotate": false,"rotation": 0,"img":"te_salle-1011"},
    {"type":"couloir","specificity":"portail","meeting": false,"data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir_portail-1010"},
    {"type":"angle","specificity":"fontaine","meeting": false,"data":[1,1,0,0],"isRotate": false,"rotation": 0,"img":"angle_fontaine-1100"},
    {"type":"couloir","specificity":"salle","meeting": false,"data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir_salle-1010"},
    {"type":"couloir","specificity":"salle","meeting": false,"data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir_salle-1010"},
    {"type":"croix","specificity":"salle","meeting": false,"data":[1,1,1,1],"isRotate": false,"rotation": 0,"img":"croix_salle-1111"},
    {"type":"angle","specificity":"fontaine","meeting": false,"data":[1,1,0,0],"isRotate": false,"rotation": 0,"img":"angle_fontaine-1100"},
    {"type":"te","specificity":"salle","meeting": false,"data":[1,0,1,1],"isRotate": false,"rotation": 0,"img":"te_salle-1011"},
    {"type":"croix","specificity":"salle","meeting": false,"data":[1,1,1,1],"isRotate": false,"rotation": 0,"img":"croix_salle-1111"},
    {"type":"angle","specificity":"salle","meeting": false,"data":[1,0,0,1],"isRotate": false,"rotation": 0,"img":"angle_salle-1001"},
    {"type":"te","specificity":"salle","meeting": false,"data":[1,0,1,1],"isRotate": false,"rotation": 0,"img":"te_salle-1011"},
    {"type":"croix","specificity":"basique","meeting": false,"data":[1,1,1,1],"isRotate": false,"rotation": 0,"img":"croix-1111"},
    {"type":"te","specificity":"salle","meeting": false,"data":[1,0,1,1],"isRotate": false,"rotation": 0,"img":"te_salle-1011"},
    {"type":"angle","specificity":"basique","meeting": false,"data":[1,1,0,0],"isRotate": false,"rotation": 0,"img":"angle-1100"},
    {"type":"croix","specificity":"basique","meeting": false,"data":[1,1,1,1],"isRotate": false,"rotation": 0,"img":"croix-1111"},
    {"type":"couloir","specificity":"basique","meeting": false,"data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir-1010"},
    {"type":"croix","specificity":"salle","meeting": false,"data":[1,1,1,1],"isRotate": false,"rotation": 0,"img":"croix_salle-1111"},
    {"type":"te","specificity":"salle","meeting": false,"data":[1,0,1,1],"isRotate": false,"rotation": 0,"img":"te_salle-1011"},
    {"type":"te","specificity":"salle","meeting": false,"data":[1,0,1,1],"isRotate": false,"rotation": 0,"img":"te_salle-1011"},
    {"type":"angle","specificity":"salle","meeting": false,"data":[1,0,0,1],"isRotate": false,"rotation": 0,"img":"angle_salle-1001"}]

  const [dataPiocheTemp, setDataPiocheTemp] = useState(dataPioche)
  const [playedCoords, setPlayedCoords ] = useState([`${rowmid};${colmid}`]);
  const [player, setPlayer] = useState([
    {id: 0, userName: "Yo", coords: `${rowmid};${colmid}`, prevCoords: `${rowmid};${colmid}`, type: "aderyn"}, 
    {id: 1, userName: "Sam", coords: `${rowmid};${colmid}`, prevCoords: `${rowmid};${colmid}`, type: "argentus"}, 
    {id: 2, userName: "Katy", coords: `${rowmid};${colmid}`, prevCoords: `${rowmid};${colmid}`, type: "taia"}, 
    {id: 3, userName: "Marc", coords: `${rowmid};${colmid}`, prevCoords: `${rowmid};${colmid}`, type: "horan"}]);
  const [playerTurn, setPlayerTurn] = useState(0);
  const [mooves, setMooves] = useState(0);
  const [nbTours, setNbTours] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isRotationValid, setIsRotationValid] = useState(false);
  const [isMeetingResolved, setIsMeetingResolved] = useState(false)
  const [isMeetingSkiped, setIsMeetingSkiped] = useState(false)
    
  const isArgentus = (player[playerTurn].type === 'argentus');
  const isAderyn = (player[playerTurn].type === 'aderyn');

  const meetingMob = useSelector((state) => state.meeting.value.mob)
  
  let meeting = dataPiocheTemp[playedCoords.findIndex(coord => coord === player[playerTurn].coords)].meeting

  // stocker coordonnées, dire que la rencontre n'est pas résolue.
  // dans un useEffect, vérifier si la rencontre est résolue.

  if(mooves === 4){
    setMooves(0); 
    if(playerTurn < player.length -1){
      setPlayerTurn(playerTurn +1)
    }else{
      setPlayerTurn(0);
      setNbTours(nbTours +1) 
    }
  }

  // pushInfo in store for Header
  let msg = 'Cliques pour te déplacer';
  if(isOpen) msg = 'Tournes ta tuile';
  if(!isOpen && meeting && !isAderyn) msg = 'Combats en jettant les dés';
  if(!isOpen && meeting && isAderyn) msg = 'Combats ou continues d’avancer..';
  dispatch( pushInfo( {userName: player[playerTurn].userName, type:player[playerTurn].type, nbTours, mooves, msg} ) );
  dispatch( pushPosition( {position: playedCoords[playerTurn].coords} ) )


  useEffect(() => {
    // dernière id, carte jouée par le joueur
    const previousLastTilesID = player.find((player) => player.id === playerTurn).prevCoords
    const previousCoords = previousLastTilesID.split(';');
    // avant-dernière id, carte jouée par le joueur
    const lastTileID = player.find((player) => player.id === playerTurn).coords;
    const coords = lastTileID.split(';');
    const lastTileData = dataPiocheTemp[playedCoords.findIndex(coord => coord === player[playerTurn].coords)].data
    
    // logique rotation
    if( Number(coords[0] === previousCoords[0] && coords[1] < previousCoords[1]) ) setIsRotationValid(lastTileData[2] === 1)//gauche
    else if( Number(coords[0] < previousCoords[0] && coords[1] === previousCoords[1]) ) setIsRotationValid(lastTileData[3] === 1)//haut
    else if( Number(coords[0] === previousCoords[0] && coords[1] > previousCoords[1]) ) setIsRotationValid(lastTileData[0] === 1)//droite
    else if( Number(coords[0] > previousCoords[0] && coords[1] === previousCoords[1]) ) setIsRotationValid(lastTileData[1] === 1)//bas
  }, [playedCoords])

  useEffect(()=>{
    if(isMeetingResolved || isMeetingSkiped){
      setMooves(0)
      if(playerTurn < player.length -1){
        setPlayerTurn(playerTurn +1)
      }else{
        setPlayerTurn(0);
        setNbTours(nbTours +1)
      }
    }
  },[isMeetingResolved, isMeetingSkiped])
  
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
        dispatch(pushMeet({meeting: dataPiocheTemp[playedCoords.findIndex(coord => coord === player[playerTurn].coords)].meeting, coords: player[playerTurn].coords, isResolved: isMeetingResolved, isSkiped: isMeetingSkiped}))
        if(dataPiocheTemp[playedCoords.findIndex(coord => coord === player[playerTurn].coords)].meeting && !isAderyn) {
          console.log(1, 'meeting')
          //GESTION MEETING
          // il faudrait pouvoir mettre en pause ici le temps de la résolution...
          
        }else if(dataPiocheTemp[playedCoords.findIndex(coord => coord === player[playerTurn].coords)].meeting && isAderyn){
          console.log(2, 'meeting')
          //GESTION MEETING
          //dispatch(pushMeet(dataPiocheTemp[playedCoords.findIndex(coord => coord === player[playerTurn].coords)].meeting))
          // il faudrait pouvoir mettre en pause ici le temps de la résolution...
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
    arr.unshift(arr.pop())
    return arr
  }
  
  const onTileClick = (id) => {
    // cf. modalValid
    if(dataPiocheTemp[playedCoords.findIndex(coord => coord === player[playerTurn].coords && playedCoords.includes(id)) +1].meeting && !isAderyn) {
      console.log(3, 'meeting')
      //GESTION MEETING
      dispatch(pushMeet(dataPiocheTemp[playedCoords.findIndex(coord => coord === player[playerTurn].coords) +1].meeting))
      // il faudrait pouvoir mettre en pause ici le temps de la résolution...

      // setMooves(0)
      // if(playerTurn < player.length -1){
      //   setPlayerTurn(playerTurn +1)
      // }else{
      //   setPlayerTurn(0);
      //   setNbTours(nbTours +1)
      // }
    }else if(isAderyn && playedCoords.includes(id) && dataPiocheTemp[playedCoords.findIndex(coord => coord === player[playerTurn].coords && playedCoords.includes(id)) +1].meeting) {
      console.log(4, 'meeting')
      //GESTION MEETING
      dispatch(pushMeet(dataPiocheTemp[playedCoords.findIndex(coord => coord === player[playerTurn].coords) +1].meeting))
      // il faudrait pouvoir mettre en pause ici le temps de la résolution...
      setMooves(mooves +1)
    }else if(isAderyn && playedCoords.includes(id)){
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
        
        const portals = playedCoords.map((e,i)=> {return {isPortal: (dataPiocheTemp[i].specificity === 'portail'), portalCoords: e }})
        const lastTile = dataPiocheTemp[playedCoords.findIndex(coord => coord === player[playerTurn].coords)]
        const lastTileData = dataPiocheTemp[playedCoords.findIndex(coord => coord === player[playerTurn].coords)].data
        const lastTileID = player.find((player) => player.id === playerTurn).coords;
        const coords = lastTileID.split(';');
        const x = Number(coords[0])
        const y = Number(coords[1]) 
                
        if(!isOpen){
          if(!meeting || isAderyn){
            if(playedCoords.length < dataPiocheTemp.length){
              isPlayable = (
                ((lastTileData[0] && ((playedCoords.includes(`${x};${y -1}`) && dataPiocheTemp[playedCoords.findIndex(coord => coord === `${x};${y -1}`)].data[2]) || !playedCoords.includes(`${x};${y -1}`) ) || (isArgentus && playedCoords.includes(`${x};${y-1}`)) ) && x === i && y-1 === j) ||
                ((lastTileData[1] && ((playedCoords.includes(`${x -1};${y}`) && dataPiocheTemp[playedCoords.findIndex(coord => coord === `${x -1};${y}`)].data[3]) || !playedCoords.includes(`${x -1};${y}`) ) || (isArgentus && playedCoords.includes(`${x-1};${y}`)) ) && x-1 === i && y === j) ||
                ((lastTileData[2] && ((playedCoords.includes(`${x};${y +1}`) && dataPiocheTemp[playedCoords.findIndex(coord => coord === `${x};${y +1}`)].data[0]) || !playedCoords.includes(`${x};${y +1}`) ) || (isArgentus && playedCoords.includes(`${x};${y+1}`)) ) && x === i && y+1 === j) ||
                ((lastTileData[3] && ((playedCoords.includes(`${x +1};${y}`) && dataPiocheTemp[playedCoords.findIndex(coord => coord === `${x +1};${y}`)].data[1]) || !playedCoords.includes(`${x +1};${y}`) ) || (isArgentus && playedCoords.includes(`${x+1};${y}`)) ) && x+1 === i && y === j) || 
                (lastTile.specificity === 'portail' && portals.find(e => e.isPortal && e.portalCoords === `${i};${j}` && e.portalCoords !== `${x};${y}`))

              )            
            }else{
              isPlayable = ( 
                ((lastTileData[0] && (playedCoords.includes(`${x};${y -1}`) && dataPiocheTemp[playedCoords.findIndex(coord => coord === `${x};${y -1}`)].data[2]) || (isArgentus && playedCoords.includes(`${x};${y-1}`)) ) && x === i && y-1 === j) ||
                ((lastTileData[1] && (playedCoords.includes(`${x -1};${y}`) && dataPiocheTemp[playedCoords.findIndex(coord => coord === `${x -1};${y}`)].data[3]) || (isArgentus && playedCoords.includes(`${x-1};${y}`)) ) && x-1 === i && y === j) ||
                ((lastTileData[2] && (playedCoords.includes(`${x};${y +1}`) && dataPiocheTemp[playedCoords.findIndex(coord => coord === `${x};${y +1}`)].data[0]) || (isArgentus && playedCoords.includes(`${x};${y+1}`)) ) && x === i && y+1 === j) ||
                ((lastTileData[3] && (playedCoords.includes(`${x +1};${y}`) && dataPiocheTemp[playedCoords.findIndex(coord => coord === `${x +1};${y}`)].data[1]) || (isArgentus && playedCoords.includes(`${x+1};${y}`)) ) && x+1 === i && y === j) || 
                (lastTile.specificity === 'portail' && portals.find(e => e.isPortal && e.portalCoords === `${i};${j}` && e.portalCoords !== `${x};${y}`))
              )  
            }
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