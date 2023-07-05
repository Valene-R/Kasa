import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({accommodation}) => {
    /* Déstructure de la prop "accommodation" pour extraire les valeurs nécessaires 
    pour éviter de mettre accommodation.cover et accommodation.title */
    const { id, cover, title } = accommodation;
    return (
        <article>
            <NavLink to={`/AccommodationSheet/${id}`} className='cardLink'>
            <div className='accommodationCard'>
                <img src={cover} alt={title} />
                <h2 className='accommodationTitle'>{title}</h2>
            </div>
            </NavLink>
        </article>
    );
};

export default Card;