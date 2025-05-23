import { useState } from 'react';
import arrowLeft from '../Carousel/arrowLeft.png';
import arrowRight from '../Carousel/arrowRight.png';
import arrowLeftMobile from '../Carousel/arrowLeftMobile.png';
import arrowRightMobile from '../Carousel/arrowRightMobile.png';


const Carousel = ({pictures}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
        // Passe à l'image précédente, revient à la dernière si on est sur la première
        const previousArrow = () => {
            setCurrentImageIndex((index) => (index === 0 ? pictures.length - 1 : index - 1));   
        };

        // Passe à l'image suivante, revient à la première si on est sur la dernière
        const nextArrow = () => {
            setCurrentImageIndex((index) => (index === pictures.length - 1 ? 0 : index + 1));
        };

        // Vérifie s'il y a plus d'une image pour afficher les flèches et la numérotation
        const showArrowsAndNumbering = pictures.length > 1;

    return (
        <div className='bannerCarousel'>
            {/* Affiche les flèches et la numérotation uniquement s'il y a plus d'une image */}
            {showArrowsAndNumbering && (
                <>
                    <div className='button'>
                        <button className='previousArrow' onClick={previousArrow}>
                            <img src={arrowLeft} alt='Flèche précédente' />  
                            <img src={arrowLeftMobile} alt='Flèche précédente' className='mobile-only'/> 
                        </button>
                        <button className='nextArrow' onClick={nextArrow}>
                            <img src={arrowRight} alt='Flèche suivante' />
                            <img src={arrowRightMobile} alt='Flèche suivante' className='mobile-only' />
                        </button>
                    </div>
                
                    {/* Numérotation de l'image en cours si plusieurs images */}
                    <span className='imageNumbering'>
                        {`${currentImageIndex + 1}/${pictures.length}`}
                    </span> 
                </>  
            )}
            {/* Affiche l'image en cours */}
            <img className='imageCarousel' src={pictures[currentImageIndex]} alt={pictures[currentImageIndex].title} />
        </div>
    );
};

export default Carousel;