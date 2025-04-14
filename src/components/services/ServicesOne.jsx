import React from 'react';
import services_one from "../../data/services-one-data";
import CardOne from './CardOne';

const ServicesOne = () => {


    return (
        <section  id='services' className='bg-blue-gray'>
            <div className="container">
                <span className='subtitle-white'>Our Services</span>
                <h2 className='title-gradient max-w-[800px]'>Exceptional Services – Crafting Innovative Solutions for Your Success.</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mt-10 lg:mt-20"> 
                    {services_one?.map((service) => (
                        <CardOne key={service?.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesOne;

