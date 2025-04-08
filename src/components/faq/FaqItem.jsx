import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { SlArrowDown } from "react-icons/sl";

const FaqItem = ({ question, answer, index, openIndex, toggleFAQ }) => {
    const isOpen = openIndex === index;

    return (
        <div
            onClick={() => toggleFAQ(index)}
            className={`faq-item w-full rounded-[10px] border border-dark-gray px-5 py-4 md:px-8 md:py-6 transition-colors duration-300 cursor-pointer`}
        >
            <button
                className="flex w-full items-center justify-between text-left focus:outline-none cursor-pointer"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
            >
                <span className="text-xl font-medium text-black leading-primary mr-2">
                    {index + 1}. {question}
                </span>

                <motion.span
                    className="flex h-8 w-8 items-center justify-center -mr-2 rounded-full"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <SlArrowDown className="text-blue-gray text-base" />
                </motion.span>
            </button>

            <motion.div
                id={`faq-answer-${index}`}
                initial={{ height: 0, opacity: 0 }}
                animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
            >
                <div className="mt-4 text-dark-gray text-base font-normal leading-normal">
                    <p>{answer}</p>
                </div>
            </motion.div>
        </div>
    );
};

FaqItem.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    openIndex: PropTypes.number,
    toggleFAQ: PropTypes.func.isRequired,
};

export default FaqItem;
