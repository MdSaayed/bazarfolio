import React from 'react';
import blogs_one from "../../data/blogs"
import {Subtitle , Title} from "../../components"
import CardOne from './CardOne';

const BlogsOne = () => {
  return (
    <section id='blog' className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Subtile */}
        <Subtitle text='Our Blog' />

        {/* Title */}
        <Title text="Explore Our Latest Blog Posts." variant='black' />


        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 mt-20">
          {blogs_one?.map((blog) => (
            <CardOne key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsOne;
