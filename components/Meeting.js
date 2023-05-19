import { useEffect, useState } from 'react';
//import styles from '../styles/Meeting.module.css';
import Image from 'next/image';
import { useSelector } from 'react-redux';

function Meeting() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalCombatOpen, setIsModalCombatOpen] = useState(false);
    const meeting = useSelector((state) => state.meeting.value);
    const player = useSelector((state) => state.header.value.type);
    const inventory = useSelector((state) => state.inventory.value);
    const inventoryPlayer = inventory[inventory.findIndex(e => e.type === player)]

    let modal;
    if(isModalOpen){
        modal = (
            <div>
                <p>Coffre fermé</p> 
                <button
                    type='button'
                    onClick={() => setIsModalOpen(false)}
                >
                    utilise ta clé
                </button>
            </div>
        )
    }

    let modalCombat;
    useEffect(()=>{
        if(meeting.mob === 'coffre'){
            console.log('coffre')
            setIsModalOpen(true)
            if(inventoryPlayer.key)
            console.log('trésor +1 key -1')
            // reducer inventory tresor +=1
            // reducer inventory key -1
            // reducer meeting enlever le meeting

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