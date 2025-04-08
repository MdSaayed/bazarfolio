import React from 'react';
import { Subtitle, Title } from "../../components";

const cards = [
  {
    title: "E-Commerce App UI",
    type: "UI/UX Design",
    time: "5min",
    image: "/assets/images/work-1.png",
    big: true,
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
    big: true,
  },
];

const Works = () => {
  return (
    <section className=' bg-blue-gray3 py-16'>
      <div className="container">
        {/* Header */}
        <div className='flex flex-wrap justify-between items-start gap-y-8 gap-x-16'>
          <Subtitle text='Our Works' textColor='white' />
          <Title
            text='Creative Excellence Turning Ideas into Stunning Digital Experiences.'
            styleClass='gradient-text text-3xl max-w-[792px] !-mt-4'
          />
        </div>

        {/* Grid layout */}
        <div className="sm:-mx-6 md:-mx-12 columns-1 sm:columns-2 space-12 mt-20 [column-fill:_balance]">
            {cards.map((card, index) => (
                <div
                key={index}
                className="break-inside-avoid overflow-hidden rounded-xl relative group mb-12"
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
                    <div className="w-full mt-6 text-black opacity-100 group-hover:opacity-100 transition">
                        <p className="text-sm">{card.type}</p>
                        <h3 className="font-semibold text-lg">{card.title}</h3>
                        <span className="text-xs mt-1 block">{card.time}</span>
                    </div>
                    </div>
                ))}
            </div>
      </div>
    </section>
  );
};

export default Works;
