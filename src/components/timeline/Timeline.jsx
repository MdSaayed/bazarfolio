import React from 'react';

const Timeline = () => {
  const timelineEvents = [
    {
      title: "Your Success, Our Mission",
      description: "Our journey has been defined by a shared vision: to create innovative, user-centered solutions"
    },
    {
      title: "Your Success, Our Mission",
      description: "Our journey has been defined by a shared vision: to create innovative, user-centered solutions"
    },
    {
      title: "Your Success, Our Mission",
      description: "Our journey has been defined by a shared vision: to create innovative, user-centered solutions"
    }
  ];

  return (
    <div className="services-container">
      <h1>Creating Impact Through Innovation</h1>
      <div className="timeline-wrapper">
        <h2>Discover Our Journey</h2>
        <div className="timeline">
          {timelineEvents.map((event, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;