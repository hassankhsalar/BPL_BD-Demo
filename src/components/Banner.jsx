import React from 'react';

const Banner = ({ setCoinCount }) => {
   
    const handleClaimCredit = () => {
        setCoinCount(prevCount => prevCount + 200000);
        alert("200,000 coins have been added!");
    };

    return (
        <div>
            <section className=" relative">
                <div className="relative">
                    <img 
                        src="https://i.ibb.co.com/R4hyM1L/bg-shadow.png" 
                        alt="bg-shadow" 
                        border="0" 
                        className="w-10/12 h-5/6 rounded-3xl mx-auto bg-black" 
                    />
                    <div 
                        id="floating" 
                        className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white bg-opacity-40 p-4"
                    >
                        <img 
                            src="https://i.ibb.co.com/xL6DCcQ/banner-main.png" 
                            alt="banner-main" 
                            border="0" 
                            className="mb-4" 
                        />
                        <h2 className="text-2xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h2>
                        <p className="text-lg text-gray-300">Beyond Boundaries Beyond Limits</p>
                        <button 
                            onClick={handleClaimCredit} 
                            className="text-black font-semibold mt-4 bg-gradient-to-r from-orange-50 via-yellow-200 to-pink-500 text-xs px-3 py-2 h-8 border-none rounded-md hover:bg-yellow-500"
                        >
                            Claim Free Credit
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;