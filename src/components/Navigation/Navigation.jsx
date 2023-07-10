import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul className='homeAboutLink'>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/About" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>A propos</li>
                </NavLink>
            </ul> 
        </nav>
    );
};

export default Navigation;