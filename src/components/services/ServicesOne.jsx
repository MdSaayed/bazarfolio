import React from 'react';
import {Subtitle, Title} from "../../components"
import services_one from "../../data/services-one-data"
import CardOne from './CardOne';

const ServicesOne = () => {


    return (
        <section  id='services' className='bg-blue-gray'>
            <div className="container">
                {/* Subtitle */}
                <Subtitle text='Our Services' variant='white'/>

                {/* Title */}
                <Title text='Exceptional Services – Crafting Innovative Solutions for Your Success.' styleClassName='max-w-[800px] text-3xl' variant='gradient' />

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20"> 
                    {services_one?.map((service) => (
                        <CardOne key={service?.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesOne;

