import { useState } from 'react';
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Players from "./components/Players";
import Selected from "./components/Selected";

const App = () => {
    const [coinCount, setCoinCount] = useState(0);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [activeToggle, setActiveToggle] = useState('available');

    const handleSelectedPlayer = (player) => {
        
        if (selectedPlayers.some(selected => selected.playerId === player.playerId)) {
           alert(`${player.name} is already selected.`);
          return;
        }

        
        if (selectedPlayers.length >= 6) {
            alert("You can only select a maximum of 6 players.");
            return;
        }

        if (coinCount >= player.price) {
            setCoinCount(prevCount => prevCount - player.price);
            setSelectedPlayers(prevSelected => [...prevSelected, player]);
            alert(`${player.name} has been selected!`);
        } else {
            alert("Not enough coins to select this player.");
        }
    };

    const handleToggle = (toggle) => {
        setActiveToggle(toggle);
    };

    const handleDeletePlayer = (playerId) => {
       
        setSelectedPlayers(prevSelected => prevSelected.filter(player => player.playerId !== playerId));
        alert(`Player has been removed.`);
    };

    const handleAddMorePlayers = () => {
        setActiveToggle('available');
    };

    return (
        <div>
            <Header coinCount={coinCount} />
            <Banner setCoinCount={setCoinCount} />

            <div className='flex justify-between mt-8 px-16'>
                <div>
                    <h2 className='text-xl font-semibold'>
                        {activeToggle === 'available' ? 'Available Players' : ``}
                    </h2>
                </div>
                <div id='toggol' className='flex'>
                    <button 
                        onClick={() => handleToggle('available')} 
                        className={`px-4 py-2 rounded-l-lg ${activeToggle === 'available' ? 'bg-lime-500 text-white' : 'bg-gray-200 text-black'}`}
                    >
                        Available
                    </button>
                    <button 
                        onClick={() => handleToggle('selected')} 
                        className={`px-4 py-2 rounded-r-lg ${activeToggle === 'selected' ? 'bg-lime-500 text-white' : 'bg-gray-200 text-black'}`}
                    >
                        Selected ({selectedPlayers.length})
                    </button>
                </div>
            </div>

          
            {activeToggle === 'available' ? (
                <Players handleSelectedPlayer={handleSelectedPlayer} />
            ) : (
                <Selected 
                    selectedPlayers={selectedPlayers} 
                    handleDeletePlayer={handleDeletePlayer} 
                    handleAddMorePlayers={handleAddMorePlayers}
                />
            )}

            <Footer />
        </div>
    );
};

export default App;
