import React from 'react';
import logoFooter from "../../assets/img/logoFooter.png"

const Footer = () => {
    return (
        <div className='logoCopyright'>
            <div className='logoFooter'>
                <img src={logoFooter} alt="logo Kasa" />
            </div>
            <p className='copyright'>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;
