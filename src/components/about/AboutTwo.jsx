import React from 'react';
import Timeline from '../timeline/Timeline';
 

const AboutTwo = () => {
 
  return (
    <section>
      <div className="container">
        <div className="flex justify-center">
          <span className="subtitle2">About Us</span>
        </div>
        <h2 className="title2-black text-center max-w-[530px] mx-auto">
          Crafting Impact Through Innovation
        </h2>
        <p className="text text-dark-gray text-center max-w-[586px] mx-auto">
          We’re more than just a team—we’re a collective of passionate creatives, strategists, and innovators dedicated
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-20 gap-10">
          <Timeline />
          <div>
            <img src="/assets/images/about-2.png" alt="About us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;

