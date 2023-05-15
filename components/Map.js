import Tile from './tile';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faRotate } from '@fortawesome/free-solid-svg-icons';


function Map() {
  const row = 7;
  const col = 7;
  const rowmid = Math.floor(row/2);
  const colmid = Math.floor(col/2);

  const dataStart = {type: 'start', data: [1,1,1,1], "isRotate": false, "rotation": 0, img: 'depart_fontaine-1111'}
  const dataVide = {type: 'vide', data: [null,null,null,null], img: 'vide'}

  // a donner pour la DB
  // const allTiles = [
  //   {type: 'angle', specificity: 'basique', data: [1,1,0,0], img: './tuiles/angle-1100.png'},{type: 'angle', specificity: 'basique', data: [1,1,0,0], img: './tuiles/angle-1100.png'},{type: 'angle', specificity: 'basique', data: [1,1,0,0], img: './tuiles/angle-1100.png'},{type: 'angle', specificity: 'basique', data: [1,1,0,0], img: './tuiles/angle-1100.png'},
  //   {type: 'angle', specificity: 'fontaine', data: [1,1,0,0], img: './tuiles/angle_fontaine-1100.png'},{type: 'angle', specificity: 'fontaine', data: [1,1,0,0], img: './tuiles/angle_fontaine-1100.png'},
  //   {type: 'angle', specificity: 'salle', data: [1,0,0,1], img: './tuiles/angle_salle-1001.png'},{type: 'angle', specificity: 'salle', data: [1,0,0,1], img: './tuiles/angle_salle-1001.png'},{type: 'angle', specificity: 'salle', data: [1,0,0,1], img: './tuiles/angle_salle-1001.png'},{type: 'angle', specificity: 'salle', data: [1,0,0,1], img: './tuiles/angle_salle-1001.png'},{type: 'angle', specificity: 'salle', data: [1,0,0,1], img: './tuiles/angle_salle-1001.png'},{type: 'angle', specificity: 'salle', data: [1,0,0,1], img: './tuiles/angle_salle-1001.png'},{type: 'angle', specificity: 'salle', data: [1,0,0,1], img: './tuiles/angle_salle-1001.png'},{type: 'angle', specificity: 'salle', data: [1,0,0,1], img: './tuiles/angle_salle-1001.png'},{type: 'angle', specificity: 'salle', data: [1,0,0,1], img: './tuiles/angle_salle-1001.png'},{type: 'angle', specificity: 'salle', data: [1,0,0,1], img: './tuiles/angle_salle-1001.png'},{type: 'angle', specificity: 'salle', data: [1,0,0,1], img: './tuiles/angle_salle-1001.png'},{type: 'angle', specificity: 'salle', data: [1,0,0,1], img: './tuiles/angle_salle-1001.png'},{type: 'angle', specificity: 'salle', data: [1,0,0,1], img: './tuiles/angle_salle-1001.png'},
  //   {type: 'couloir', specificity: 'basique', data: [1,0,1,0], img: './tuiles/couloir-1010.png'},{type: 'couloir', specificity: 'basique', data: [1,0,1,0], img: './tuiles/couloir-1010.png'},{type: 'couloir', specificity: 'basique', data: [1,0,1,0], img: './tuiles/couloir-1010.png'},{type: 'couloir', specificity: 'basique', data: [1,0,1,0], img: './tuiles/couloir-1010.png'},
  //   {type: 'couloir', specificity: 'salle', data: [1,0,1,0], img: './tuiles/couloir_salle-1010.png'},{type: 'couloir', specificity: 'salle', data: [1,0,1,0], img: './tuiles/couloir_salle-1010.png'},{type: 'couloir', specificity: 'salle', data: [1,0,1,0], img: './tuiles/couloir_salle-1010.png'},{type: 'couloir', specificity: 'salle', data: [1,0,1,0], img: './tuiles/couloir_salle-1010.png'},{type: 'couloir', specificity: 'salle', data: [1,0,1,0], img: './tuiles/couloir_salle-1010.png'},{type: 'couloir', specificity: 'salle', data: [1,0,1,0], img: './tuiles/couloir_salle-1010.png'},{type: 'couloir', specificity: 'salle', data: [1,0,1,0], img: './tuiles/couloir_salle-1010.png'},{type: 'couloir', specificity: 'salle', data: [1,0,1,0], img: './tuiles/couloir_salle-1010.png'},{type: 'couloir', specificity: 'salle', data: [1,0,1,0], img: './tuiles/couloir_salle-1010.png'},{type: 'couloir', specificity: 'salle', data: [1,0,1,0], img: './tuiles/couloir_salle-1010.png'},{type: 'couloir', specificity: 'salle', data: [1,0,1,0], img: './tuiles/couloir_salle-1010.png'},{type: 'couloir', specificity: 'salle', data: [1,0,1,0], img: './tuiles/couloir_salle-1010.png'},{type: 'couloir', specificity: 'salle', data: [1,0,1,0], img: './tuiles/couloir_salle-1010.png'},
  //   {type: 'couloir', specificity: 'portail', data: [1,0,1,0], img: './tuiles/couloir_portail-1010.png'},{type: 'couloir', specificity: 'portail', data: [1,0,1,0], img: './tuiles/couloir_portail-1010.png'},{type: 'couloir', specificity: 'portail', data: [1,0,1,0], img: './tuiles/couloir_portail-1010.png'},{type: 'couloir', specificity: 'portail', data: [1,0,1,0], img: './tuiles/couloir_portail-1010.png'},
  //   {type: 'croix', specificity: 'basique', data: [1,0,1,0], img: './tuiles/croix-1111.png'},{type: 'croix', specificity: 'basique', data: [1,0,1,0], img: './tuiles/croix-1111.png'},{type: 'croix', specificity: 'basique', data: [1,0,1,0], img: './tuiles/croix-1111.png'},{type: 'croix', specificity: 'basique', data: [1,0,1,0], img: './tuiles/croix-1111.png'},{type: 'croix', specificity: 'basique', data: [1,0,1,0], img: './tuiles/croix-1111.png'},{type: 'croix', specificity: 'basique', data: [1,0,1,0], img: './tuiles/croix-1111.png'},{type: 'croix', specificity: 'basique', data: [1,0,1,0], img: './tuiles/croix-1111.png'},
  //   {type: 'croix', specificity: 'salle', data: [1,1,1,1], img: './tuiles/croix_salle-1111.png'},{type: 'croix', specificity: 'salle', data: [1,1,1,1], img: './tuiles/croix_salle-1111.png'},{type: 'croix', specificity: 'salle', data: [1,1,1,1], img: './tuiles/croix_salle-1111.png'},{type: 'croix', specificity: 'salle', data: [1,1,1,1], img: './tuiles/croix_salle-1111.png'},{type: 'croix', specificity: 'salle', data: [1,1,1,1], img: './tuiles/croix_salle-1111.png'},{type: 'croix', specificity: 'salle', data: [1,1,1,1], img: './tuiles/croix_salle-1111.png'},{type: 'croix', specificity: 'salle', data: [1,1,1,1], img: './tuiles/croix_salle-1111.png'},{type: 'croix', specificity: 'salle', data: [1,1,1,1], img: './tuiles/croix_salle-1111.png'},{type: 'croix', specificity: 'salle', data: [1,1,1,1], img: './tuiles/croix_salle-1111.png'},{type: 'croix', specificity: 'salle', data: [1,1,1,1], img: './tuiles/croix_salle-1111.png'},{type: 'croix', specificity: 'salle', data: [1,1,1,1], img: './tuiles/croix_salle-1111.png'},{type: 'croix', specificity: 'salle', data: [1,1,1,1], img: './tuiles/croix_salle-1111.png'},{type: 'croix', specificity: 'salle', data: [1,1,1,1], img: './tuiles/croix_salle-1111.png'},{type: 'croix', specificity: 'salle', data: [1,1,1,1], img: './tuiles/croix_salle-1111.png'},
  //   {type: 'te', specificity: 'basique', data: [1,0,1,1], img: './tuiles/te-1011.png'},{type: 'te', specificity: 'basique', data: [1,0,1,1], img: './tuiles/te-1011.png'},{type: 'te', specificity: 'basique', data: [1,0,1,1], img: './tuiles/te-1011.png'},{type: 'te', specificity: 'basique', data: [1,0,1,1], img: './tuiles/te-1011.png'},{type: 'te', specificity: 'basique', data: [1,0,1,1], img: './tuiles/te-1011.png'},
  //   {type: 'te', specificity: 'salle', data: [1,0,1,1], img: './tuiles/te_salle-1011.png'},{type: 'te', specificity: 'salle', data: [1,0,1,1], img: './tuiles/te_salle-1011.png'},{type: 'te', specificity: 'salle', data: [1,0,1,1], img: './tuiles/te_salle-1011.png'},{type: 'te', specificity: 'salle', data: [1,0,1,1], img: './tuiles/te_salle-1011.png'},{type: 'te', specificity: 'salle', data: [1,0,1,1], img: './tuiles/te_salle-1011.png'},{type: 'te', specificity: 'salle', data: [1,0,1,1], img: './tuiles/te_salle-1011.png'},{type: 'te', specificity: 'salle', data: [1,0,1,1], img: './tuiles/te_salle-1011.png'},{type: 'te', specificity: 'salle', data: [1,0,1,1], img: './tuiles/te_salle-1011.png'},{type: 'te', specificity: 'salle', data: [1,0,1,1], img: './tuiles/te_salle-1011.png'},{type: 'te', specificity: 'salle', data: [1,0,1,1], img: './tuiles/te_salle-1011.png'},{type: 'te', specificity: 'salle', data: [1,0,1,1], img: './tuiles/te_salle-1011.png'},{type: 'te', specificity: 'salle', data: [1,0,1,1], img: './tuiles/te_salle-1011.png'},{type: 'te', specificity: 'salle', data: [1,0,1,1], img: './tuiles/te_salle-1011.png'},
  // ]
  
  let dataPioche=[{"type":"start","data":[1,1,1,1],"isRotate": false,"rotation": 0,"img":"depart_fontaine-1111"},{"type":"couloir-salle","data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir_salle-1010"},{"type":"couloir-salle","data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir_salle-1010"},{"type":"couloir-portail","data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir_portail-1010"},{"type":"couloir-salle","data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"./tuiles/couloir_salle-1010.png"},{"type":"couloir","data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"./tuiles/couloir-1010.png"},{"type":"couloir-salle","data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"./tuiles/couloir_salle-1010.png"},{"type":"couloir","data":[1,0,1,0],"img":"./tuiles/couloir-1010.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"angle","data":[1,1,0,0],"img":"./tuiles/angle-1100.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"angle","data":[1,1,0,0],"img":"./tuiles/angle-1100.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"croix","data":[1,1,1,1],"img":"./tuiles/croix-1111.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"couloir","data":[1,0,1,0],"img":"./tuiles/couloir-1010.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"couloir-portail","data":[1,0,1,0],"img":"./tuiles/couloir_portail-1010.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"croix","data":[1,1,1,1],"img":"./tuiles/croix-1111.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"start","data":[1,1,1,1],"img":"./tuiles/depart_fontaine-1111.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"croix","data":[1,1,1,1],"img":"./tuiles/croix-1111.png"},{"type":"te","data":[1,0,1,1],"img":"./tuiles/te-1011.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"angle","data":[1,1,0,0],"img":"./tuiles/angle-1100.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"croix","data":[1,1,1,1],"img":"./tuiles/croix-1111.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"te","data":[1,0,1,1],"img":"./tuiles/te-1011.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"te","data":[1,0,1,1],"img":"./tuiles/te-1011.png"},{"type":"te","data":[1,0,1,1],"img":"./tuiles/te-1011.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"croix","data":[1,1,1,1],"img":"./tuiles/croix-1111.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"te","data":[1,0,1,1],"img":"./tuiles/te-1011.png"},{"type":"couloir-portail","data":[1,0,1,0],"img":"./tuiles/couloir_portail-1010.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"couloir-portail","data":[1,0,1,0],"img":"./tuiles/couloir_portail-1010.png"},{"type":"angle-fontaine","data":[1,1,0,0],"img":"./tuiles/angle_fontaine-1100.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"angle-fontaine","data":[1,1,0,0],"img":"./tuiles/angle_fontaine-1100.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"croix","data":[1,1,1,1],"img":"./tuiles/croix-1111.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"angle","data":[1,1,0,0],"img":"./tuiles/angle-1100.png"},{"type":"croix","data":[1,1,1,1],"img":"./tuiles/croix-1111.png"},{"type":"couloir","data":[1,0,1,0],"img":"./tuiles/couloir-1010.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"}]
  
  const [playedCoords, setPlayedCoords ] = useState([`${rowmid};${colmid}`]);
  const [playedData, setPlayedData] = useState([dataStart]);
  const [player, setPlayer] = useState([{userName: "Sam", coords: "3;3", prevCoords: "3;3", type: "mage"}, {userName: "Yo", coords: "3;3", prevCoords: "3;3", type: "voleuse"}]);
  const [playerTurn, setPlayerTurn] = useState("Yo");
  const [isWayable, setIsWayable] = useState(true);
  const [rotation, setRotation] = useState(0); 
  const [isOpen, setIsOpen] = useState(false); 

  const lastTileID = player.find((player) => player.userName === playerTurn).coords;
  const coords = lastTileID.split(';');
  const previousLastTilesID = player.find((player) => player.userName === playerTurn).prevCoords
  const previousCoords = previousLastTilesID.split(';');
  let lastTile = playedData[playedData.length-1]
  let lastTileData = playedData[playedData.length-1].data
  let previousLastTileData = playedData[playedData.length-1].data

  // fonction random pioche
  //   dataPioche = allTiles.sort(() => Math.random() - 0.5);
  //   dataPioche.unshift(dataStart)

  useEffect(() => {
    setPlayedData([... playedData, dataPioche[playedCoords.length]]);

    // LOGIQUE ROTATION
    if(playedData[playedData.length-2]) {previousLastTileData = playedData[playedData.length-2].data}
    if( Number(coords[0] === previousCoords[0] && coords[1] < previousCoords[1])) setIsWayable(lastTileData[2] === 1 && previousLastTileData[0] === 1)//gauche
    else if( Number(coords[0] < previousCoords[0] && coords[1] === previousCoords[1])) setIsWayable(lastTileData[3] === 1 &&  previousLastTileData[1] === 1)//haut
    else if( Number(coords[0] === previousCoords[0] && coords[1] > previousCoords[1])) setIsWayable(lastTileData[0] === 1  && previousLastTileData[2] === 1)//droite
    else if( Number(coords[0] > previousCoords[0] && coords[1] === previousCoords[1])) setIsWayable(lastTileData[1] === 1 && previousLastTileData[3] === 1)//bas

  }, [playedCoords])

  let modalContent;
    if(isOpen){
      modalContent = (
        <div>
          <FontAwesomeIcon 
          onClick={() => {
            setRotation(rotation + 1)
            const tempData = playedData
            tempData.find(tile => {
              if(tile.isRotate === false && tile === lastTile){              
                return (tile.rotation = rotation)
              }
            })
            setPlayedData(tempData)
          }} 
          icon={faRotate} />
          <FontAwesomeIcon 
          onClick={() => {
            const tempData = playedData
            tempData.find(tile => {
              if(tile.isRotate === false && tile === lastTile){              
                return (tile.isRotate = true)
              }
            })
            setRotation(0);
            setIsOpen(false);
          }} 
          icon={faCheck} />
        </div>
      )
    }

    //console.log(playedData)
  
  const onTileClick = (id) => {
    if(!playedCoords.includes(id)) setPlayedCoords([...playedCoords, id]);

    const allPlayers = player;
    allPlayers.filter((player) => {
      if(player.userName === playerTurn){
        player.prevCoords = player.coords;
        player.coords = id;
      }
    })
    setPlayer([... allPlayers]);
    setIsOpen(true)        
  };

  

  const carte = []
  for (let i=0; i<row; i++){

    for (let j=0; j<col; j++){
      let card = dataVide
      let isPlayed = false
      let isPlayable = false
      
      
      for(let k=0; k<playedCoords.length; k++){
        if(playedCoords[k] === `${i};${j}`) {isPlayed = true}
        if(playedCoords[k] === `${i};${j}` && card === dataVide) {
          card = dataPioche[k];
        }else if(playedCoords[k] === `${i};${j}` && card !== dataVide){
          card = playedData[k];
        }
     
        const tilePosition = playedData[playedCoords.indexOf(lastTileID)];
        const isMago = (player.find((player) => player.userName === playerTurn).type);

        if(isWayable){
          isPlayable = (
            ((tilePosition.data[0] || isMago === 'mage') && Number(coords[0]) === i && Number(coords[1])-1 === j)||
            ((tilePosition.data[1] || isMago === 'mage') && Number(coords[0])-1 === i && Number(coords[1]) === j)||
            ((tilePosition.data[2] || isMago === 'mage') && Number(coords[0]) === i && Number(coords[1])+1 === j)||
            ((tilePosition.data[3] || isMago === 'mage') && Number(coords[0])+1 === i && Number(coords[1]) === j)
          )
        }

      }
        carte.push(
          <Tile 
            key={`${i};${j}`} 
            id={`${i};${j}`} 
            onTileClick={(id) => onTileClick(id)} 
            isPlayable={isPlayable} 
            card={card}
            data={[]} 
            isPlayed={isPlayed}
          />
        )
    }
  }


  const container = {display: 'flex', width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center'}
  const map = {display: 'flex', width: `${col*100}px`, height: `${row*100}px`, flexDirection: 'row', flexWrap: 'wrap'}

  
  

  return (
    <div style={container}>
      <main style={map}>
        {carte}
        {modalContent}
      </main>
    </div> 
  );
}

export default Map;