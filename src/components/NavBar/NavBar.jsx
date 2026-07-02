import React from 'react';
import logo from '../../assets/logo.png';

const NavBar = ({cost}) => {
    return (
        <div className="navbar">
            <div className="flex-1">
                <img className='h-[60px]' src={logo} alt="logo image" />
            </div>
            <div className="flex-none">
                <span className='mr-1'>{cost}</span>
                <span className='mr-4'>$ Coin</span>
            </div>
        </div>
    );
};

export default NavBar;