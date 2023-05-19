import { useEffect, useState } from 'react';
import styles from '../styles/Inventory.module.css';
import Image from 'next/image';
import { useSelector } from 'react-redux';


function Inventory() {

  const type = useSelector((state) => state.header.value.type);
  //const inventoryPlayersOrigin = useSelector((state) => state.inventory.value);

  const [inventoryPlayersOrigin, setInventoryPlayersOrigin] = useState([
    {type: 'aderyn', powers:[null,null], tresor: 12.5, life: 1, weapons: ['sword',null], key: 1, scroll: ['fireScroll',null,null] },
    {type: 'argentus', powers:[null,null], tresor: 10, life: 5, weapons: ['daggers',null], key: null, scroll: [null,'firescroll',null] },
    {type: 'taia', powers:[null,null], tresor:8, life: 5, weapons: [null,null], key: null, scroll: ['lifescroll',null,null] },
    {type: 'horan', powers:[null,null], tresor: 11, life: 5, weapons: ['axe',null], key: null, scroll: [null,null,null] },
  ])
  
  const [inventoryPlayer, setInventoryPlayer] = useState(inventoryPlayersOrigin.find(e => e.type === type))
  
  const [inventoryPlayers, setInventoryPlayers] = useState([
    {type: 'aderyn', powers:[null,null], tresor: 12.5, life: 1, weapons: ['sword',null], key: 1, scroll: ['fireScroll',null,null] },
    {type: 'argentus', powers:[null,null], tresor: 10, life: 5, weapons: [null,null], key: null, scroll: [null,null,null] },
    {type: 'taia', powers:[null,null], tresor:8, life: 5, weapons: [null,null], key: null, scroll: [null,null,null] },
    {type: 'horan', powers:[null,null], tresor: 11, life: 5, weapons: [null,null], key: null, scroll: [null,null,null] },
  ])

  const shiftArray = (arr, player) => {
    const index = inventoryPlayersOrigin.findIndex(e => e.type === player)
    for(let i=0; i<index; i++){
      arr.push(arr.shift()) 
    }
    return arr
  }

  useEffect(()=>{
    setInventoryPlayer(inventoryPlayersOrigin.find(e => e.type === type))
    setInventoryPlayers(shiftArray(inventoryPlayersOrigin, type)) 
  },[type])

  
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
          onMouseLeave={()=> setInventoryPlayer(inventoryPlayersOrigin.find(e => e.type === type))}
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
    if(inventoryPlayer.weapons[i]){
      weaponsStyle[i] = {backgroundImage: `url(inventaire/${inventoryPlayer.weapons[i]}.png)`,backgroundSize: 'contain'}
    }
  }

 
  let keyStyle = {backgroundImage: 'url(inventaire/key-background.png)', backgroundSize: 'contain'}
  if(inventoryPlayer.key){
    keyStyle = {backgroundImage: 'url(inventaire/key.png)', backgroundSize: 'contain'}
  }

  const scrollsStyle = [{backgroundImage: 'url(inventaire/parchemin.png)',backgroundSize: 'contain'},{backgroundImage: 'url(inventaire/parchemin.png)',backgroundSize: 'contain'}, {backgroundImage: 'url(inventaire/parchemin.png)',backgroundSize: 'contain'}];
  for(let i=0; i<inventoryPlayer.scroll.length; i++){
    if(inventoryPlayer.scroll[i]){
      scrollsStyle[i] = {backgroundImage: `url(inventaire/${inventoryPlayer.scroll[i]}.png)`,backgroundSize: 'contain'}
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

