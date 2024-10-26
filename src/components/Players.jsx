import React, { useEffect, useState } from 'react';

const Players = ({ handleSelectedPlayer }) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('/players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
            .catch(err => console.error("Failed to load players.json:", err));
    }, []);

    return (
        <div className='grid grid-cols-3 gap-5 pt-9'>
            {players.length === 0 ? (
                <p>Loading players...</p>
            ) : (
                players.map(player => (
                    <div key={player.playerId} className="card bg-base-100 shadow-xl w-10/12 mx-auto border-2">
                        <figure>
                            <img src={player.image} alt={player.name} />
                        </figure>
                        <div className="card-body gap-4">
                            <h2 className="card-title">
                                <i className="fa-solid fa-user"></i>
                                {player.name}
                            </h2>
                            <div className='flex text-sm'>
                                <p><i className="fa-solid fa-flag"></i> Country: {player.country}</p>
                                <p>{player.role}</p>
                            </div>
                            <h4 className='text-base font-semibold'>Rating</h4>
                            <div className='flex text-sm'>
                                <p className='font-semibold'>Type: {player.type}</p>
                            </div>
                            <div className='flex text-sm'>
                                <p className='font-semibold'>Price: ${player.price}</p>
                                <button onClick={() => handleSelectedPlayer(player)} className='bg-stone-200 rounded-2xl p-1'>Choose Player</button>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Players;