import React from 'react';
import { AboutTwo, ContactTwo, HeroTwo, ServiceScroll,  TestimonialsTwo,  WhyChooseUs } from '../components';
import HeaderOne from '../layouts/headers/HeaderOne';
import WorksTwo from '../components/works/WorksTwo';

const HomeTwo = () => {
    return (
        <>
            <HeaderOne transparent />
            <HeroTwo />   
            <ServiceScroll />
            <AboutTwo />
            <WorksTwo />
            <WhyChooseUs />
            <TestimonialsTwo />
            <ContactTwo />
        </>
    );
};

export default HomeTwo;