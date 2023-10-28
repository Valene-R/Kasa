import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Carousel from '../../components/Carousel/Carousel';
import AccommodationDescription from '../../components/AccommodationDescription/AccommodationDescription';
import Loader from '../../components/Loader/Loader';
import ErrorLoading from '../ErrorLoading/ErrorLoading';
import NotFound from '../NotFound/NotFound';
import Layout from '../../components/Layout/Layout';

const AccommodationSheet = () => {

    // Extrait l'ID de l'URL à l'aide du hook useParams()
    const {id} = useParams(); 

    // En attente du chargement des données 
    const [isLoading, setIsLoading] = useState(true)

    // L'erreur est vrai si pas de logement trouvé
    const [isError, setIsError] = useState(false)
    const [isError404, setIsError404] = useState(false)

    // Différent de null si logement trouvé
    const [logement, setLogement] = useState(null)
    
    useEffect (() => {

        fetch('/logements.json')
            .then(response => response.json())
            .then(logements => {
                const logementFound = logements.find((item) => item.id === id);

                setTimeout(() => {
                    if(logementFound){
                        setLogement(logementFound)
                        setIsLoading(false)
                    }else{
                        setIsError404(true)
                        setIsLoading(false)
                    }
                }, 1000)
            })
            .catch(err => {
                setIsError(true)
                setIsLoading(false)
            })
        }, [id]);

    if (isLoading) {
        return <Loader />;
    }

    // Si erreur de chargement, redirige vers la page ErrorLoading
    if(isError) {
        return <ErrorLoading />;
    }

    // Si le logement n'existe pas, redirige vers la page NotFound
    if(isError404) {
        return <NotFound />;
    }

    // Logement trouvé
    return (
        <>
            <Layout>
                {/* Composant Carousel avec les images du logement */}
                <Carousel pictures={logement.pictures} />
                <AccommodationDescription
                    key={logement.id}
                    title={logement.title}
                    location={logement.location}
                    tags={logement.tags}
                    host={logement.host}
                    rating={logement.rating}
                    description={logement.description}
                    equipments={logement.equipments}
                />
            </Layout>
        </>
    );
};

export default AccommodationSheet;