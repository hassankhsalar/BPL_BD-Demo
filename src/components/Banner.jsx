import React from 'react';

const Banner = () => {
    return (
        <div>
            <section className="border-2 relative">
                {/* Parent Container with relative positioning */}
                <div className="relative">
                    {/* Background Image */}
                    <img 
                        src="https://i.ibb.co.com/R4hyM1L/bg-shadow.png" 
                        alt="bg-shadow" 
                        border="0" 
                        className="w-full h-auto" 
                    />
                    {/* Floating Div Overlay */}
                    <div 
                        id="floating" 
                        className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white bg-opacity-40 bg-black p-4"
                    >
                        <img 
                            src="https://i.ibb.co.com/xL6DCcQ/banner-main.png" 
                            alt="banner-main" 
                            border="0" 
                            className="mb-4" 
                        />
                        <h2 className="text-2xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h2>
                        <p className="text-lg text-gray-300">Beyond Boundaries Beyond Limits</p>
                        <button className="mt-4 px-6 py-2 bg-lime-400 text-black rounded-full hover:bg-yellow-500">Claim Free Credit</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;
