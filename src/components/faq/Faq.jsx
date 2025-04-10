import React, { useState  } from 'react';
import FaqItem from './FaqItem';
import {Subtitle, Title} from "../../components"
import faqs_data from "../../data/faqs-data.js"

// Faq Component
const Faq = () => {
    // State For Faq Data
    const [openIndex, setOpenIndex] = useState(0); 
 

    // Toggle Faq Item
    const toggleFAQ = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };
 

  
    return (
        <section id='faq'>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-3 justify-between gap-10 xl:gap-20">
                   <div>
                     {/* Subtitle */}
                     <Subtitle text='Our Faq' />

                     {/* Title */}
                     <Title text='Frequently asked questions' variant='black' styleClassName='max-w-[407px]' />
                   </div>

                    {/* Faq List Grid */}
                    <div className="faqs space-y-8 col-span-2">
                        {faqs_data?.map((faq, index) => {
                            const { question, answer } = faq;
                            return (
                                <FaqItem
                                    key={index}
                                    question={question}
                                    answer={answer}
                                    index={index}
                                    openIndex={openIndex}
                                    toggleFAQ={toggleFAQ}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};



export default Faq;
