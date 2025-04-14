import React from 'react';

const HeroTwo = () => {
    return (
        <section className='bg-[url("/assets/images/hero-bg-2.png")] bg-cover bg-center bg-dark-green'>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-gap-4 items-center justify-between">
                    <div className="space-y-8 order-2 md:order-none text-white">
                        <div className='hero-subtitle'>
                            <span>I’m Web a </span>
                            <span className='text-primary'>Designer</span>                
                        </div>
                        
                        <h1 className='hero-title2'>Stand Out in Every Medium.</h1>

                        <p>A passionate UI/UX designer and frontend developer crafting beautiful, user-focused digital experiences.</p>

                        <div className='flex items-center gap-4'>
                            <img src="/assets/images/rating-avatar.png" alt=""/>
                            <span className='text-base font-normal tracking-desc leading-primary text-white'>Rating 4.9</span>
                        </div>

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

                    <div className='order-1 md:order-none'>
                        <img className='mx-auto' src="/assets/images/hero-2.png" alt="" />
                    </div>

                    <div className='order-3 md:order-none space-y-0 lg:space-y-12 lg:pl-12 md:col-span-2 lg:col-auto flex flex-wrap md:flex-row lg:flex-col justify-center gap-8'>
                        <div className='stats2 space-y-6 border-b border-white text-white'>
                            <h2 className='text-center lg:text-left'>125+</h2>
                            <p className='text-center lg:text-left'>Successfull Projects Done</p>
                        </div>

                        <div className='stats2 space-y-6 border-b border-white text-white'>
                            <h2 className='text-center lg:text-left'>300+</h2>
                            <p className='text-center lg:text-left'>Satisfaction Clients</p>
                        </div>

                        <div className='stats2 space-y-6 border-b border-white text-white'>
                            <h2 className='text-center lg:text-left'>5+</h2>
                            <p className='text-center lg:text-left'>Years Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroTwo;