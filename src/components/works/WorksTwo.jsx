import React from 'react';
import WorkItem from './WorkItem';

const WorksTwo = () => {
    return (
        <section className='bg-dark-green'>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 justify-between">
                    <div>
                        <span className='subtitle2 text-white'>Work</span>
                        <h2 className="title2-white">My Creative Showcase</h2>
                    </div>
                    <p className='text-white'>From sleek UI designs to functional web solutions, every project I take on reflects my passion for clean aesthetics, user-first thinking.</p>
                </div>

                <div className='mt-20'>
                    <WorkItem
                        number="01"
                        title="E-Commerce App UI"
                        description="Uniquely enhance reliable methods of empowerment with market-driven meta-services. Monotonectally utilize"
                        image="/assets/images/work-5.png"
                    />
                    <WorkItem
                        number="02"
                        title="Developer Social PlatFrom"
                        description="Uniquely enhance reliable methods of empowerment with market-driven meta-services. Monotonectally utilize"
                        image="/assets/images/work-5.png"
                    />
                    <WorkItem
                        number="03"
                        title="Minimal Dashboard UI"
                        description="Uniquely enhance reliable methods of empowerment with market-driven meta-services. Monotonectally utilize"
                        image="/assets/images/work-5.png"
                    />
                    <WorkItem
                        number="04"
                        title="Task Managentment Web App"
                        description="Uniquely enhance reliable methods of empowerment with market-driven meta-services. Monotonectally utilize"
                        image="/assets/images/work-5.png"
                    />
                </div>
            </div>
        </section>
    );
};

export default WorksTwo;