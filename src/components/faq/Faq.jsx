import React, { useState  } from 'react';
import FaqItem from './FaqItem';
import {Subtitle, Title} from "../../components"

// Faq Component
const Faq = () => {
    // State For Faq Data
    const [openIndex, setOpenIndex] = useState(null); // State For Opened Faq
 

    // Toggle Faq Item
    const toggleFAQ = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };
 

    const faqs =[
            {
                question: 'What services do you offer?',
                answer: 'We specialize in UI/UX design, web development, branding, and content creation to help businesses grow.'
            },
            {
                question: 'Can I customize the templates you provide?',
                answer: 'We specialize in UI/UX design, web development, branding, and content creation to help businesses grow.'
            },
            {
                question: 'Do you offer ongoing support after project completion?',
                answer: 'We specialize in UI/UX design, web development, branding, and content creation to help businesses grow.'
            },
            {
                question: 'How long does it take to complete a project?',
                answer: 'We specialize in UI/UX design, web development, branding, and content creation to help businesses grow.'
            },
            {
                question: 'How can I contact you for a project?',
                answer: 'We specialize in UI/UX design, web development, branding, and content creation to help businesses grow.'
            }
        ] 

    return (
        <section>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-3 justify-between gap-12 xl:gap-20">
                   <div>
                     {/* Subtitle */}
                     <Subtitle text='Our Faq' />

                     {/* Title */}
                     <Title text='Frequently asked questions' variant='black' styleClassName='max-w-[407px]' />
                   </div>

                    {/* Faq List Grid */}
                    <div className="faqs space-y-8 col-span-2">
                        {faqs?.map((faq, index) => {
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
