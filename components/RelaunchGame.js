import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
// import { RelaunchGame } from '../../../components/RelaunchGame'
import { useSelector, useDispatch } from 'react-redux'
import { setGame, setId, addPlayerNames_local, setCreator, setPlayerHeroeNames } from '../reducers/games';

import styles from '../styles/Game.module.css'

export default function RelaunchGame() {
    const router = useRouter()
    const game_in_store = useSelector((state) => state.games.game);
    const local_users = useSelector((state) => state.games.playerNames_local);

    const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
    const dispatch = useDispatch();

    useEffect(() => {
        if (!router.isReady) return
        console.log('game in store before playing: ', game_in_store)
        console.log('local user: ', local_users)
        console.log('router.query: ', router.query);


        const gameId = router.query.id
        const couples = router.query.playerHeroe
        let local_index = null
        if (/^\d+$/.test(couples.at(-1))) {
            local_index = String(couples.pop())
        }
        else {
            local_index = '0'
        }
        console.log('local_index of local_player: ', local_index, typeof local_index)

        dispatch(setId(gameId))
        dispatch(setCreator())
        const temp_array = couples.reduce( (acc, couple, ii) => {
            // console.log('ACC: ', acc)
            if (local_index.includes(String(ii))) acc.push(couple.split('_')[0])
            return acc
        }, [])
        // console.log('temp_array: ', temp_array);
        dispatch(addPlayerNames_local(temp_array))
        dispatch(setPlayerHeroeNames(couples.map(cc => {
            const dd = cc.slice(1, -1)
            // {username:..., heroe:...}
            return { username: dd.split('_')[0], heroe: dd.split('_')[1] }
        })))

        fetch(BACKEND_URL + '/getGame', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: gameId }),
        })
            .then(response => response.json())
            .then(data_game => {
                if (data_game.result === true) {
                    console.log(data_game.game);
                    dispatch(setGame(data_game.game))
                    router.push(`/game/${gameId}`)
                } else {
                    alert('Bad luck : Cannot get the game');
                }
            })
    }, [router.isReady])


    return (
        <div className={styles.container}>
            <div className={styles.meeting}>
                <div>in component RelaunchGame </div>
            </div>
        </div>
    );
}

