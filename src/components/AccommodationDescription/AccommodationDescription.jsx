import React from 'react';
import Collapse from '../../components/Collapse/Collapse';
import StarSvg from './StarSvg'
import Tags from '../Tags/Tags';


const AccommodationDescription = ({ title, location, tags, host, rating, description, equipments }) => {

    const fillStars = rating; // Nombre d'étoiles remplies

    // La boucle "map" itère sur chaque valeur d'étoile et retourne un élément SVG correspondant
    const starsContent = [1, 2, 3, 4, 5].map((star, index) => (    
        <StarSvg key={`star-${index}`} width={36} height={36} color={star <= fillStars ? "#FF6060" : "#E3E3E3"} />
    ));


    return (
        <section >
            <article className='description'>
            <div>
                <h1 className='accommodationTitle'>{title}</h1>
                <p className='accommodationLocation'>{location}</p>
                {/* Passe les tags en tant que propriété (props) au composant Tags */}
                <Tags tags={tags} />
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
                    <Collapse className='collapseEquipment' title="Équipements" content={
                        <>
                            {/* Utilisation de map pour itérer sur la liste d'équipements */}
                            {equipments.map((item, index) => 
                                // Utilisation de React.Fragment pour envelopper chaque élément et fournir une clé unique
                                // permet de regrouper plusieurs éléments JSX sans créer d'élément parent supplémentaire
                                <React.Fragment key={index}>
                                    {item}
                                    {/* Ajout d'un saut de ligne après chaque équipement */}
                                    <br />
                                </React.Fragment>
                            )}
                        </> 
                    } />
                </div>
        </section>  
    );
};

export default AccommodationDescription;