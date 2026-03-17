import React from 'react';
import Banner from '../../components/home/Banner';
import HowItWorks from '../../components/home/HowItWorks';
import OurServices from '../../components/home/OurServices';
import Brands from '../../components/home/Brands';
import FeaturesSection from '../../components/home/FeaturesSection';
import CTASection from '../../components/home/CTASection';
import Reviews from '../../components/home/Reviews';
import FAQ from '../../components/home/FAQ';

const Home = () => {
    // const reviewsPromise = fetch('/reviews.json').then(res => res.json())
        
        // console.log(reviewsPromise)
    return (
        <div className='space-y-5'>
           <Banner></Banner>
           <HowItWorks></HowItWorks>
           <OurServices></OurServices>
           <Brands></Brands>
           <FeaturesSection></FeaturesSection>
           <CTASection></CTASection>
           {/* <Reviews reviewsPromise={reviewsPromise}></Reviews> */}
           <Reviews ></Reviews>
           <FAQ></FAQ>
        </div>
    );
};

export default Home;