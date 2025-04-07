import React from 'react';
import Button from '../button/Button';

const HeroOne = () => {
    return (
        <section className='bg-blue-gray'>
            <div className="container padding-y-20">
                <div className='relative bg-dark-slate grid grid-cols-1 lg:grid-cols-2 items-center gap-20 p-4 md:p-8 lg:p-12 lg:pb-0 rounded-4xl overflow-hidden'>
                    <div className='text-white z-20 order-2 lg:order-1'>
                        <span className='text-xl font-semibold leading-[1.2] mb-[10px]'>Hello, I'm Emily</span>
                        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.2] mb-6'>Web Designer</h1>
                        <p className='text-base font-normal leading-normal tracking-[0.016px] mb-8'>A personal portfolio is a collection of your work, achievements, and skills that highlights your abilities and professional growth</p>

                        {/* Button */}
                        <Button text='View a Works' />
                    </div>

                    {/* Hero image */}
                    <div className='order-1 lg:order-2 z-20'>
                        <img className='mx-auto' src="/assets/images/hero-1.png" alt="" />
                    </div>
                    
                    {/* Shape */}
                    <img className='absolute top-0 left-0 z-10' src="/assets/images/shape-1.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default HeroOne;