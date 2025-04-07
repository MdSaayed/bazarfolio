import React from 'react';
import HeaderOne from '../layouts/headers/HeaderOne';
import FooterOne from '../layouts/footers/FooterOne';
import { AboutOne, HeroOne } from '../components';

const HomeOne = () => {
    return (
        <>
            {/* Header */}
            <HeaderOne />

            {/* Hero */}
            <HeroOne/>

            {/* About */}
            <AboutOne />

            {/* Footer */}
            <FooterOne />
        </>
    );
};

export default HomeOne;