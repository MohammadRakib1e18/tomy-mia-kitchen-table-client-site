import React from 'react';
import Header from '../Header/Header';
import HomeServices from '../HomeServices/HomeServices';
import Offers from '../Offers/Offers';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HomeServices></HomeServices>
            <Offers></Offers>
        </div>
    );
};

export default Home;