import React from 'react';
import Layout from '../../components/Layout/Layout';
import Banner from '../../components/Banner/Banner';
import CollapseSection from '../../components/CollapseSection/CollapseSection';
import imageAbout from '../../assets/img/imageAbout1.png';

const About = () => {
    return (
        <Layout>
            <Banner 
                imageSrc={imageAbout} 
                altText="Paysage de montagne" 
                className="aboutBanner"
            />
            <CollapseSection />
        </Layout>
    );
};

export default About;