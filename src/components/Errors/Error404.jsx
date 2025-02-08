import ErrorMessage from '../ErrorMessage/ErrorMessage';

const Error404 = () => {
    return (
        <ErrorMessage 
            errorCode="404"
            className="codeError"
            messagePart1="Oups! La page que"
            messagePart2="vous demandez n'existe pas."
        />
    );
};

export default Error404;