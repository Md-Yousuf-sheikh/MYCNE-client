import React from 'react';
import Header from '../../../Shared/Header/Header';
import AskQuestions from '../AskQuestions/AskQuestions';
import Banner from '../Banner/Banner';
import Catagories from '../Catagories/Catagories';
import FindDoctor from '../FindDoctor/FindDoctor';
import RegisterHome from '../RegisterHome/RegisterHome';
import Registration from '../Registration/Registration';
import Team from '../Team/Team';
import Testimonials from '../Testimonials/Testimonials';
import Working from '../Working/Working';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Team />
            <Catagories />
            <Working />
            <Registration />
            <FindDoctor />
            <AskQuestions />
            <RegisterHome />
            <Testimonials />
        </div>
    );
};

export default Home;