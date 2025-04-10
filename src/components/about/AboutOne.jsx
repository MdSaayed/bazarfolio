import React from 'react';
import { Subtitle, Description, Button, Stats} from '../../components';
import  Sleek from "/assets/images/sleek-metallic.svg";
import  PhoneOnText from "/assets/images/phone-inside-text.svg";
import  Aboutimage from "/assets/images/about-1.png";

const AboutOne = () => {
    return (
        <section id='about'>
            <div className="container overflow-hidden py-32">
                {/* Subtitle */}
                <Subtitle text={'Our About'} /> 

                {/* Title */}
                <h2 className="text-base lg:text-[2rem] font-semibold mt-4 text-slate-gray max-w-[916px] leading-[1.6]">Our digital strategies and design expertise focus on Crafting Unique & Impactful <img className='hidden lg:inline-block' src={PhoneOnText} /> Digital Experiences with Creativity <img className='hidden lg:inline-block' src={Sleek} /> and Precision. promoting social economy businesses, cutting-edge</h2>

                <div className='flex flex-col justify-center items-end mt-10 mr-10'>
                    <div className='space-y-12'>
                        <Description text="With a strong passion for design and development, I specialize in creating stunning, user-friendly websites and digital solutions. My journey in (2018-2025)has been all about innovation, problem-solving, and delivering high-quality work that makes a difference." maxWidth='max-w-[750px]' />

                        {/* Button */}
                        <Button text='More about us' />
                    </div>
                </div>

                {/* About image */}
                <div className='mt-20'>
                    <img className='w-full' src={Aboutimage} alt="About" />
                </div>

                {/* Stats */}
                <Stats />
            </div>
        </section>
    );
};

export default AboutOne;