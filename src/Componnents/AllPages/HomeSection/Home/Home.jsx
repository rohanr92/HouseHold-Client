import React from 'react';
import Banner from '../../../Header/Banner';
import Marquees from '../Marquess';
import PostJob from '../PostJob';
import HomeCollection from '../HomeCollection';
import Talented from '../Talented';
import HighestService from './HighestService';
import TestimonialHome from '../TestimonialHome';
import Faqs from '../Faqs';

const Home = () => {

    
    return (
        <div>
            <Banner></Banner>
            <Marquees></Marquees>
            <PostJob></PostJob>
            <HomeCollection></HomeCollection>
            <Talented></Talented>
            <HighestService></HighestService>
            <TestimonialHome></TestimonialHome>
            <Faqs></Faqs>
        </div>
    );
};

export default Home;