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
    const [slotChosed, setSlotChosed] = useState(0);

    const [showLoot, setShowLoot] = useState(false);
    const [showSlot, setShowSlot] = useState(false);

    //Verification si les slots d'inventaire sont pleins et passage T/F du state correspondant

    useEffect(() => {
        if (inventoryPlayer.weapons.every(weapon => weapon !== null)) setIsSlotWeaponsFull(true);
        if (inventoryPlayer.key !== null) setIsSlotKeyFull(true);
        if (inventoryPlayer.scroll.every(scroll => scroll !== null)) setIsSlotScrollsFull(true);
        console.log('weaponsfull:', isSlotWeaponsFull, 'keyfull:', isSlotKeyFull, 'scrollfull:', isSlotScrollsFull);
    }, [inventoryPlayer])




    let modalStyle = {}
    if (isModalCoffreOpen || isModalCombatOpen) {
        modalStyle = { display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', backgroundColor: '#E8E7DD', width: '360px', height: '130px', padding: '20px', paddingTop: '30px', borderBottomRightRadius: ' 20px', borderBottomLeftRadius: '20px' }
    }

    let modal;
    if (isModalCoffreOpen && inventoryPlayer.key) {
        modal = (
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div style={{ width: '72px', height: '72px' }}>
                    <Image
                        alt='Coffre fermé'
                        src={`/mobs/closed_chest.png`}
                        width={100}
                        height={100}
                    />
                </div>
                <div style={{ marginLeft: '20px' }}>
                    <button
                        type='button'
                        onClick={() => {
                            if (inventoryPlayer.key) {
                                dispatch(useKey(player))
                                dispatch(updateTresor(player))
                                //dispatch(updateMeet({ ...actualMeeting, isResolved: true }))
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
    } else if (isModalCoffreOpen && !inventoryPlayer.key) {
        modal = (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: '72px', height: '72px' }}>
                    <Image
                        alt='Coffre fermé'
                        src={`/mobs/closed_chest.png`}
                        width={100}
                        height={100}
                    />
                </div>
                <div style={{ marginLeft: '20px' }}>
                    <p>Revenez avec une clef</p>
                    <button
                        type='button'
                        onClick={() => {
                            dispatch(updateMeet({ ...actualMeeting, isSkiped: true }))
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
    if (isModalCombatOpen) {
        modal = (
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div style={{ width: '72px', height: '72px' }}>
                    <Image
                        alt='monstre'
                        src={`/mobs/${actualMeeting.meeting.mob}.png`}
                        width={100}
                        height={100}
                    />
                </div>
                <div style={{ marginLeft: '20px' }}>
                    {showLoot ? (
                        <div style={{ width: '72px', height: '72px' }}>
                            <Image
                                alt='monstre'
                                src={`/inventory/${actualMeeting.meeting.loot}.png`}
                                width={100}
                                height={100}
                            />
                            {showSlot ? (
                                <div>
                                    <Image
                                        alt='weapon1'
                                        src={`/inventory/${inventoryPlayer.weapons[0]}.png`}
                                        width={100}
                                        height={100}
                                        onClick={() => {
                                            dispatch(updateInventory({ loot: actualMeeting.meeting.loot, player, slotChosed: 0 }));
                                            setShowSlot(false);
                                            setIsModalCombatOpen(false);
                                        }}
                                    />
                                    <button
                                        type='button'
                                        onClick={() => {
                                            dispatch(updateInventory({ loot: actualMeeting.meeting.loot, player, slotChosed: 1 }));
                                            setShowSlot(false);
                                            setIsModalCombatOpen(false);
                                        }}
                                    >
                                        Slot 2
                                    </button>
                                    <Image
                                        alt='weapon3'
                                        src={`/inventory/${inventoryPlayer.weapons[1]}.png`}
                                        width={100}
                                        height={100}
                                        onClick={() => {
                                            dispatch(updateInventory({ loot: actualMeeting.meeting.loot, player, slotChosed: 1 }));
                                            setShowSlot(false);
                                            setIsModalCombatOpen(false);
                                        }}
                                    />
                                </div>
                            ) : (
                                <div>
                                    <button
                                        type='button'
                                        onClick={() => {
                                            if (isSlotScrollsFull || isSlotWeaponsFull || isSlotKeyFull) {
                                                if ((actualMeeting.meeting.loot === 'heal_portal' || actualMeeting.meeting.loot === 'magic_shot') && isSlotScrollsFull) {
                                                    console.log('tu as deja tous les slots scrolls complets')
                                                    setShowSlot(true);
                                                    dispatch(updateInventory({ loot: actualMeeting.meeting.loot, player, slotChosed }));
                                                } else if (actualMeeting.meeting.loot === 'key' && isSlotKeyFull) {
                                                    console.log('tu as deja tous le slot key complet')
                                                } else {
                                                    setShowSlot(true);
                                                    console.log('tu as deja tous les slots weapons complets')
                                                    dispatch(updateInventory({ loot: actualMeeting.meeting.loot, player, slotChosed }));
                                                }
                                                setShowLoot(false);
                                                setIsModalCombatOpen(false);
                                            } else {
                                                setShowLoot(false);
                                                setIsModalCombatOpen(false);
                                                dispatch(updateInventory({ loot: actualMeeting.meeting.loot, player, slotChosed }));
                                            }
                                            dispatch(updateMeet({...actualMeeting, isResolved: true}))
                                            //mettre à jour la pioche
                                            //setIsModalCombatOpen(false)
                                        }}
                                    >
                                        Ramasse ton loot
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <button
                                type='button'
                                onClick={() => {
                                    dispatch(updateMeet({ ...actualMeeting, isResolved: true }));
                                    //mettre à jour la pioche
                                    //setIsModalCombatOpen(false)
                                    setShowLoot(true);
                                }}
                            >
                                Gagner
                            </button>
                            <button
                                type='button'
                                onClick={() => {
                                    dispatch(updateMeet({ ...actualMeeting, isSkiped: true }));
                                    //mettre à jour la pioche
                                    setIsModalCombatOpen(false);
                                }}
                            >
                                Perdre
                            </button>
                        </>
                    )}
                </div>
            </div>
        );
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