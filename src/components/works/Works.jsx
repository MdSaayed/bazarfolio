import React from 'react';
import CardOne from './CardOne';

const cards = [
  {
    title: "E-Commerce App UI",
    type: "UI/UX Design",
    time: "6min",
    image: "/assets/images/work-1.png",
  },
  {
    title: "Developer Social Platform",
    type: "Web development",
    time: "5min",
    image: "/assets/images/work-2.png",
  },
  {
    title: "Minimal Dashboard UI",
    type: "Content Creator",
    time: "5min",
    image: "/assets/images/work-3.png",
  },
  {
    title: "Task Management Web App",
    type: "UI/UX Design",
    time: "5min",
    image: "/assets/images/work-4.png",
  },
];

const Works = () => {
  return (
    <section id='works' className=' bg-blue-gray relative'>
      <div className="container">
        <div className='flex flex-wrap justify-between items-start gap-y-8 gap-x-16'>
          <span className='subtitle-white z-20'>Our Works</span>
          <h2 className='title-gradient max-w-[792px] mt-0 z-20'>Creative Excellence Turning Ideas into Stunning Digital Experiences.</h2>
        </div>

        {/* Grid layout */}
        <div className="columns-1 sm:columns-2 gap-6 lg:gap-12 mt-10 lg:mt-20">
        {cards.map((work, index) => (
            <CardOne key={index} work={work} />
            ))}
        </div>

        {/* Bg */}
        <div className="bg-lavender-blue h-20 w-20 sm:h-96 sm:w-96 rounded-full absolute top-0 left-1/2 -translate-x-1/2 z-10 [filter:blur(80px)] sm:[filter:blur(400px)]"></div>
      </div>
    </section>
  );
};

export default Works;
