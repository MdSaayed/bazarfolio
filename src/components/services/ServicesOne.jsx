import React from 'react';
import {Subtitle, Title} from "../../components"
import services_one from "../../data/services-one-data"
import CardOne from './CardOne';

const ServicesOne = () => {


    return (
        <section className='bg-blue-gray'>
            <div className="container">
                {/* Subtitle */}
                <Subtitle text='Our Services' textColor='white'/>

                {/* Title */}
                <Title text='Exceptional Services – Crafting Innovative Solutions for Your Success.' styleClassName='gradient-text max-w-[800px] text-3xl' textColor='transparent' />

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

