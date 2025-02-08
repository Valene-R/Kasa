import { NavLink } from 'react-router-dom';

const LinkReturnHome = () => {
    return (
        <NavLink to="/" className='linkReturnHome'>
            Retourner à la page d'accueil
        </NavLink>    
    );
};

export default LinkReturnHome;