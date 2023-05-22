import { useEffect, useState } from 'react';
//import styles from '../styles/Meeting.module.css';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { updateTresor, useKey } from '../reducers/inventory';
import { updateMeet } from '../reducers/meeting';

function Meeting() {
    const dispatch = useDispatch();
    const meeting = useSelector((state) => state.meeting.value);
    const player = useSelector((state) => state.header.value.type);
    const inventory = useSelector((state) => state.inventory.value);
    const inventoryPlayer = inventory[inventory.findIndex(e => e.type === player)]
    const position = useSelector((state) => state.position.value.position)
    const actualMeeting = meeting.find(e => e.coords === position)
    const [isModalCoffreOpen, setIsModalCoffreOpen] = useState(false);
    const [isModalCombatOpen, setIsModalCombatOpen] = useState(false);
    
    //console.log( inventoryPlayer)

    let modalStyle = {}
    if(isModalCoffreOpen){
        modalStyle = {display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', backgroundColor: '#E8E7DD', width: '360px', height: '130px', padding: '20px', paddingTop: '30px', borderBottomRightRadius:' 20px',borderBottomLeftRadius: '20px'}
    }

    let modal;
    if(isModalCoffreOpen && inventoryPlayer.key){ 
        modal = (
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div style={{width: '72px', height: '72px'}}>
                    <Image
                    alt='Coffre fermé'
                    src={`/mobs/closed-chest.png`}
                    width={100}
                    height={100}
                    />
                </div>
                <div style={{marginLeft: '20px'}}>
                    <button
                        type='button'
                        onClick={() => {
                            if(inventoryPlayer.key){
                                dispatch(useKey(player))
                                dispatch(updateTresor(player))
                                dispatch(updateMeet({...actualMeeting, isResolved: true}))
                                //mettre à jour la pioche
                                setIsModalCoffreOpen(false)
                            }
                        }}
                    >
                        Ouvrir ?
                    </button> 
                </div>
            </div>
        )
    }else if(isModalCoffreOpen && !inventoryPlayer.key){
        modal = (
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{width: '72px', height: '72px'}}>
                    <Image
                    alt='Coffre fermé'
                    src={`/mobs/closed-chest.png`}
                    width={100}
                    height={100}
                    />
                </div>
                <div style={{marginLeft: '20px'}}>
                    <p>Revenez avec une clef</p>
                    <button
                        type='button'
                        onClick={() => {
                            dispatch(updateMeet({...actualMeeting, isSkiped: true}))
                            setIsModalCoffreOpen(false)
                        }}
                    >
                        OK
                    </button> 
                </div>
            </div>
        )
    }

    let modalCombat;
    
    if(isModalCombatOpen){
        modalCombat = (
            <div style={{width: '400px', height: '400px', border: '1mm ridge red', borderRadius:'10%',  display: 'flex', backgroundColor:'#fff', flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
                <h1>Combat</h1>
                <p>Un monstre apparait: {meeting.mob} avec une force de: {meeting.strength}</p>
                <button
                    type='button'
                    onClick={() => {                        
                            setIsModalCombatOpen(false)                        
                    }}
                >
                    roll dice
                </button>             
                <div>
                <p>Ton équipement: {inventoryPlayer.weapons[0][0]} avec une force de {inventoryPlayer.weapons[0][1]}</p>
                <p>Total équipement: 5</p>
                <p>Tu as parchemin de feu </p>
                <div><p>résolution combat</p></div>
                <button>
                    Ramasse ton loot
                </button>
                </div>
            </div>
        )
    }

    useEffect(()=>{ 
        //console.log(actualMeeting) 
        if(actualMeeting){
            if(actualMeeting.meeting.mob === 'closed-chest'){
                setIsModalCoffreOpen(true)
            }
        }else{setIsModalCoffreOpen(false);}
    },[actualMeeting])
    
    return (
        <div style={modalStyle}>
            {modal}
            {modalCombat}
        </div>
    )
};

export default Meeting;