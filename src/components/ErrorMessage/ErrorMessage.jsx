import React from 'react';

const ErrorMessage = () => {
    return (
        <>
            <h1 className='codeError'>404</h1>
            <p className='messageError'><span>Oups! La page que </span><span className='space'>vous demandez n'existe pas.</span></p> 
        </>
    );
};

export default ErrorMessage;