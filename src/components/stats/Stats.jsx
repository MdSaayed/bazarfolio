import React from 'react';
import CountUp from 'react-countup';

const statsData = [
  {
    number: 10,
    suffix: '+',
    label: 'Years of agency experience',
  },
  {
    number: 250,
    suffix: '+',
    label: 'Successfully projects done',
  },
  {
    number: 100,
    suffix: '%',
    label: 'Satisfaction Clients',
  },
  {
    number: 50,
    suffix: '+',
    label: 'World-wide team members',
  },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center xl:text-left py-10">
      {statsData.map((item, index) => {
        const isLastItem = index === statsData.length - 1;
        const isTabletRightBorder = index === 0 || index === 2;

        return (
          <div
            key={index}
            className={`flex flex-col justify-center items-center px-4 py-6 
              text-center md:text-left
              ${!isLastItem ? 'border-b' : ''}
              ${isTabletRightBorder ? 'sm:border-r' : ''}
              ${!isLastItem ? 'lg:border-r' : ''}
              lg:border-b-0 sm:border-b-0
              border-gray-300
            `}
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-black text-center">
              <CountUp
                end={item.number}
                duration={2}
                enableScrollSpy
                scrollSpyDelay={100}
              />
              {item.suffix}
            </h3>
            <p className="text-base font-normal text-blue-gray tracking-desc text-center mt-3">
              {item.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
