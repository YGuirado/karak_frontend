import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import RelaunchGame from '../../../components/RelaunchGame'
import { useSelector, useDispatch } from 'react-redux'



export default function zzz() {
  const router = useRouter()
  const game_in_store = useSelector((state) => state.games.game);
  const local_users = useSelector((state) => state.games.playerNames_local);

  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    console.log('game in store before playing: ', game_in_store)
    console.log('local user: ', local_users)
    console.log('router.query: ', router.query);

    
  }, [])


  return (
      <div >
        <RelaunchGame />
      </div>
  );
}

