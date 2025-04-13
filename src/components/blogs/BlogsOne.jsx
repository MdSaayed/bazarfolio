import React from 'react';
import blogs_one from "../../data/blogs"
import {Subtitle , Title} from "../../components"
import CardOne from './CardOne';

const BlogsOne = () => {
  return (
    <section id='blog' className="py-16 bg-white"> 
      <div className="container mx-auto px-4">
        <span className='subtitle-black'>Our Blog</span>
        <h2 className='title-black'>Explore Our Latest Blog Posts.</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 lg:mt-20">
          <div className="group transition-all">
            <div className='overflow-hidden rounded-2xl'>
                <img 
                    src='/assets/images/blog-1.png'
                    alt=''
                    className="w-full h-full object-cover cursor-pointer transition-transform transform duration-800 hover:scale-110 hover:rotate-2"
                />
            </div>
            <div className="mt-6 space-y-4">
                <p className="text-base text-dark-gray leading-normal">UI/UX Tips</p>
                <h3 className="text-xl font-semibold leading-primary">Stay Updated with Our Latest Articles.</h3>
            </div>
          </div>
          <div className="group transition-all">
            <div className='overflow-hidden rounded-2xl'>
                <img 
                    src='/assets/images/blog-2.png'
                    alt=''
                    className="w-full h-full object-cover cursor-pointer transition-transform transform duration-800 hover:scale-110 hover:rotate-2"
                />
            </div>
            <div className="mt-6 space-y-4">
                <p className="text-base text-dark-gray leading-normal">Web Development</p>
                <h3 className="text-xl font-semibold leading-primary">The Latest in Development and Digital Trends.</h3>
            </div>
          </div>
          <div className="group transition-all">
            <div className='overflow-hidden rounded-2xl'>
                <img 
                    src='/assets/images/blog-3.png'
                    alt=''
                    className="w-full h-full object-cover cursor-pointer transition-transform transform duration-800 hover:scale-110 hover:rotate-2"
                />
            </div>
            <div className="mt-6 space-y-4">
                <p className="text-base text-dark-gray leading-normal">Tech Insights</p>
                <h3 className="text-xl font-semibold leading-primary">Inspiration and the Latest Industry News.</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsOne;



