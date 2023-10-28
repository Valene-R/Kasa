import React from 'react';

const ErrorMessage = ({ errorCode = 'Erreur', messagePart1, messagePart2 }) => {
    return (
        <>
            <h1 className='errorLoading'>{errorCode}</h1>
            <p className='messageError'>
                <span>{messagePart1}</span>
                <span className='space'>{messagePart2}</span>
            </p> 
        </>
    );
};

export default ErrorMessage;