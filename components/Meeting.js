import { useEffect, useState } from 'react';
//import styles from '../styles/Meeting.module.css';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { updateTresor, useKey, updateInventory } from '../reducers/inventory';
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

    const [isSlotWeaponsFull, setIsSlotWeaponsFull] = useState(false);
    const [isSlotKeyFull, setIsSlotKeyFull] = useState(false);
    const [isSlotScrollsFull, setIsSlotScrollsFull] = useState(false);

    const [showLoot, setShowLoot] = useState(false);
    
    //console.log( inventoryPlayer)

    // if(inventoryPlayer.weapons.every(weapon => weapon !== null)) setIsSlotWeaponsFull(true);
    // if(inventoryPlayer.key !== null) setIsSlotKeyFull(true);
    // if(inventoryPlayer.scroll.every(scroll => scroll !== null)) setIsSlotScrollsFull(true);

    let modalStyle = {}
    if(isModalCoffreOpen || isModalCombatOpen){
        modalStyle = {display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', backgroundColor: '#E8E7DD', width: '360px', height: '130px', padding: '20px', paddingTop: '30px', borderBottomRightRadius:' 20px',borderBottomLeftRadius: '20px'}
    }

    let modal;
    if(isModalCoffreOpen && inventoryPlayer.key){ 
        modal = (
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div style={{width: '72px', height: '72px'}}>
                    <Image
                    alt='Coffre fermé'
                    src={`/mobs/closed_chest.png`}
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
                    src={`/mobs/closed_chest.png`}
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
        modal = (
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div style={{width: '72px', height: '72px'}}>
                    <Image
                    alt='monstre'
                    src={`/mobs/${actualMeeting.meeting.mob}.png`}
                    width={100}
                    height={100}
                    />
                </div>
                <div style={{marginLeft: '20px'}}>
                    {showLoot ? (<div style={{width: '72px', height: '72px'}}>
                    <Image
                    alt='monstre'
                    src={`/inventory/${actualMeeting.meeting.loot}.png`}
                    width={100}
                    height={100}
                    />
                <button
                        type='button'
                        onClick={() => {
                            if((actualMeeting.meeting.loot === 'heal_portal' || actualMeeting.meeting.loot === 'magic_shot') && isSlotScrollsFull){

                            }
                            else if(actualMeeting.meeting.loot === 'key' && isSlotKeyFull){

                            }
                            else{

                            }
                            //dispatch(updateMeet({...actualMeeting, isResolved: true}))
                            //mettre à jour la pioche
                            //setIsModalCombatOpen(false)
                            setShowLoot(false)
                            setIsModalCombatOpen(false)
                            dispatch(updateInventory({loot: actualMeeting.meeting.loot, player}))
                        }}
                    >
                        Ramasse ton loot
                    </button></div>) : (                   
                    <><button
                        type='button'
                        onClick={() => {
                            dispatch(updateMeet({...actualMeeting, isResolved: true}))
                            //mettre à jour la pioche
                            //setIsModalCombatOpen(false)
                            setShowLoot(true)
                        }}
                    >
                        Gagner
                    </button>
                    <button
                        type='button'
                        onClick={() => {
                            dispatch(updateMeet({...actualMeeting, isSkiped: true}))
                            //mettre à jour la pioche
                            setIsModalCombatOpen(false)                            
                        }}
                    >
                        Perdre
                    </button></>)} 
                </div>
            </div>
        )
    }
    

    useEffect(()=>{ 
        console.log('actualMeeting from Meetings.js', actualMeeting) 
        if(actualMeeting && actualMeeting.meeting.mob === 'closed_chest'){
            setIsModalCoffreOpen(true)
        }else if(actualMeeting && actualMeeting.meeting.mob !== 'closed_chest'){
            setIsModalCombatOpen(true)
        }else if(!actualMeeting){
            setIsModalCoffreOpen(false);
            setIsModalCombatOpen(false)
        }
    },[actualMeeting])
    
    return (
        <div style={modalStyle}>
            {modal}
            {modalCombat}
        </div>
    )
};

export default Meeting;