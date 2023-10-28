import React from 'react';
import { NavLink } from "react-router-dom";
import {ROUTES} from '../../pages/Router/routes'

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul className='homeAboutLink'>
                <NavLink to={ROUTES.home} className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to={ROUTES.about} className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>A propos</li>
                </NavLink>
            </ul> 
        </nav>
    );
};

export default Navigation;