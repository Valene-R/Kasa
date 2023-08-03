import React from 'react';
import Layout from '../../components/Layout/Layout';
import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Cards/Cards';

const Home = () => {
    return (
        <Layout>
            <Banner />
            <Cards />
        </Layout>
    );
};

export default Home;