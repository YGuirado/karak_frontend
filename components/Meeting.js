import { useEffect, useState } from 'react';
//import styles from '../styles/Meeting.module.css';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { updateTresor, useKey } from '../reducers/inventory';
import { updateMeet } from '../reducers/meeting';

function Meeting() {
    const dispatch = useDispatch();
    const [isModalCoffreOpen, setIsModalCoffreOpen] = useState(false);
    const [isModalCombatOpen, setIsModalCombatOpen] = useState(false);
    const meeting = useSelector((state) => state.meeting.value);
    const player = useSelector((state) => state.header.value.type);
    const inventory = useSelector((state) => state.inventory.value);
    const inventoryPlayer = inventory[inventory.findIndex(e => e.type === player)]
    const position = useSelector((state) => state.position.value.position)
    const actualMeeting = meeting.find(e => e.coords === position)

    //console.log(inventoryPlayer.weapons[0][1])

    let modal;
    if(isModalCoffreOpen){ 
        modal = (
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', position:'absolute', width: '100vw', height: '100vh', backgroundColor:'#00000080'}}>
            <div style={{width: '300px', height: '200px', border: '1mm ridge red', borderRadius:'10%', display: 'flex', justifyContent:'center', backgroundColor:'#fff', alignItems:'center'}}>
                <p>Coffre fermé</p> 
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
                    utiliser une clé
                </button> 
                <button
                    type='button'
                    onClick={() => {
                        dispatch(updateMeet({...actualMeeting, isSkiped: true}))
                        setIsModalCoffreOpen(false)
                    }}
                >
                    continuer
                </button>
            </div>
            </div>
        )
    }

    let modalCombat;
    
    if(isModalCombatOpen){
        modalCombat = (
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', position:'absolute', width: '100vw', height: '100vh', backgroundColor:'#00000080'}}>
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
            </div>
        )
    }

    useEffect(()=>{ 
        console.log(actualMeeting)
        if(actualMeeting?.mob === 'coffre' && inventoryPlayer.key){
            console.log(actualMeeting)
            setIsModalCoffreOpen(true)
        }else if(meeting?.mob){
            //modal combat
            setIsModalCombatOpen(true)
        }
        //const totalStuff = inventoryPlayer.weapons[0][1] + inventoryPlayer.weapons[1][1];
    },[meeting])
    
    return (
        <div style={{position: 'absolute', zIndex: 10}}>
            {modal}
            {modalCombat}
        </div>
    )
};

export default Meeting;