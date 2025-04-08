import React from 'react';
import HeaderOne from '../layouts/headers/HeaderOne';
import FooterOne from '../layouts/footers/FooterOne';
import { AboutOne, Faq, HeroOne, ServicesOne, TestimonialsOne, Works } from '../components';

const HomeOne = () => {
    return (
        <>
            {/* Header */}
            <HeaderOne />

            {/* Hero */}
            <HeroOne/>

            {/* About */}
            <AboutOne />

            {/* Services */}
            <ServicesOne /> 

            {/* Works */}
            <Works />

            {/* Faq */}
            <Faq />

            {/* Testimonials */}
            <TestimonialsOne />

            {/* Footer */}
            <FooterOne />
        </>
    );
};

export default HomeOne;