import { useRouter } from 'next/router';
import Addplayer from '../../components/Addplayer';
import { useDispatch } from 'react-redux';
import { gameId } from '../../reducers/games';

function Addplayers() {
    const router = useRouter();
    const dispatch = useDispatch();
    console.log('In [id].js, router.query.id: ', router.query.id);

    return (
        <div >
            <Addplayer />

        </div>
    )
}

export default Addplayers;