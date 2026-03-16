import React from 'react';

import logo from '../assets/logo.png';
const Logo = () => {
    return (
        <div className='flex items-end '>
            <img src={logo} alt="Logo" />
            <h1 className='text-2xl font-bold -ms-2'>ZapShift</h1>
        </div>
    );
};

export default Logo;