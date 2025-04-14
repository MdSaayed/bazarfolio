import React from 'react';
import blogs_one from "../../data/blogs"
import CardOne from './CardOne';

const BlogsOne = () => {
  return (
    <section id='blog' className="py-16 bg-white"> 
      <div className="container mx-auto px-4">
        <span className='subtitle-black'>Our Blog</span>
        <h2 className='title-black'>Explore Our Latest Blog Posts.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 lg:mt-20">
          {blogs_one?.map((blog,index)=> <CardOne key={index} blog={blog} />)}
        </div>
      </div>
    </section>
  );
};

export default BlogsOne;



