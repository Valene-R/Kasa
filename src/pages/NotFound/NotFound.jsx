import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LinkReturnHome from '../../components/LinkReturnHome/LinkReturnHome';

const NotFound = () => {
    return (
        <>
            <Header /> 
            <main>         
                <h1 className='codeError'>404</h1>
                <p className='messageError'>Oups! La page que vous demandez n'existe pas.</p>
                <LinkReturnHome />
            </main>
            <Footer />       
        </>
    );
};

export default NotFound;