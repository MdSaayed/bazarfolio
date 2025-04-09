import React from 'react';

const CardOne = ({blog}) => {
    return (
        <div className="group transition-all">
            <div className="overflow-hidden rounded-[20px]">
            <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover cursor-pointer transition-transform transform duration-800 hover:scale-110 hover:rotate-2"
            />
            </div>
            <div className="mt-6 space-y-4">
            <p className="text-base text-dark-gray leading-normal">{blog?.category}</p>
            <h3 className="text-xl font-semibold leading-primary">
                {blog.title}
            </h3>
            </div>
        </div>
    );
};

export default CardOne;