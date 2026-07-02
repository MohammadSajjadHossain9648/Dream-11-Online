import React from 'react';
import SelectedPlayer from '../SelectedPLayer/SelectedPlayer';

const SelectedPlayers = ({ selectedPlayers, handleAddMorePlayers, handleToRemovePlayer }) => {

    console.log(selectedPlayers);

    return (
        <div>
            <div className="space-y-4">
                {
                    selectedPlayers.map(selectedPlayer => <SelectedPlayer key={selectedPlayer.id} selectedPlayer={selectedPlayer} handleToRemovePlayer={handleToRemovePlayer}></SelectedPlayer>)
                }
            </div>
            <button onClick={handleAddMorePlayers} className="btn text-sm font-bold bg-green-400 outline outline-green-400 outline-offset-8 mt-12 ml-2.5">Add More Player</button>
        </div>
    );
};

export default SelectedPlayers;