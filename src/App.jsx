import React, { Suspense, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';
import Footer from './components/Footer/Footer';

const fetchPlayers = async () => {
  const res = await fetch('/players.json');
  return res.json();
}
const playersPromise = fetchPlayers();


const App = () => {
  const [toggle, setToggle] = useState(true);
  const [cost, setCost] = useState(15000000);


  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const handleToChoosePlayer = (player) => {
    const {id, bidding_price} = player;

    const isSelected = selectedPlayers.find(selectedPlayer => selectedPlayer.id === id);

    if(isSelected || selectedPlayers.length === 12){
      return ;
    }

    setCost(cost-bidding_price);

    const newSelectedPlayer = [...selectedPlayers, player];
    setSelectedPlayers(newSelectedPlayer);
  }


  const handleToRemovePlayer = (player) => {
    const {id, bidding_price} = player;

    const updateSelectedPLayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.id !== id);
    setSelectedPlayers(updateSelectedPLayers);

    setCost(cost + bidding_price);
  }

  const handleAddMorePlayers = () => {
    setToggle(!toggle);
  }


  return (
    <div className='max-w-[1100px] mx-auto'>

      <NavBar cost={cost}></NavBar>

      <div className="flex justify-between my-8">
        {
          toggle ? <h1 className="">Available Players</h1> : <h1 className="">Selected Players <span>({selectedPlayers.length}/12)</span></h1>
        }

        <div className="">
          <button onClick={() => setToggle(!toggle)} className={`btn rounded-l-3xl rounded-r-0 px-4 font-bold ${toggle ? 'bg-green-400' : ''}`}>Available</button>
          <button onClick={() => setToggle(!toggle)} className={`btn rounded-l-0 rounded-r-3xl px-4 font-bold ${toggle ? '' : 'bg-green-400'}`}>Selected<span>({selectedPlayers.length})</span></button>
        </div>
      </div>

      <div className="">
        {
          toggle ?
            <Suspense fallback={<p>wait for loading....</p>}>
              <AvailablePlayers handleToChoosePlayer={handleToChoosePlayer} playersPromise={playersPromise}></AvailablePlayers>
            </Suspense> :
            <SelectedPlayers handleAddMorePlayers={handleAddMorePlayers} handleToRemovePlayer={handleToRemovePlayer} selectedPlayers={selectedPlayers}></SelectedPlayers>
        }
      </div>

      <Footer></Footer>
    </div>
  );
};

export default App;