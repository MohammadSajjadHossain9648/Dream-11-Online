import React, { Suspense } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';

const fetchPlayers = async() => {
  const res = await fetch('/players.json');
  return res.json();
}

const App = () => {

  const playersPromise = fetchPlayers();

  return (
    <div className='max-w-[1100px] mx-auto'>
      <NavBar></NavBar>
      <Suspense fallback={<p>wait for loading....</p>}>
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>
    </div>
  );
};

export default App;