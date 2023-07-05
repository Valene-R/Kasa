import React from 'react';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

const Header = () => {
    return (
        <header className='logoNav'>
            <Logo />
            <Navigation />
        </header>
    );
};

export default Header;