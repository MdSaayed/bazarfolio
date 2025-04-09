import React from 'react';
import {Subtitle} from "../../components";
import BrandLogo from './BrandLogo';

const BrandsOne = () => {

    const logos = [
        '/assets/images/brand-logo-2.png',
        '/assets/images/brand-logo-3.png',
        '/assets/images/brand-logo-1.png',
        '/assets/images/brand-logo-4.png',
        '/assets/images/brand-logo-5.png',
        '/assets/images/brand-logo-6.png',
    ]

    return (
        <section id='brand' className='bg-[url("/assets/images/brand-bg.png")] bg-cover bg-dark-slate'>
            <div className="container padding-y-20">
                {/* Subtitle */}
                <Subtitle text='Our Clients & Partners' variant='white' />

                {/* Brand items */}
                <div className="flex flex-wrap items-baseline gap-6 sm:gap-8 md:gap-10 overflow-x-hidden mt-12">
                    {logos?.map((logo, index) => (
                        <BrandLogo key={index} logo={logo} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandsOne;