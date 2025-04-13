import React from 'react';
import { Subtitle, Description, Button, Stats} from '../../components';
import { Link } from 'react-router-dom';


const AboutOne = () => {
    return (
        <section id='about'>
            <div className="container overflow-hidden py-32">
                <span className='subtitle-black'>Our About</span>
                <h2 className="text-xl lg:text-[2rem] font-semibold mt-4 text-slate-gray max-w-[916px] leading-[1.6]">Our digital strategies and design expertise focus on Crafting Unique & Impactful <img className='hidden lg:inline-block' src='/assets/images/phone-inside-text.svg' /> Digital Experiences with Creativity <img className='hidden lg:inline-block' src='/assets/images/sleek-metallic.svg' /> and Precision. promoting social economy businesses, cutting-edge</h2>

                <div className='flex flex-col justify-center items-end mt-10 mr-10'>
                    <div className='space-y-12'>
                        <p className='text text-dark-slate max-w-[750px]'>With a strong passion for design and development, I specialize in creating stunning, user-friendly websites and digital solutions. My journey in (2018-2025)has been all about innovation, problem-solving, and delivering high-quality work that makes a difference.</p>

                        <Link className="kb-btn-primary" to="">More about us
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="16"
                                viewBox="0 0 20 16"
                                fill="none"
                                >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M19.9879 7C19.9919 7 19.996 7 20 7V9.0001H19.9582C15.1626 9.0198 12 12.4251 12 15.5H10C10 12.9999 11.3841 10.6065 13.6159 9.0001H0.5V7.0001H13.6161C11.3842 5.39368 10 3.00012 10 0.5H12C12 3.58118 15.1757 6.9943 19.9879 7Z"
                                    fill="white"
                                />
                                </svg>
                        </Link>
                    </div>
                </div>
                <div className='mt-20'>
                    <img className='w-full' src='/assets/images/about-1.png' alt="About" />
                </div>
                <Stats />
            </div>
        </section>
    );
};

export default AboutOne;