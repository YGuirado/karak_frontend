import Tile from './tile';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faRotate } from '@fortawesome/free-solid-svg-icons';

function Map() {
  const row = 41;
  const col = 41;
  const rowmid = Math.floor(row/2);
  const colmid = Math.floor(col/2);

  const dataStart = {type: 'start', "meeting": false, data: [1,1,1,1], "isRotate": true, "rotation": 0, img: 'depart_fontaine-1111'}
  const dataVide = {type: 'vide', data: [null,null,null,null], "isRotate": false, "rotation": 0,img: 'vide'}
  
  let dataPioche=[{"type":"start","meeting": false,"data":[1,1,1,1],"isRotate":true,"rotation": 0,"img":"depart_fontaine-1111"},{"type":"couloir-salle","meeting": true,"data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir_salle-1010"},{"type":"couloir-salle","data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir_salle-1010"},{"type":"couloir-portail","data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir_portail-1010"},{"type":"couloir-salle","data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir_salle-1010"},{"type":"couloir","data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir-1010"},{"type":"couloir-salle","data":[1,0,1,0],"isRotate": false,"rotation": 0,"img":"couloir_salle-1010"},{"type":"couloir","data":[1,0,1,0],"img":"./tuiles/couloir-1010.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"angle","data":[1,1,0,0],"img":"./tuiles/angle-1100.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"angle","data":[1,1,0,0],"img":"./tuiles/angle-1100.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"croix","data":[1,1,1,1],"img":"./tuiles/croix-1111.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"couloir","data":[1,0,1,0],"img":"./tuiles/couloir-1010.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"couloir-portail","data":[1,0,1,0],"img":"./tuiles/couloir_portail-1010.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"croix","data":[1,1,1,1],"img":"./tuiles/croix-1111.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"start","data":[1,1,1,1],"img":"./tuiles/depart_fontaine-1111.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"croix","data":[1,1,1,1],"img":"./tuiles/croix-1111.png"},{"type":"te","data":[1,0,1,1],"img":"./tuiles/te-1011.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"angle","data":[1,1,0,0],"img":"./tuiles/angle-1100.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"croix","data":[1,1,1,1],"img":"./tuiles/croix-1111.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"te","data":[1,0,1,1],"img":"./tuiles/te-1011.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"te","data":[1,0,1,1],"img":"./tuiles/te-1011.png"},{"type":"te","data":[1,0,1,1],"img":"./tuiles/te-1011.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"croix","data":[1,1,1,1],"img":"./tuiles/croix-1111.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"te","data":[1,0,1,1],"img":"./tuiles/te-1011.png"},{"type":"couloir-portail","data":[1,0,1,0],"img":"./tuiles/couloir_portail-1010.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"couloir-portail","data":[1,0,1,0],"img":"./tuiles/couloir_portail-1010.png"},{"type":"angle-fontaine","data":[1,1,0,0],"img":"./tuiles/angle_fontaine-1100.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"angle-fontaine","data":[1,1,0,0],"img":"./tuiles/angle_fontaine-1100.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"croix","data":[1,1,1,1],"img":"./tuiles/croix-1111.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"angle","data":[1,1,0,0],"img":"./tuiles/angle-1100.png"},{"type":"croix","data":[1,1,1,1],"img":"./tuiles/croix-1111.png"},{"type":"couloir","data":[1,0,1,0],"img":"./tuiles/couloir-1010.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"}]

  const [dataPiocheTemp, setDataPiocheTemp] = useState(dataPioche)
  const [playedCoords, setPlayedCoords ] = useState([`${rowmid};${colmid}`]);
  const [player, setPlayer] = useState([{userName: "Sam", coords: `${rowmid};${colmid}`, prevCoords: `${rowmid};${colmid}`, type: "mage"}, {userName: "Yo", coords: `${rowmid};${colmid}`, prevCoords: `${rowmid};${colmid}`, type: "thief"}]);
  const [playerTurn, setPlayerTurn] = useState("Sam");
  const [rotation, setRotation] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isRotationValid, setIsRotationValid] = useState(false);
  
  const isMago = (player.find((player) => player.userName === playerTurn).type);
  const isThief = (player.find((player) => player.userName === playerTurn).type);

  let isWayabletemp = false;
  useEffect(() => {
    // dernière id, carte jouée par le joueur
    const previousLastTilesID = player.find((player) => player.userName === playerTurn).prevCoords
    const previousCoords = previousLastTilesID.split(';');
    // avant-dernière id, carte jouée par le joueur
    const lastTileID = player.find((player) => player.userName === playerTurn).coords;
    let lastTileData = dataPiocheTemp[playedCoords.length-1].data
    const coords = lastTileID.split(';');
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
    if(!playedCoords.includes(id)) {
      setPlayedCoords([...playedCoords, id]);
      setIsOpen(true)
    }
    
    //ajouter les coordonnées de la dernière carte jouée
    if(!playedCoords.includes(id)) {
      setPlayedCoords([...playedCoords, id])
    };

    //attribuer les coordonnées de la dernière carte jouée par chaque joueur
    const allPlayers = player;
    allPlayers.filter((player) => {
      if(player.userName === playerTurn){
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
        
        const lastTileID = player.find((player) => player.userName === playerTurn).coords;
        const coords = lastTileID.split(';');
        const isMago = (player.find((player) => player.userName === playerTurn).type);
        const meeting = dataPiocheTemp[playedCoords.length-1].meeting

        if(!isOpen){
          if(!meeting || isThief === 'thief'){
            isPlayable = (
              ((dataPiocheTemp[playedCoords.length-1].data[0] || isMago === 'mage') && Number(coords[0]) === i && Number(coords[1])-1 === j)||
              ((dataPiocheTemp[playedCoords.length-1].data[1] || isMago === 'mage') && Number(coords[0])-1 === i && Number(coords[1]) === j)||
              ((dataPiocheTemp[playedCoords.length-1].data[2] || isMago === 'mage') && Number(coords[0]) === i && Number(coords[1])+1 === j)||
              ((dataPiocheTemp[playedCoords.length-1].data[3] || isMago === 'mage') && Number(coords[0])+1 === i && Number(coords[1]) === j)
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
          data={[]} 
          isPlayed={isPlayed}
        />
      )
    }
  }  

  const container = {position: 'absolute', left: '0', top:`${row*50}px`, transform: `translateY(${-col*50}px)`, display: 'flex', width: `${col*100}px`, height: `${row*100}px`, justifyContent: 'center', alignItems: 'center'}
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