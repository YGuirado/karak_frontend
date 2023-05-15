import Tile from './tile';
import { useEffect, useState } from 'react';

function Map() {
  const row = 7;
  const col = 7;
  const rowmid = Math.floor(row/2);
  const colmid = Math.floor(col/2);

  const dataStart = {type: 'start', data: [1,1,1,1], img: './tuiles/depart_fontaine-1111.png'}
  const dataVide = {type: 'vide', data: [null,null,null,null], img: './tuiles/vide.png'}

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
  
  let dataPioche=[{"type":"start","data":[1,1,1,1],"img":"./tuiles/depart_fontaine-1111.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"couloir-portail","data":[1,0,1,0],"img":"./tuiles/couloir_portail-1010.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"couloir","data":[1,0,1,0],"img":"./tuiles/couloir-1010.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"couloir","data":[1,0,1,0],"img":"./tuiles/couloir-1010.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"angle","data":[1,1,0,0],"img":"./tuiles/angle-1100.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"angle","data":[1,1,0,0],"img":"./tuiles/angle-1100.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"croix","data":[1,1,1,1],"img":"./tuiles/croix-1111.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"couloir","data":[1,0,1,0],"img":"./tuiles/couloir-1010.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"couloir-portail","data":[1,0,1,0],"img":"./tuiles/couloir_portail-1010.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"croix","data":[1,1,1,1],"img":"./tuiles/croix-1111.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"start","data":[1,1,1,1],"img":"./tuiles/depart_fontaine-1111.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"croix","data":[1,1,1,1],"img":"./tuiles/croix-1111.png"},{"type":"te","data":[1,0,1,1],"img":"./tuiles/te-1011.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"angle","data":[1,1,0,0],"img":"./tuiles/angle-1100.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"croix","data":[1,1,1,1],"img":"./tuiles/croix-1111.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"te","data":[1,0,1,1],"img":"./tuiles/te-1011.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"te","data":[1,0,1,1],"img":"./tuiles/te-1011.png"},{"type":"te","data":[1,0,1,1],"img":"./tuiles/te-1011.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"croix","data":[1,1,1,1],"img":"./tuiles/croix-1111.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"te","data":[1,0,1,1],"img":"./tuiles/te-1011.png"},{"type":"couloir-portail","data":[1,0,1,0],"img":"./tuiles/couloir_portail-1010.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"couloir-portail","data":[1,0,1,0],"img":"./tuiles/couloir_portail-1010.png"},{"type":"angle-fontaine","data":[1,1,0,0],"img":"./tuiles/angle_fontaine-1100.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"angle-fontaine","data":[1,1,0,0],"img":"./tuiles/angle_fontaine-1100.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"croix","data":[1,1,1,1],"img":"./tuiles/croix-1111.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"angle","data":[1,1,0,0],"img":"./tuiles/angle-1100.png"},{"type":"croix","data":[1,1,1,1],"img":"./tuiles/croix-1111.png"},{"type":"couloir","data":[1,0,1,0],"img":"./tuiles/couloir-1010.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"}]
  
  const [playedCoords, setPlayedCoords ] = useState([`${rowmid};${colmid}`]);
  const [playedData, setPlayedData] = useState([dataStart]);
  const [player, setPlayer] = useState([{userName: "Sam", coords: "3;3", prevCoords: "3;3", type: "mage"}, {userName: "Yo", coords: "3;3", prevCoords: "3;3", type: "voleuse"}]);
  const [playerTurn, setPlayerTurn] = useState("Yo");
  const [isWayable, setIsWayable] = useState(true); 

  // fonction random pioche
  //   dataPioche = allTiles.sort(() => Math.random() - 0.5);
  //   dataPioche.unshift(dataStart)

  useEffect(() => {
    setPlayedData([... playedData, dataPioche[playedCoords.length]]);

    // LOGIQUE ROTATION
    let coord1 = player.find((player) => player.userName === playerTurn).coords.split(';')
    let coord0 = player.find((player) => player.userName === playerTurn).prevCoords.split(';')
    let data1 = playedData[playedData.length-1].data
    let data0 = playedData[playedData.length-1].data
    if(playedData[playedData.length-2]) {data0 = playedData[playedData.length-2].data}
    if( Number(coord1[0] === coord0[0] && coord1[1] < coord0[1])) setIsWayable(data1[2] === 1 && data0[0] === 1)//gauche
    else if( Number(coord1[0] < coord0[0] && coord1[1] === coord0[1])) setIsWayable(data1[3] === 1 &&  data0[1] === 1)//haut
    else if( Number(coord1[0] === coord0[0] && coord1[1] > coord0[1])) setIsWayable(data1[0] === 1  && data0[2] === 1)//droite
    else if( Number(coord1[0] > coord0[0] && coord1[1] === coord0[1])) setIsWayable(data1[1] === 1 && data0[3] === 1)//bas

    //MODALE ROTATION
    
    
  }, [playedCoords])

  

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
  };

  const carte = []
  for (let i=0; i<row; i++){

    for (let j=0; j<col; j++){
      let card = dataVide
      let isPlayed = false
      let isPlayable = false
      const lastTileID = player.find((player) => player.userName === playerTurn).coords;
      const coords = lastTileID.split(';');
      
      for(let k=0; k<playedCoords.length; k++){
        if(playedCoords[k] === `${i};${j}`) {isPlayed = true}
        if(playedCoords[k] === `${i};${j}` && card === dataVide) {
          card = dataPioche[k];
        }
        else if(playedCoords[k] === `${i};${j}` && card !== dataVide){
          card = playedData[k];
        }

        //playedData[playedData.length-1].data playedData[playedData.length].data
        //playedCoords[playedData.length-1] playedCoords[playedData.length]
     
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
      </main>
    </div> 
  );
}

export default Map;



//const modal = document.createElement('div');
// modal.classList.add(styles.modal);

// const message = document.createElement('p');
// message.textContent = `You already have a key !`;

// const button1 = document.createElement('button');
// button1.textContent = 'Keep on floor';
// button1.onclick = () => {
//   modal.remove();
//   reject('You drop the object on the floor !');
// };

// modal.appendChild(message);
// modal.appendChild(button1);

// document.body.appendChild(modal);
