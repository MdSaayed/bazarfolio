import React from 'react';
import { Subtitle } from "../../components";
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
                <span className='subtitle-white'>Our Clients & Partners</span>

                {/* Modified grid container */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 
                    justify-items-center gap-4 sm:gap-6 md:gap-8 mt-12 px-4 sm:px-0">
                    {logos?.map((logo, index) => (
                        <BrandLogo key={index} logo={logo} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandsOne;