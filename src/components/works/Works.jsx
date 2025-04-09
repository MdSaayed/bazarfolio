import React from 'react';
import { Subtitle, Title } from "../../components";

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
        {/* Header */}
        <div className='flex flex-wrap justify-between items-start gap-y-8 gap-x-16'>
          <Subtitle text='Our Works' variant='white' styleClassName='z-20' />
          <Title
            text='Creative Excellence Turning Ideas into Stunning Digital Experiences.'
            variant='gradient'
            styleClassName='max-w-[792px] mt-0 z-20'
          />
        </div>

        {/* Grid layout */}
        <div className="columns-1 sm:columns-2 mt-20 gap-6 lg:gap-12">
        {cards.map((card, index) => (
            <div
            key={index}
            className="break-inside-avoid overflow-hidden rounded-xl relative group mb-12 z-20"
            >
                {/* Image */}
                <div className='rounded-[20px] overflow-hidden'>
                    <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-auto object-cover"
                    />
                </div>

                {/* Overlay Text */}
                <div className="w-full mt-6 text-white opacity-100 group-hover:opacity-100 transition">
                    <div className="flex justify-between items-center">
                    <p className="text-base leading-normal">{card.type}</p>
                    <span className="text-base leading-normal block">{card.time}</span>
                    </div>
                    <h3 className="font-semibold leading-[1.2] text-lg mt-4">{card.title}</h3>
                </div>
                </div>
            ))}
        </div>

        {/* Bg */}
        <div className="bg-lavender-blue h-96 w-96 rounded-full absolute top-0 left-1/2 -translate-x-1/2 z-10 [filter:blur(400px)]"></div> 
      </div>
    </section>
  );
};

export default Works;
