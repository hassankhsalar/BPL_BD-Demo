import React from 'react';

const Header = ({ coinCount }) => {
    return (
        <div className="navbar bg-base-100 w-11/12 mx-auto">
            <div className="flex-1">
                <img className="w-16" src="https://i.ibb.co.com/xHtCytz/logo-footer.png" alt="Logo" />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Fixture</a></li>
                    <li><a>Teams</a></li>
                    <li><a>Schedules</a></li>
                    <div className="flex items-center pt-2 ml-4">
                        <p className="mr-1">Coin: {coinCount.toLocaleString()}</p>
                        <img className="w-4 h-4 mt-1 ml-1" src="https://i.ibb.co.com/C0zX4SY/coin.png" alt="Coin Icon" />
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Header;