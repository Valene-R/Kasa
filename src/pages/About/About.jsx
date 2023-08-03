import React from 'react';
import Layout from '../../components/Layout/Layout';
import BannerAbout from '../../components/BannerAbout/BannerAbout';
import CollapseSection from '../../components/CollapseSection/CollapseSection';

const About = () => {
    return (
        <Layout>
            <BannerAbout />
            <CollapseSection />
        </Layout>
    );
};

export default About;