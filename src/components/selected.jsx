import React from 'react';

const Selected = ({ selectedPlayers, handleDeletePlayer, handleAddMorePlayers }) => {
    return (
        <div className="mt-4">
            <h2 className="text-xl font-semibold">
                Selected Players ({selectedPlayers.length} / 6)
            </h2>
            {selectedPlayers.length === 0 ? (
                <p>No players selected.</p>
            ) : (
                <div className="gap-5 pt-2">
                    {selectedPlayers.map(player => (
                        <div key={player.playerId} className="card bg-base-100 shadow-xl flex flex-row w-10/12 mx-auto border-2">
                        <div>
                            <img className='w-24 rounded-2xl mt-8 ml-4' src={player.image} alt={player.name} />
                        </div>
                        <div className="card-body gap-4">
                            <h2 className="card-title">
                                <i className="fa-solid fa-user"></i>
                                {player.name}
                            </h2>
                            <div className='flex text-xs'>
                                <p className='font-normal'>Type: {player.type}</p>
                            </div>
                            <div className='flex text-sm'>
                                <p className='font-semibold'>Price: ${player.price}</p>
                            </div>
                            
                        </div>
                        <div>
                        <button 
                                onClick={() => handleDeletePlayer(player.playerId)} 
                                className='bg-red-500 text-white rounded-md px-2 py-1 mt-14 mr-14'
                            >
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </div>
                    ))}
                </div>
            )}
            <button 
                className="mt-4 bg-lime-500 text-white px-4 py-2 rounded" 
                onClick={handleAddMorePlayers}
            >
                Add More Players
            </button>
        </div>
    );
};

export default Selected;
