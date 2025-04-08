import React from 'react';
import {Subtitle, Title} from "../../components"
import testimonials_data from "../../data/testimonials"
import CardOne from './CardOne';

const TestimonialsOne = () => {
    return (
        <section className='bg-blue-gray'>
            <div className="container">
                {/* Header */}
                <div className='flex flex-wrap justify-between items-start gap-y-8 gap-x-16'>
                    <Subtitle text='Testimonials' textColor='white' styleclassName='z-20' />
                    <Title
                    text="We've empowered countless clients to reach their goals and their feedback is our greatest reward"
                    variant='gradient'
                    styleClassName='max-w-[792px] lg:pr-10 mt-0 z-20'
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-20">
                    {
                        testimonials_data?.map((item,index)=> <CardOne key={index} item={item} /> )
                    }
                </div>
            </div>
        </section>
    );
};

export default TestimonialsOne;