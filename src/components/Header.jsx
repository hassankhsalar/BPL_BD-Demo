import React from 'react';

const Header = () => {
    return (
        <div className="navbar bg-base-100 w-11/12 mx-auto">
            <div className="flex-1">
              <img class="w-16" src="./public/logo.JPG" alt=""/>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <li><a>Home</a></li>
                <li><a>Fixture</a></li>
                <li><a>Teams</a></li>
                <li><a>Schedules</a></li>
                <div className="flex pt-2">
                <p> Coin</p>
                 <img className="w-4 h-4 mt-1 ml-1" src="./public/coin.png" alt=""/></div>
              </ul>
            </div>
          </div>
    );
};

export default Header;