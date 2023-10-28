import React, {useEffect, useState} from 'react';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import ErrorLoadMessage from '../Errors/ErrorLoadMessage';


const Cards = () => {
    
        // En attente du chargement des données
        const [isLoading, setIsLoading] = useState(true)

        // L'erreur est vrai si pas de logement trouvé
        const [isError, setIsError] = useState(false)
    
        // Différent de null si logement trouvé
        const [cards, setCards] = useState(null)

        useEffect (() => {

            fetch('/logements.json')
                .then(response => response.json())
                .then(logements => {
                    setTimeout(() => {
                            setCards(logements)
                            setIsLoading(false)                      
                    }, 1000)
                })
                .catch(err => {
                    setIsError(true)
                    setIsLoading(false)
                })
        }, []);

        if (isLoading) {
            return <Loader />;
        }

        // Si erreur de chargement
        if(isError) {
            return <ErrorLoadMessage />;
        }

    return (
        <section className='accommodationsList'>
            {cards.map((accommodation) => (
               <Card key={accommodation.id} accommodation={accommodation} />
            ))}
        </section>
    );
};

export default Cards;