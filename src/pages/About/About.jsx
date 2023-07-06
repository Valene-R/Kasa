import React, { Fragment } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BannerAbout from '../../components/BannerAbout/BannerAbout';
import CollapseSection from '../../components/CollapseSection/CollapseSection';

const About = () => {
    return (
        <Fragment>
            <Header />
            <main>
                <BannerAbout />
                <CollapseSection />
            </main>
            <Footer />
        </Fragment>
    );
};

export default About;