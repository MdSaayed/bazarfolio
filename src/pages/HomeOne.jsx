import React from 'react';
import HeaderOne from '../layouts/headers/HeaderOne';
import FooterOne from '../layouts/footers/FooterOne';
import { AboutOne, HeroOne, ServicesOne, Works } from '../components';

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

            {/* Footer */}
            <FooterOne />
        </>
    );
};

export default HomeOne;