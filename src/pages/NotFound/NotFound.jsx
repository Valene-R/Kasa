import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LinkReturnHome from '../../components/LinkReturnHome/LinkReturnHome';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const NotFound = () => {
    return (
        <>
            <Header /> 
            <main>         
                <ErrorMessage />
                <LinkReturnHome />
            </main>
            <Footer />       
        </>
    );
};

export default NotFound;