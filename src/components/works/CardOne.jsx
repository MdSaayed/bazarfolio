import React from 'react';

const CardOne = ({work}) => {
    return (
        <div className="break-inside-avoid overflow-hidden rounded-xl relative group mb-12 z-20" >
            {/* Image */}
            {
                work.image && (
                    <div className='rounded-[20px] overflow-hidden'>
                        <img
                            src={work?.image}
                            alt={work?.title}
                            className="w-full h-auto object-cover cursor-pointer transition-transform transform duration-800 hover:scale-110 hover:rotate-2"
                            />
                    </div>
                )
            }

            {/* Overlay Text */}
            <div className="w-full mt-6 text-white opacity-100 group-hover:opacity-100 transition">
                <div className="flex justify-between items-center">
                    <p className="text-base leading-normal">{work?.type}</p>
                    <span className="text-base leading-normal block">{work?.time}</span>
                </div>
                <h3 className="font-semibold leading-[1.2] text-lg mt-4">{work?.title}</h3>
            </div>
        </div>
    );
};

export default CardOne;