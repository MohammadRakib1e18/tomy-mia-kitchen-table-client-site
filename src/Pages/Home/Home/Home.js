import React from 'react';
import Header from '../Header/Header';
import HomeServices from '../HomeServices/HomeServices';
import Offers from '../Offers/Offers';
import WorkProcess from '../WorkProcess/WorkProcess';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HomeServices></HomeServices>
            <Offers></Offers>
            <WorkProcess></WorkProcess>
        </div>
    );
};

export default Home;