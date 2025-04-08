import React from 'react';

const CardOne = ({service}) => {
    const {title,icon,excerpt,image} = service;

    return (
        <div className='border-[0.2px] border-white text-white rounded-2xl p-4 md:p-8'>
            <div className="flex justify-between items-center">
                <h2 className='text-xl font-semibold leading-primary'>{title}</h2>
                <div className="w-12 h-12 p-3 border border-white self-center rounded-full flex items-center justify-center">
                    <img className="w-full h-full object-contain" src={icon} alt="" />
                </div>
            </div>

            <p className='font-base font-normal leading-normal tracking-desc mt-20 mb-8'>{excerpt}</p>

            <img className=' w-full object-cover' src={image} alt="" />
        </div>
    );
};

export default CardOne;