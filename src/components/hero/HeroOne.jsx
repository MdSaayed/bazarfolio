import React from 'react';
import useTypewriter from '../../hooks/useTypewriter';

const HeroOne = () => { 
    const { text, cursor } = useTypewriter(['Developer', 'Designer']);


    return (
        <section id='hero' className='kb-hero bg-blue-gray'>
            <div className="container padding-y-20">
                <div className="relative bg-dark-slate grid grid-cols-1 lg:grid-cols-2 items-center gap-20 p-4 md:p-8 lg:p-12 lg:pb-0 rounded-4xl overflow-hidden bg-[url('/assets/images/hero-bg.png')] bg-center bg-blend-overlay bg-cover">
                    <div className='text-white z-20 order-2 lg:order-1' data-aos="fade-up" data-aos-duration="500">
                        <span className='text-xl font-semibold leading-[1.2] mb-[10px]'>Hello, I'm Emily</span>
                        <h1 className='hero-title'>
                            <span>Web </span>
                            <span className="inline-flex items-baseline min-w-[180px]">
                                {text}
                                {cursor}
                            </span>
                        </h1>

                        <p className='text text-white mb-8'>
                           A personal portfolio is a collection of your work, achievements, and skills that highlights your abilities and professional growth
                        </p>

                        <a className="kb-btn-primary" href='#works'>View a Works
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
                                fill="#0E0F11"
                            />
                            </svg>
                        </a>   
                    </div>

                    <div className='order-1 lg:order-2 z-20' data-aos="fade-up" data-aos-duration="700">
                        <img className='mx-auto' src="/assets/images/hero-1.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroOne;