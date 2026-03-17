import React from 'react';
import Banner from '../../components/home/Banner';
import HowItWorks from '../../components/home/HowItWorks';
import OurServices from '../../components/home/OurServices';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <HowItWorks></HowItWorks>
           <OurServices></OurServices>
        </div>
    );
};

export default Home;