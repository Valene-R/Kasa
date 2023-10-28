import React from 'react';
import Layout from '../../components/Layout/Layout';
import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Cards/Cards';
import imageHome from '../../assets/img/imageHome1.png';

const Home = () => {
    return (
        <Layout>
            <Banner 
                imageSrc={imageHome} 
                altText="Falaise au bord de la mer" 
                bannerTitle="Chez vous," 
                bannerSubtitle=" partout et ailleurs" 
                className="homeBanner"
            />
            <Cards />
        </Layout>
    );
};

export default Home;