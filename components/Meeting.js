import { useEffect, useState } from 'react';
//import styles from '../styles/Meeting.module.css';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { updateTresor, useKey, updateInventory, looseLife } from '../reducers/inventory';
import { updateMeet } from '../reducers/meeting';

function Meeting() {
    const dispatch = useDispatch();
    const meeting = useSelector((state) => state.meeting.value);
    const player = useSelector((state) => state.header.value.type);
    const mooves = useSelector((state) => state.header.value.mooves);
    const inventory = useSelector((state) => state.inventory.value);
    const inventoryPlayer = inventory[inventory.findIndex(e => e.type === player)]
    const position = useSelector((state) => state.position.value.position)
    const actualMeeting = meeting.find(e => e.coords === position)
    const [isModalCoffreOpen, setIsModalCoffreOpen] = useState(false);
    const [isModalCombatOpen, setIsModalCombatOpen] = useState(false);
    const [showLoot, setShowLoot] = useState(false);
    

    let modalStyle = {}
    if(isModalCoffreOpen || isModalCombatOpen || showLoot){
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
                            if(mooves === 4){
                                dispatch(updateMeet({...actualMeeting, isSkiped: true}))
                            }
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
                    src={`/mobs/${actualMeeting?.meeting.mob}.png`}
                    width={100}
                    height={100}
                    />
                </div>
                <div style={{marginLeft: '20px'}}>
                    {showLoot ? (<div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <div style={{width: '72px', height: '72px'}}>
                            <Image
                            alt='monstre'
                            src={`/inventory/${actualMeeting.meeting.loot}.png`}
                            width={100}
                            height={100}
                            />
                        </div>
                        <button
                            style={{marginLeft: '20px'}}
                            type='button'
                            onClick={() => {
                                setShowLoot(false)
                                dispatch(updateMeet({...actualMeeting, isResolved: true}))
                                setIsModalCombatOpen(false)
                                dispatch(updateInventory({loot: actualMeeting.meeting.loot, player}))
                            }}
                        >
                        Ramasse ton loot
                    </button></div>) : (                   
                    <><button
                        type='button'
                        onClick={() => {
                            setShowLoot(true)
                        }}
                    >
                        Gagner
                    </button>
                    <button
                        type='button'
                        onClick={() => {
                            dispatch(updateMeet({...actualMeeting, isSkiped: true}))
                            dispatch(looseLife(player))
                            //mettre à jour la pioche
                            setIsModalCombatOpen(false)
                            //dispatch(updateMeet({...actualMeeting, isSkiped: false}))                          
                        }}
                    >
                        Perdre
                    </button></>)} 
                </div>
            </div>
        )
    }
    

    useEffect(()=>{ 
        if(actualMeeting && actualMeeting.meeting.mob === 'closed_chest' && !actualMeeting.isSkiped && !actualMeeting.isResolved ){
            setIsModalCoffreOpen(true)
        }else if(actualMeeting && actualMeeting.meeting.mob !== 'closed_chest' && !actualMeeting.isSkiped && !actualMeeting.isResolved ){
            setIsModalCombatOpen(true)
        }else if(!actualMeeting){
            setIsModalCoffreOpen(false);
            setIsModalCombatOpen(false)
        }
    },[actualMeeting, player])
    
    return (
        <div style={modalStyle}>
            {modal}
            {modalCombat}
        </div>
    )
};

export default Meeting;