import React, { useState  } from 'react';
import FaqItem from './FaqItem';
import faqs_data from "../../data/faqs-data.js"
const Faq = () => {
    const [openIndex, setOpenIndex] = useState(0); 
    const toggleFAQ = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };
 
    return (
        <section id='faq'>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-3 justify-between gap-10 xl:gap-20">
                    <div>
                        <span className='subtitle-black'>Our Faq</span>
                        <h2 className='title-black max-w-[407px]'>Frequently asked questions</h2>
                    </div>

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
