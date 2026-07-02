import React, { use } from 'react';
import AvailablePlayer from '../AvailablePlayer/AvailablePlayer';

const AvailablePlayers = ({ playersPromise }) => {
    const availablePlayers = use(playersPromise);

    const handleToChoosePlayer = (player) => {
        console.log(player)
    }

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                availablePlayers.map(player => <AvailablePlayer key={player.id} handleToChoosePlayer={handleToChoosePlayer} player={player}></AvailablePlayer>)
            }
        </div>
    );
};

export default AvailablePlayers;