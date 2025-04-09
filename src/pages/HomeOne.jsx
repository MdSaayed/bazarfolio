import React from 'react';
import HeaderOne from '../layouts/headers/HeaderOne';
import FooterOne from '../layouts/footers/FooterOne';
import { AboutOne, BrandsOne, Faq, HeroOne, ServicesOne, TestimonialsOne, Works } from '../components';
import BlogsOne from '../components/blogs/BlogsOne';

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

            {/* Blogs */}
            <BlogsOne />

            {/* Brands */}
            <BrandsOne />

            {/* Footer */}
            <FooterOne />
        </>
    );
};

export default HomeOne;