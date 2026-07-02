import React, { Suspense, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPLayers from './components/SelectedPLayers/SelectedPLayers';

const fetchPlayers = async() => {
  const res = await fetch('/players.json');
  return res.json();
}

const App = () => {

  const playersPromise = fetchPlayers();

  const [toggle, setToggle] = useState(true);


  return (
    <div className='max-w-[1100px] mx-auto'>
      <NavBar></NavBar>
      <div className="flex justify-between my-8">
        {
          toggle ? <h1 className="">Available Players</h1> : <h1 className="">Selected Players <span>(0/12)</span></h1>
        }
                
        <div className="">
          <button onClick={() => setToggle(true)} className={`btn rounded-l-3xl px-4 font-bold ${toggle? 'bg-green-400': ''}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`btn rounded-r-3xl px-4 font-bold ${toggle? '': 'bg-green-400'}`}>Selected<span>(0)</span></button>
        </div>
      </div>
      <div className="">
        {
          toggle?
            <Suspense fallback={<p>wait for loading....</p>}>
              <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
            </Suspense>:
            <SelectedPLayers></SelectedPLayers>
        }
      </div>
    </div>
  );
};

export default App;