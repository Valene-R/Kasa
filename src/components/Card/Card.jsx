import { NavLink } from 'react-router-dom';
import {ROUTES} from '../../pages/Router/routes'

const Card = ({accommodation}) => {
    /* Déstructure la prop "accommodation" pour extraire les valeurs nécessaires 
    pour éviter de mettre accommodation.cover et accommodation.title */
    const { id, cover, title } = accommodation;
    return (
        <article>
            <NavLink to={ROUTES.accommodationSheet(id)} className='cardLink'>
            <div className='accommodationCard'>
                <img src={cover} alt={title} />
                <h2 className='accommodationTitle'>{title}</h2>
            </div>
            </NavLink>
        </article>
    );
};

export default Card;