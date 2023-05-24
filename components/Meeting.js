import { useEffect, useState } from 'react';
//import styles from '../styles/Meeting.module.css';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { updateTresor, useKey, updateInventory } from '../reducers/inventory';
import { updateMeet, removeMeet } from '../reducers/meeting';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice, faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';

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
    const [showButton, setShowButton] = useState(true);
    const [showScoreBoard, setShowScoreBoard] = useState(false);

    const [firstDice, setFirstDice] =useState(null);
    const [secondDice, setSecondDice] =useState(null);
    const [totalCombatDice, setTotalCombatDice] = useState(null);
    const [totalStuffOnPlayer, setTotalStuffOnPlayer] = useState(0);
    

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

     const rollDice = () => {
            const dice1 = Math.floor(Math.random() * 6) + 1;
            const dice2 = Math.floor(Math.random() * 6) + 1;

            if(dice1 === 1) setFirstDice(<FontAwesomeIcon icon={faDiceOne} style={{color: "#145d20", size: 'lg',}} />);
            if(dice1 === 2) setFirstDice(<FontAwesomeIcon icon={faDiceTwo} style={{color: "#145d20", size: 'lg',}} />);
            if(dice1 === 3) setFirstDice(<FontAwesomeIcon icon={faDiceThree} style={{color: "#145d20", size: 'lg',}} />);
            if(dice1 === 4) setFirstDice(<FontAwesomeIcon icon={faDiceFour} style={{color: "#145d20", size: 'lg',}} />);
            if(dice1 === 5) setFirstDice(<FontAwesomeIcon icon={faDiceFive} style={{color: "#145d20", size: 'lg',}} />);
            if(dice1 === 6) setFirstDice(<FontAwesomeIcon icon={faDiceSix} style={{color: "#145d20", size: 'lg',}} />);

            if(dice2 === 1) setSecondDice(<FontAwesomeIcon icon={faDiceOne} style={{color: "#145d20", size: 'lg',}} />);
            if(dice2 === 2) setSecondDice(<FontAwesomeIcon icon={faDiceTwo} style={{color: "#145d20", size: 'lg',}} />);
            if(dice2 === 3) setSecondDice(<FontAwesomeIcon icon={faDiceThree} style={{color: "#145d20", size: 'lg',}} />);
            if(dice2 === 4) setSecondDice(<FontAwesomeIcon icon={faDiceFour} style={{color: "#145d20", size: 'lg',}} />);
            if(dice2 === 5) setSecondDice(<FontAwesomeIcon icon={faDiceFive} style={{color: "#145d20", size: 'lg',}} />);
            if(dice2 === 6) setSecondDice(<FontAwesomeIcon icon={faDiceSix} style={{color: "#145d20", size: 'lg',}} />);
            
            setTotalCombatDice(20);

            if(inventoryPlayer.weapons[0] === 'daggers') {
                if(inventoryPlayer.weapons[1] === null) setTotalStuffOnPlayer(1);
                else if (inventoryPlayer.weapons[1] === 'daggers') setTotalStuffOnPlayer(2);
                else if (inventoryPlayer.weapons[1] === 'sword') setTotalStuffOnPlayer(3);
                else if (inventoryPlayer.weapons[1] === 'axe') setTotalStuffOnPlayer(4);
            }
            else if(inventoryPlayer.weapons[0] === 'sword') {
                if(inventoryPlayer.weapons[1] === null) setTotalStuffOnPlayer(2);
                else if (inventoryPlayer.weapons[1] === 'daggers') setTotalStuffOnPlayer(3);
                else if (inventoryPlayer.weapons[1] === 'sword') setTotalStuffOnPlayer(4);
                else if (inventoryPlayer.weapons[1] === 'axe') setTotalStuffOnPlayer(5);
            }
            else if(inventoryPlayer.weapons[0] === 'axe') {
                if(inventoryPlayer.weapons[1] === null) setTotalStuffOnPlayer(3);
                else if (inventoryPlayer.weapons[1] === 'daggers') setTotalStuffOnPlayer(4);
                else if (inventoryPlayer.weapons[1] === 'sword') setTotalStuffOnPlayer(5);
                else if (inventoryPlayer.weapons[1] === 'axe') setTotalStuffOnPlayer(6);
            }           

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
                            onClick={() => { actualMeeting.meeting.mob === 'dragon' ? (dispatch(updateInventory({loot: actualMeeting.meeting.loot, player})), setShowScoreBoard(true)) :
                                (setShowLoot(false),
                                dispatch(updateMeet({...actualMeeting, isResolved: true})),
                                setIsModalCombatOpen(false),
                                dispatch(updateInventory({loot: actualMeeting.meeting.loot, player})),
                                setFirstDice(null),
                                setSecondDice(null),
                                setTotalCombatDice(null),
                                setTotalStuffOnPlayer(0))
                            }}
                        >
                        Ramasse ton loot
                    </button></div>) : (<>
                        {showButton && <FontAwesomeIcon icon={faDice} shake style={{size: 'lg',}} 
                        onClick={() =>{ rollDice(), setShowButton(!showButton)}}/>}
                    <div>
                    {firstDice}
                    {secondDice}
                    {/* <div>Bonus équipement: {totalStuffOnPlayer} </div>
                    <div>Résultat combat: {totalCombatDice+totalStuffOnPlayer}</div> */}
                    {!showButton &&<>
                    <div>Bonus équipement: {totalStuffOnPlayer} </div>
                    <div>Résultat combat: {totalCombatDice+totalStuffOnPlayer}</div>
                    <button onClick={ () => {
                        totalCombatDice > actualMeeting.meeting.strength ? 
                        (setShowLoot(true), setShowButton(!showButton), setFirstDice(null), setSecondDice(null), setTotalCombatDice(null), setTotalStuffOnPlayer(0)) : 
                        (dispatch(updateMeet({...actualMeeting, isSkiped: true})), setIsModalCombatOpen(false), setShowButton(!showButton), setFirstDice(null), setSecondDice(null), setTotalCombatDice(null), setTotalStuffOnPlayer(0))
                    }}>OK</button></>}
                    </div></> )}             
                </div>
            </div>
        )
    }

    for(let i=0; i<inventory.length; i++){
        let playersScore = <div>{inventory[i].type} tresor: {inventory[i].tresor}</div>
    }

    let scoreBoard;
    if(showScoreBoard) {
        scoreBoard = (
            <div style={{ marginLeft: "-20px", top: '1px', position: 'absolute', backgroundColor: '#E8E7DD', height: '60vh', width: '100%', display: 'flex', borderBottomRightRadius:' 20px',borderBottomLeftRadius: '20px', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
                <div>Player1 tresors : 15</div>
                <div>Player2 tresors : 15</div>
                <div>Player3 tresors : 15</div>
                <div>Player4 tresors : 15</div>
                <div>Player5 tresors : 15</div>
                <button>Nouvelle partie</button>
                </div>
        );
    }
    

    useEffect(()=>{ 
        console.log('actualMeeting from Meetings.js', actualMeeting)
        if(actualMeeting && actualMeeting.meeting.mob === 'closed_chest' && !actualMeeting.isSkiped && !actualMeeting.isResolved ){
            console.log('coucou 1')
            setIsModalCoffreOpen(true)
        }else if(actualMeeting && actualMeeting.meeting.mob !== 'closed_chest' && !actualMeeting.isSkiped && !actualMeeting.isResolved ){
            setIsModalCombatOpen(true)
            console.log('coucou 2')
        }else if(!actualMeeting){
            console.log('coucou 3')
            setIsModalCoffreOpen(false);
            setIsModalCombatOpen(false)
        }
    },[actualMeeting, player])
    
    return (
            <div style={modalStyle}>
                {modal}
                {modalCombat}
                {scoreBoard}
            </div>            
    )
};

export default Meeting;