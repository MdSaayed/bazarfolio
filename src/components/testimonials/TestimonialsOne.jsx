import React from 'react';
import testimonials_data from "../../data/testimonials";
import CardOne from './CardOne';

const TestimonialsOne = () => {
    return (
        <section className='bg-blue-gray'>
            <div className="container">
                <div className='flex flex-wrap justify-between items-start gap-y-8 gap-x-16'>
                    <span className='subtitle-white z-20'>Testimonials</span>
                    <h2 className='title-gradient max-w-[792px] lg:pr-10 mt-0 z-20'>We've empowered countless clients to reach their goals and their feedback is our greatest reward.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10 lg:mt-20">
                    {testimonials_data?.map((item,index)=> <CardOne key={index} item={item} /> )}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsOne;