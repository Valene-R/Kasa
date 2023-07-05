import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Cards from "../../components/Cards/Cards";

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <Banner />
                <Cards />
            </main>
            <Footer />
        </div>
    );
};

export default Home;