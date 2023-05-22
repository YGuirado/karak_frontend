import { useEffect, useState } from 'react';
import styles from '../styles/Inventory.module.css';
import Image from 'next/image';
import { useSelector } from 'react-redux';


function Inventory() {

  const type = useSelector((state) => state.header.value.type);
  const inventoryPlayersReducer = useSelector((state) => state.inventory.value);
  
  const [inventoryPlayers, setInventoryPlayers] = useState(inventoryPlayersReducer)
  const [inventoryPlayer, setInventoryPlayer] = useState(inventoryPlayersReducer.find(e => e.type === type))

  const shiftArray = (arr, player) => {
    const index = inventoryPlayersReducer.findIndex(e => e.type === player)
    let array1 = arr.slice(index, arr.length)
    let array2 = arr.slice(0,index)
    return array1.concat(array2)
  }

  useEffect(()=>{
    setInventoryPlayer(inventoryPlayersReducer.find(e => e.type === type))
    setInventoryPlayers(shiftArray(inventoryPlayersReducer, type)) 
  },[type,inventoryPlayersReducer])

  
  let players = [];
  for(let i=0; i<inventoryPlayers.length; i++){
    let isActive = 1;
    if(inventoryPlayer.type !== inventoryPlayers[i].type) isActive = .5;
    players.push(
      <div key={i} style={{width: '72px', height: '72px', borderTopLeftRadius: '15%', borderTopRightRadius: '15%', backgroundColor:'white'}}>
        <Image
          id={i}
          alt={inventoryPlayers[i].type} 
          width={100}
          height={100}
          style={{ borderTopLeftRadius: '15%', borderTopRightRadius: '15%', opacity: `${isActive}`}}
          src={`/heros/${inventoryPlayers[i].type}.png`}
          onMouseEnter={(e) => setInventoryPlayer(inventoryPlayers[e.target.id])}
          onMouseLeave={()=> setInventoryPlayer(inventoryPlayersReducer.find(e => e.type === type))}
        />
      </div>
    )
  }
  
//gestion de la pool de vie
  let vie = []; 
  for(let i=0; i<5; i++){
    if(i < 5 - inventoryPlayer.life){
      vie.push(
        <img
          key={i}
          style={{width: '30px'}}
          src={`/inventaire/mort.png`}
        />
      )
    }else{
      vie.push(
        <img
          key={i}
          style={{width: '30px'}}
          src={`/inventaire/vie.png`}
        />
      )
    }
    
  }

  const weaponsStyle = [{backgroundImage: 'url(inventaire/arme.png)',backgroundSize: 'contain'},{backgroundImage: 'url(inventaire/arme.png)',backgroundSize: 'contain'}];
  for(let i=0; i<inventoryPlayer.weapons.length; i++){
    if(inventoryPlayer.weapons[i][0]){
      weaponsStyle[i] = {backgroundImage: `url(inventaire/${inventoryPlayer.weapons[i][0]}.png)`,backgroundSize: 'contain'}
    }
  }

 
  let keyStyle = {backgroundImage: 'url(inventaire/key-background.png)', backgroundSize: 'contain'}
  if(inventoryPlayer.key){
    keyStyle = {backgroundImage: 'url(inventaire/key.png)', backgroundSize: 'contain'}
  }

  const scrollsStyle = [{backgroundImage: 'url(inventaire/parchemin.png)',backgroundSize: 'contain'},{backgroundImage: 'url(inventaire/parchemin.png)',backgroundSize: 'contain'}, {backgroundImage: 'url(inventaire/parchemin.png)',backgroundSize: 'contain'}];
  for(let i=0; i<inventoryPlayer.scroll.length; i++){
    if(inventoryPlayer.scroll[i][0]){
      scrollsStyle[i] = {backgroundImage: `url(inventaire/${inventoryPlayer.scroll[i][0]}.png)`,backgroundSize: 'contain'}
    }
  }

  let scrolls = [];

  let inventory = (
    <div className={styles.inventory}>
        <div className={styles.vie}>
          {vie}
        </div>
        <div className={styles.objets}>
          <div className={styles.objetsrow}>
            <div className={styles.invWeapons} style={weaponsStyle[0]}></div>
            <div className={styles.invWeapons} style={weaponsStyle[1]}></div>
            <div className={styles.invKey} style={keyStyle}></div>
          </div>
          <div className={styles.objetsrow}>
            <div className={styles.invScroll} style={scrollsStyle[0]}></div>
            <div className={styles.invScroll} style={scrollsStyle[1]}></div>
            <div className={styles.invScroll} style={scrollsStyle[2]}></div>
          </div>
        </div>

        <div className={styles.pouvoirs}>
          <img
            style={{width: '35px', margin: '10%'}}
            src={`/inventaire/pouvoirs/horan-1.png`}
          />
          <img
            style={{width: '35px', margin: '10%'}}
            src={`/inventaire/pouvoirs/horan-2.png`}
          />
          <p className='tresor' style={{width: '35px', height: '35px', margin: '10%', backgroundColor: '#E6A840', borderRadius: '50%', textAlign: 'center', paddingTop:'5px',fontSize: '16px', fontFamily: 'Permanent Marker'}}>
            {inventoryPlayer.tresor}
          </p>
        </div>
      </div>
  );
  

  return (
    <div className={styles.inventoryContainer}>
      <div className={styles.players}>
        {players}
      </div>
      {inventory}     
    </div>
  );
}

export default Inventory;

