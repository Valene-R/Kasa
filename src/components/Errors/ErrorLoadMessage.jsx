import React from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const ErrorLoadMessage = () => {
    return (
        <ErrorMessage
			className="errorLoading"
            messagePart1="Oups! Une erreur s'est produite"
            messagePart2="lors du chargement."
        /> 
    );
};

export default ErrorLoadMessage;