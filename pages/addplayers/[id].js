import { useRouter } from 'next/router';
import Addplayer from '../../components/Addplayer';
import { useDispatch } from 'react-redux';
import { gameId } from '../../reducers/games';

function Addplayers() {
    const router = useRouter();
    const dispatch = useDispatch();
    dispatch(gameId(router.query.id));

    return (
        <div >
            {/* {router.query.id} */}
            <Addplayer />

        </div>
    )
}

export default Addplayers;