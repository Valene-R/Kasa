import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import data from '../../data/data.json';
import Carousel from '../../components/Carousel/Carousel';
import AccommodationDescription from '../../components/AccommodationDescription/AccommodationDescription';


const AccommodationSheet = () => {
    // Extrait l'ID de l'URL à l'aide du hook usParams()
    const {id} = useParams();

    // Obtient la fonction de navigation du hook useNavigate()
    // Cette fonction permet de rediriger l'utilisateur vers la page NotFound si besoin
    const navigationNotFound = useNavigate();

    // Recherche le logement correspondant à l'ID
    const accommodationId = data.find((item) => item.id === id);
    
    // Utilise le hook useEffect pour exécuter une action lorsque la valeur de accommodationId change
    useEffect (() => {
        // Vérifie si le logement correspondant à l'ID existe
        if (!accommodationId) {
            // Si le logement n'existe pas, redirige vers la page NotFound
            navigationNotFound('/notFound');
        }
    }, [accommodationId, navigationNotFound]);

    // Récupère les images du logement si accommodationId existe, sinon utilise un tableau vide
    const pictures = accommodationId ? accommodationId.pictures : [];

    // Si le logement n'existe pas, retourne null pour ne pas afficher le reste du contenu de la page
    if (!accommodationId) {
        return null; 
    }

    return (
        <>
            <Header />
            <main>
                {/* Composant Carousel avec les images du logement */}
                <Carousel pictures={pictures} />
                <AccommodationDescription
                    key={accommodationId.id}
                    title={accommodationId.title}
                    location={accommodationId.location}
                    tags={accommodationId.tags}
                    host={accommodationId.host}
                    rating={accommodationId.rating}
                    description={accommodationId.description}
                    equipments={accommodationId.equipments}
                />
            </main>
            <Footer />
        </>
    );
};

export default AccommodationSheet;