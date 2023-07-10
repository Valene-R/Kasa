import React, { useState } from 'react';
import svgArrow from '../../assets/svg/svgArrow.jpg';

const Collapse = ({title, content}) => {
    // Utilisation du hook useState pour gérer l'état d'ouverture/fermeture du Collapse
    const [isOpen, setIsOpen] = useState(false);

    // Fonction de basculement de l'état isOpen de false à true car (!isOpen)
    const chevronToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className= {`collapse ${isOpen ? 'open' : ''}`} >
            <div className='toggle'>
                <span className='collapseTitle'>{title}</span>
                <span className='chevron'>
                    {/* Au clic la fonction chevronToggle est appelée ce qui entraîne l'inversion de l'état isOpen */}
                    <img src={svgArrow} alt="Flèche ouverture et fermeture collapse" onClick={chevronToggle} />
                </span>
            </div>
            {/* Affichage du contenu du Collapse en fonction de l'état isOpen */}
            {/* Le contenu <p>{content}</p> est rendu uniquement lorsque isOpen est vrai. */}
            <div className={`collapseContent ${isOpen ? 'open' : ''}`}>
                {isOpen && <p>{content}</p>}
            </div> 
        </div>
    );
};

export default Collapse;