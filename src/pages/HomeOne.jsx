import React from 'react';
import HeaderOne from '../layouts/headers/HeaderOne';
import FooterOne from '../layouts/footers/FooterOne';
import { AboutOne, BrandsOne, ContactOne, Faq, HeroOne, ServicesOne, TestimonialsOne, Works } from '../components';
import BlogsOne from '../components/blogs/BlogsOne';

const HomeOne = () => {
    return (
        <>
            <HeaderOne />
            <HeroOne/>
            <AboutOne />
            <ServicesOne /> 
            <Works />
            <Faq />
            <TestimonialsOne />
            <BlogsOne />
            <BrandsOne />
            <ContactOne />
            <FooterOne />
        </>
    );
};

export default HomeOne;