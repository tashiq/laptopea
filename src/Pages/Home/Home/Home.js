import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeProducts from '../HomeProducts/HomeProducts';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HomeBanner></HomeBanner>
            <HomeProducts></HomeProducts>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;