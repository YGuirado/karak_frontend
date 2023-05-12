import Tile from './tile';
import { useState } from 'react';

function Map() {
  const row = 7;
  const col = 7;
  const rowmid = Math.floor(row/2);
  const colmid = Math.floor(col/2);

  const dataStart = {type: 'start', data: [1,1,1,1], img: './tuiles/depart_fontaine-1111.png'}
  const dataBrouillard = {type: 'brouillard', data: [null,null,null,null], img: './tuiles/brouillard.png'}
  const dataVide = {type: 'vide', data: [null,null,null,null], img: './tuiles/vide.png'}
  const allTiles = [
    {type: 'angle-fontaine', data: [1,1,0,0], img: './tuiles/angle_fontaine-1100.png'},{type: 'angle-fontaine', data: [1,1,0,0], img: './tuiles/angle_fontaine-1100.png'},
    {type: 'angle_salle', data: [1,0,0,1], img: './tuiles/angle_salle-1001.png'},{type: 'angle_salle', data: [1,0,0,1], img: './tuiles/angle_salle-1001.png'},{type: 'angle_salle', data: [1,0,0,1], img: './tuiles/angle_salle-1001.png'},{type: 'angle_salle', data: [1,0,0,1], img: './tuiles/angle_salle-1001.png'},{type: 'angle_salle', data: [1,0,0,1], img: './tuiles/angle_salle-1001.png'},{type: 'angle_salle', data: [1,0,0,1], img: './tuiles/angle_salle-1001.png'},{type: 'angle_salle', data: [1,0,0,1], img: './tuiles/angle_salle-1001.png'},{type: 'angle_salle', data: [1,0,0,1], img: './tuiles/angle_salle-1001.png'},{type: 'angle_salle', data: [1,0,0,1], img: './tuiles/angle_salle-1001.png'},{type: 'angle_salle', data: [1,0,0,1], img: './tuiles/angle_salle-1001.png'},{type: 'angle_salle', data: [1,0,0,1], img: './tuiles/angle_salle-1001.png'},{type: 'angle_salle', data: [1,0,0,1], img: './tuiles/angle_salle-1001.png'},{type: 'angle_salle', data: [1,0,0,1], img: './tuiles/angle_salle-1001.png'},
    {type: 'angle', data: [1,1,0,0], img: './tuiles/angle-1100.png'},{type: 'angle', data: [1,1,0,0], img: './tuiles/angle-1100.png'},{type: 'angle', data: [1,1,0,0], img: './tuiles/angle-1100.png'},{type: 'angle', data: [1,1,0,0], img: './tuiles/angle-1100.png'},
    {type: 'couloir-portail', data: [1,0,1,0], img: './tuiles/couloir_portail-1010.png'},{type: 'couloir-portail', data: [1,0,1,0], img: './tuiles/couloir_portail-1010.png'},{type: 'couloir-portail', data: [1,0,1,0], img: './tuiles/couloir_portail-1010.png'},{type: 'couloir-portail', data: [1,0,1,0], img: './tuiles/couloir_portail-1010.png'},
    {type: 'couloir-salle', data: [1,0,1,0], img: './tuiles/couloir_salle-1010.png'},{type: 'couloir-salle', data: [1,0,1,0], img: './tuiles/couloir_salle-1010.png'},{type: 'couloir-salle', data: [1,0,1,0], img: './tuiles/couloir_salle-1010.png'},{type: 'couloir-salle', data: [1,0,1,0], img: './tuiles/couloir_salle-1010.png'},{type: 'couloir-salle', data: [1,0,1,0], img: './tuiles/couloir_salle-1010.png'},{type: 'couloir-salle', data: [1,0,1,0], img: './tuiles/couloir_salle-1010.png'},{type: 'couloir-salle', data: [1,0,1,0], img: './tuiles/couloir_salle-1010.png'},{type: 'couloir-salle', data: [1,0,1,0], img: './tuiles/couloir_salle-1010.png'},{type: 'couloir-salle', data: [1,0,1,0], img: './tuiles/couloir_salle-1010.png'},{type: 'couloir-salle', data: [1,0,1,0], img: './tuiles/couloir_salle-1010.png'},{type: 'couloir-salle', data: [1,0,1,0], img: './tuiles/couloir_salle-1010.png'},{type: 'couloir-salle', data: [1,0,1,0], img: './tuiles/couloir_salle-1010.png'},{type: 'couloir-salle', data: [1,0,1,0], img: './tuiles/couloir_salle-1010.png'},
    {type: 'couloir', data: [1,0,1,0], img: './tuiles/couloir-1010.png'},{type: 'couloir', data: [1,0,1,0], img: './tuiles/couloir-1010.png'},{type: 'couloir', data: [1,0,1,0], img: './tuiles/couloir-1010.png'},{type: 'couloir', data: [1,0,1,0], img: './tuiles/couloir-1010.png'},
    {type: 'croix-salle', data: [1,1,1,1], img: './tuiles/croix_salle-1111.png'},{type: 'croix-salle', data: [1,1,1,1], img: './tuiles/croix_salle-1111.png'},{type: 'croix-salle', data: [1,1,1,1], img: './tuiles/croix_salle-1111.png'},{type: 'croix-salle', data: [1,1,1,1], img: './tuiles/croix_salle-1111.png'},{type: 'croix-salle', data: [1,1,1,1], img: './tuiles/croix_salle-1111.png'},{type: 'croix-salle', data: [1,1,1,1], img: './tuiles/croix_salle-1111.png'},{type: 'croix-salle', data: [1,1,1,1], img: './tuiles/croix_salle-1111.png'},{type: 'croix-salle', data: [1,1,1,1], img: './tuiles/croix_salle-1111.png'},{type: 'croix-salle', data: [1,1,1,1], img: './tuiles/croix_salle-1111.png'},{type: 'croix-salle', data: [1,1,1,1], img: './tuiles/croix_salle-1111.png'},{type: 'croix-salle', data: [1,1,1,1], img: './tuiles/croix_salle-1111.png'},{type: 'croix-salle', data: [1,1,1,1], img: './tuiles/croix_salle-1111.png'},{type: 'croix-salle', data: [1,1,1,1], img: './tuiles/croix_salle-1111.png'},{type: 'croix-salle', data: [1,1,1,1], img: './tuiles/croix_salle-1111.png'},
    {type: 'croix', data: [1,1,1,1], img: './tuiles/croix-1111.png'},{type: 'croix', data: [1,1,1,1], img: './tuiles/croix-1111.png'},{type: 'croix', data: [1,1,1,1], img: './tuiles/croix-1111.png'},{type: 'croix', data: [1,1,1,1], img: './tuiles/croix-1111.png'},{type: 'croix', data: [1,1,1,1], img: './tuiles/croix-1111.png'},{type: 'croix', data: [1,1,1,1], img: './tuiles/croix-1111.png'},{type: 'croix', data: [1,1,1,1], img: './tuiles/croix-1111.png'},
    {type: 'te-salle', data: [1,0,1,1], img: './tuiles/te_salle-1011.png'},{type: 'te-salle', data: [1,0,1,1], img: './tuiles/te_salle-1011.png'},{type: 'te-salle', data: [1,0,1,1], img: './tuiles/te_salle-1011.png'},{type: 'te-salle', data: [1,0,1,1], img: './tuiles/te_salle-1011.png'},{type: 'te-salle', data: [1,0,1,1], img: './tuiles/te_salle-1011.png'},{type: 'te-salle', data: [1,0,1,1], img: './tuiles/te_salle-1011.png'},{type: 'te-salle', data: [1,0,1,1], img: './tuiles/te_salle-1011.png'},{type: 'te-salle', data: [1,0,1,1], img: './tuiles/te_salle-1011.png'},{type: 'te-salle', data: [1,0,1,1], img: './tuiles/te_salle-1011.png'},{type: 'te-salle', data: [1,0,1,1], img: './tuiles/te_salle-1011.png'},{type: 'te-salle', data: [1,0,1,1], img: './tuiles/te_salle-1011.png'},{type: 'te-salle', data: [1,0,1,1], img: './tuiles/te_salle-1011.png'},{type: 'te-salle', data: [1,0,1,1], img: './tuiles/te_salle-1011.png'},
    {type: 'te', data: [1,0,1,1], img: './tuiles/te-1011.png'},{type: 'te', data: [1,0,1,1], img: './tuiles/te-1011.png'},{type: 'te', data: [1,0,1,1], img: './tuiles/te-1011.png'},{type: 'te', data: [1,0,1,1], img: './tuiles/te-1011.png'},{type: 'te', data: [1,0,1,1], img: './tuiles/te-1011.png'},
  ]
  
  let dataPioche=[{"type":"start","data":[1,1,1,1],"img":"./tuiles/depart_fontaine-1111.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"couloir-portail","data":[1,0,1,0],"img":"./tuiles/couloir_portail-1010.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"couloir","data":[1,0,1,0],"img":"./tuiles/couloir-1010.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"couloir","data":[1,0,1,0],"img":"./tuiles/couloir-1010.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"angle","data":[1,1,0,0],"img":"./tuiles/angle-1100.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"angle","data":[1,1,0,0],"img":"./tuiles/angle-1100.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"croix","data":[1,1,1,1],"img":"./tuiles/croix-1111.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"couloir","data":[1,0,1,0],"img":"./tuiles/couloir-1010.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"couloir-portail","data":[1,0,1,0],"img":"./tuiles/couloir_portail-1010.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"croix","data":[1,1,1,1],"img":"./tuiles/croix-1111.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"start","data":[1,1,1,1],"img":"./tuiles/depart_fontaine-1111.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"croix","data":[1,1,1,1],"img":"./tuiles/croix-1111.png"},{"type":"te","data":[1,0,1,1],"img":"./tuiles/te-1011.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"angle","data":[1,1,0,0],"img":"./tuiles/angle-1100.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"croix","data":[1,1,1,1],"img":"./tuiles/croix-1111.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"te","data":[1,0,1,1],"img":"./tuiles/te-1011.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"te","data":[1,0,1,1],"img":"./tuiles/te-1011.png"},{"type":"te","data":[1,0,1,1],"img":"./tuiles/te-1011.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"croix","data":[1,1,1,1],"img":"./tuiles/croix-1111.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"te","data":[1,0,1,1],"img":"./tuiles/te-1011.png"},{"type":"couloir-portail","data":[1,0,1,0],"img":"./tuiles/couloir_portail-1010.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"couloir-portail","data":[1,0,1,0],"img":"./tuiles/couloir_portail-1010.png"},{"type":"angle-fontaine","data":[1,1,0,0],"img":"./tuiles/angle_fontaine-1100.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"couloir-salle","data":[1,0,1,0],"img":"./tuiles/couloir_salle-1010.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"angle-fontaine","data":[1,1,0,0],"img":"./tuiles/angle_fontaine-1100.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"croix","data":[1,1,1,1],"img":"./tuiles/croix-1111.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"angle","data":[1,1,0,0],"img":"./tuiles/angle-1100.png"},{"type":"croix","data":[1,1,1,1],"img":"./tuiles/croix-1111.png"},{"type":"couloir","data":[1,0,1,0],"img":"./tuiles/couloir-1010.png"},{"type":"croix-salle","data":[1,1,1,1],"img":"./tuiles/croix_salle-1111.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"te-salle","data":[1,0,1,1],"img":"./tuiles/te_salle-1011.png"},{"type":"angle_salle","data":[1,0,0,1],"img":"./tuiles/angle_salle-1001.png"}]
  
  // useEffect(()=>{
  //   dataPioche = allTiles.sort(() => Math.random() - 0.5);
  //   dataPioche.unshift(dataStart)
  // },[])

  const container = {display: 'flex', width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center'}
  const map = {display: 'flex', width: `${col*100}px`, height: `${row*100}px`, flexDirection: 'row', flexWrap: 'wrap'}


  const [ playedTiles, setPlayedTiles ] = useState([`${rowmid};${colmid}`])
  const onTileClick = (id) => {
    setPlayedTiles([...playedTiles, id]);
  };

  const carte = []
  for (let i=0; i<row; i++){
    for (let j=0; j<col; j++){
      let card = dataVide
      let isPlayed = false
      let isPlayable = false
      const lastTileID = playedTiles[playedTiles.length-1]
      const coords = lastTileID.split(';');
      
      for(let k=0; k<playedTiles.length; k++){
        if(playedTiles[k] === `${i};${j}`) {isPlayed = true}
        if(playedTiles[k] === `${i};${j}` && card === dataVide) {card = dataPioche[k];}

        // let cardIndex = `${i};${j}`
        // if(playedTiles > 0 && playedTiles.findIndex(`${i};${j}`)>-1) cardIndex = playedTiles.findIndex(`${i};${j}`)
        // if(card !== dataPioche[k]) {card = dataPioche[cardIndex];}
        
        isPlayable = (
          (dataPioche[k].data[0] && Number(coords[0]) === i && Number(coords[1])-1 === j)||
          (dataPioche[k].data[1] && Number(coords[0])-1 === i && Number(coords[1]) === j)||
          (dataPioche[k].data[2] && Number(coords[0]) === i && Number(coords[1])+1 === j)||
          (dataPioche[k].data[3] && Number(coords[0])+1 === i && Number(coords[1]) === j)
        )
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

  return (
    <div style={container}>
      <main style={map}>
        {carte}
      </main>
    </div> 
  );
}

export default Map;
