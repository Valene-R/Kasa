import React from 'react';
import logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className='logoNav'>
            <div className="logo">
                <img src={logo} alt="logo Kasa" />
            </div>
            <div className="navigation">
                <ul>
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/About" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>A Propos</li>
                    </NavLink>
                </ul> 
            </div> 
        </div>
    );
};

export default Header;