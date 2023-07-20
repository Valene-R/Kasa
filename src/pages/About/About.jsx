import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BannerAbout from '../../components/BannerAbout/BannerAbout';
import CollapseSection from '../../components/CollapseSection/CollapseSection';

const About = () => {
    return (
        <>
            <Header />
            <main>
                <BannerAbout />
                <CollapseSection />
            </main>
            <Footer />
        </>
    );
};

export default About;