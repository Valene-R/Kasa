import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ROUTES } from '../Router/routes';

import Carousel from '../../components/Carousel/Carousel';
import AccommodationDescription from '../../components/AccommodationDescription/AccommodationDescription';
import Loader from '../../components/Loader/Loader';
import ErrorLoading from '../ErrorLoading/ErrorLoading';
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
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
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
                console.error("Error loading file:", err);
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

    // Si aucun logement ne correspond à l’ID, redirige vers la route /not-found 
    if(isError404) {
        return <Navigate to={ROUTES.notFound} replace />;
    }

    // Logement trouvé
    return (
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
    );
};

export default AccommodationSheet;