import React from 'react';
import blogs_one from "../../data/blogs"
import {Subtitle , Title} from "../../components"

const BlogsOne = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Subtile */}
        <Subtitle text='Our Blog' />

        {/* Title */}
        <Title text="Explore Our Latest Blog Posts." variant='black' />


        {/* Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2  lg:grid-cols-3 mt-20">
          {blogs_one?.map((blog) => (
            <div key={blog.id} className="group transition-all">
              <div className="overflow-hidden rounded-[20px] min-h-[300px]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 space-y-4">
                <p className="text-base text-dark-gray leading-normal">{blog?.category}</p>
                <h3 className="text-xl font-semibold leading-primary">
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsOne;
