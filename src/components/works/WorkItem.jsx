import React from 'react';

const WorkItem = ({ number, title, description, image }) => {
    return (
        <div className="group flex items-center justify-between pt-12 pb-20 border-t border-white/10">
            <div className='flex flex-col md:flex-row md:items-center justify-between'>
                <span className="outlined-number text-5xl font-bold leading-none mb-2 md:mb-0">
                    {number}
                </span>

                <div className="flex-1 pr-6 md:px-6 space-y-2 max-w-2xl relative">
                    <h3 className="text-white text-xl font-semibold">{title}</h3>
                    <p className="text-white/70 text-sm">{description}</p>
                    <img 
                        className="absolute top-1/2 left-full max-w-xs transform -translate-y-1/2 hidden group-hover:block group-focus:block transition-all duration-300 z-10" 
                        src={image} 
                        alt={title} 
                        />
                </div>
            </div>

            <div className='cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="3j4" viewBox="0 0 40 41" fill="none">
                    <path d="M11.25 3.16797C10.9185 3.16797 10.6006 3.29966 10.3661 3.53409C10.1317 3.76851 10 4.08645 10 4.41797C10 4.74949 10.1317 5.06743 10.3661 5.30185C10.6006 5.53627 10.9185 5.66797 11.25 5.66797H33.2325L2.86627 36.0342C2.63857 36.27 2.51258 36.5857 2.51543 36.9135C2.51828 37.2412 2.64974 37.5547 2.8815 37.7865C3.11326 38.0182 3.42677 38.1497 3.75452 38.1526C4.08226 38.1554 4.39802 38.0294 4.63377 37.8017L35 7.43547V29.418C35 29.7495 35.1317 30.0674 35.3661 30.3019C35.6006 30.5363 35.9185 30.668 36.25 30.668C36.5815 30.668 36.8995 30.5363 37.1339 30.3019C37.3683 30.0674 37.5 29.7495 37.5 29.418V4.41797C37.5 4.08645 37.3683 3.76851 37.1339 3.53409C36.8995 3.29966 36.5815 3.16797 36.25 3.16797H11.25Z" fill="white"/>
                </svg>
            </div>
        </div>
    );
};

export default WorkItem;