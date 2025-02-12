import Collapse from '../../components/Collapse/Collapse';
import StarSvg from './StarSvg';
import Tags from '../Tags/Tags';
import { formatLocation } from '../../utils/format';

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
                <p className='accommodationLocation'>{formatLocation(location)}</p>
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
                    <Collapse className='collapseDescription' title="Description" content={<p>{description}</p>} />
                    {/* Composant Collapse pour les équipements */}
                    <Collapse className='collapseEquipment' title="Équipements" content={
                        <ul>
                            {/* Utilisation de map pour itérer sur la liste d'équipements */}
                            {equipments.map((equipment, index) =>
                                <li key={index}>{equipment}</li>
                            )}
                        </ul> 
                    } />
                </div>
        </section>  
    );
};

export default AccommodationDescription;