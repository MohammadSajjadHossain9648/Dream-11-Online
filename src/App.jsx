import React, { Suspense, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';
import Footer from './components/Footer/Footer';
import { toast, ToastContainer } from 'react-toastify';

const fetchPlayers = async () => {
  const res = await fetch('/players.json');
  return res.json();
}
const playersPromise = fetchPlayers();


const App = () => {
  const notify1 = (name) => {
    toast.success(`Congrats to ${name}! Excited to see you shine!`, {
      position:'top-center',
      autoClose: 3000
    });
  }
  const notify2 = () => {
    toast.error(`no extra player allowed`, {
      position: 'top-center',
      autoClose: 3000
    });
  }
  const notify3 = (name) => {
    toast.error(`Remove player ${name}! See you next time!`, {
      position:'top-center',
      autoClose: 3000
    });
  }


  const [toggle, setToggle] = useState(true);
  const [cost, setCost] = useState(15000000);


  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const handleToChoosePlayer = (player) => {
    const {name, bidding_price} = player;

    if(selectedPlayers.length === 12){
      notify2();
      return ;
    }

    notify1(name);

    setCost(cost-bidding_price);

    const newSelectedPlayer = [...selectedPlayers, player];
    setSelectedPlayers(newSelectedPlayer);
  }


  const handleToRemovePlayer = (player) => {
    const {id, name, bidding_price} = player;

    notify3(name);

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
          toggle ? <h1 className="font-bold">Available Players</h1> : <h1 className="font-bold">Selected Players <span>({selectedPlayers.length}/12)</span></h1>
        }

        <div>
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

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;