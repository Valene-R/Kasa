import React from 'react';
import Collapse from '../../components/Collapse/Collapse';


const AccommodationDescription = ({ title, location, tags, host, rating, description, equipments }) => {

    const fillStars = rating; // Nombre d'étoiles remplies

    // La boucle "map" itère sur chaque valeur d'étoile et retourne un élément SVG correspondant
    const starsContent = [1, 2, 3, 4, 5].map((star) => (
       
        <svg key={star} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 2L9.223 8.5H2.437L7.434 13.054 5.918 20.5 12 16.55 18.082 20.5 16.566 13.054 21.563 8.5H14.777L12 2z"
                // Si la valeur de l'étoile est inférieure ou égale au nombre d'étoiles remplies (`fillStars`), la couleur est "#FF6060",
                // sinon la couleur est "#E3E3E3"
                fill={star <= fillStars ? "#FF6060" : "#E3E3E3"}
            />
        </svg>
    ));


    return (
        <section >
            <article className='description'>
            <div>
                <h1 className='accommodationTitle'>{title}</h1>
                <p className='accommodationLocation'>{location}</p>
                <ul className='tags'>
                    {tags.map((tag) =>
                        <li key={tag} className='tag'>{tag}</li>
                    )}  
                </ul>
            </div>
            <aside className='owner'>
                <div className='ownerNamePicture'>
                    <h3 className='nameOwner'>{host.name}</h3>
                    <img className='pictureOwner'src={host.picture} alt='Portrait du propriétaire' />
                </div>
                
                <div className='stars'>
                    <span className='star'>{starsContent}</span>
                </div>
            </aside>
            </article>
               
                <div className='accommodationCollapses'>
                    {/* Composant Collapse pour la description */}
                    <Collapse className='collapseDescription' title="Description" content={<>{description}</>} />
                    {/* Composant Collapse pour les équipements */}
                    <Collapse className='collapseEquipment' title="Équipements" content={<>
                        {/* Utilisation de map pour itérer sur la liste d'équipements */}
                        {equipments.map((item, index) => 
                            // Utilisation de React.Fragment pour envelopper chaque élément et fournir une clé unique
                            // permet de regrouper plusieurs éléments JSX sans créer d'élément parent supplémentaire
                            <React.Fragment key={index}>
                                {item}
                                {/* Ajout d'un saut de ligne après chaque équipement */}
                                <br />
                            </React.Fragment>)}</>} />
                </div>
        </section>  
    );
};

export default AccommodationDescription;