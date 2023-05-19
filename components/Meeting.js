import { useEffect, useState } from 'react';
//import styles from '../styles/Meeting.module.css';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { updateTresor, useKey } from '../reducers/inventory';
import { clearMeet } from '../reducers/meeting';

function Meeting() {
    const dispatch = useDispatch();
    const [isModalCoffreOpen, setIsModalCoffreOpen] = useState(false);
    const [isModalCombatOpen, setIsModalCombatOpen] = useState(false);
    const meeting = useSelector((state) => state.meeting.value);
    const player = useSelector((state) => state.header.value.type);
    const inventory = useSelector((state) => state.inventory.value);
    const inventoryPlayer = inventory[inventory.findIndex(e => e.type === player)]

    //console.log( inventoryPlayer)

    let modal;
    if(isModalCoffreOpen){
        modal = (
            <div>
                <p>Coffre fermé</p> 
                <button
                    type='button'
                    onClick={() => {
                        if(inventoryPlayer.key){
                            dispatch(useKey(player))
                            dispatch(updateTresor(player))
                            //mettre à jour la pioche
                            dispatch(clearMeet())
                            setIsModalCoffreOpen(false)
                        }
                    }}
                >
                    utiliser une clé
                </button> 
                <button
                    type='button'
                    onClick={() => {
                        dispatch(clearMeet())
                        setIsModalCoffreOpen(false)
                    }}
                >
                    continuer
                </button>
            </div>
        )
    }

    let modalCombat; 

    useEffect(()=>{ 
        if(meeting.mob === 'coffre' && inventoryPlayer.key){
            setIsModalCoffreOpen(true)
        }else if(meeting.mob){
            //modal combat
        }
    },[meeting])
    
    return (
        <div style={{position: 'absolute', zIndex: 10}}>
            {modal}
            {modalCombat}
        </div>
    )
};

export default Meeting;