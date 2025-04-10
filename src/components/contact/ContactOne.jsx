import React from "react";
import { Link } from "react-router-dom";
import {Description, Subtitle} from "../../components"

const ContactOne = () => {
  return (
    <section id="contact">
      <div className="container bg-[url('/assets/images/contact-sec-bg.png')] bg-left-top bg-no-repeat">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Content */}
            <div>
                {/* Subtitle */}
            <Subtitle text='Contact Us' variant="black" styleClassName='text-dark-gray' />

            {/* Title */}
            <h2 className="text-blue-gray text-3xl sm:text-4xl max-w-lg font-semibold tracking-desc leading-primary mb-6">
                <span className="">Design that speaks.</span>
                <span className="font-normal"> Brands that connect.</span>
            </h2>

            {/* Description */}
            <Description text="I help brands stand out through strategic design, clean visuals, and memorable digital experiences." textColor="text-dark-gray" styleClassName="tracking-desc" />

            <div className="grid sm:grid-cols-2 gap-10 md:gap-6 xl:gap-12 text-sm mt-20">
                <div>
                    <h4 className="font-medium text-xl leading-primary text-blue-gray mb-8">Address</h4>
                    <p className="text-dark-gray leading-normal tracking-desc">
                        2972 Westheimer Rd. Santa Ana,<br /> Illinois 85486
                    </p>
                    <p className="text-blue-gray text-xl font-medium mt-6">
                        +23 (603) 555-0123
                    </p>
                </div>
                <div>
                    <h4 className="font-medium text-xl leading-primary text-blue-gray mb-8">Email</h4>
                    <p className="text-dark-gray leading-normal tracking-desc">support@uibazar.com</p>
                </div>
            </div>
            </div>

            {/* Right Form */}
            <div>
            <h3 className="text-blue-gray text-3xl sm:text-4xl font-semibold tracking-desc leading-primary mb-20">
                Send <span className="font-normal"> a Message</span>
            </h3>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <input
                type="text"
                placeholder="Name"
                className="border-b border-blue-gray p-2 placeholder:text-base placeholder:text-dark-gray placeholder:leading-primary pl-0 outline-none col-span-2 md:col-span-1"
                />
                <input
                type="email"
                placeholder="Email"
                className="border-b border-blue-gray p-2 placeholder:text-base placeholder:text-dark-gray placeholder:leading-primary pl-0 outline-none col-span-2 md:col-span-1"
                />
                <input
                type="text"
                placeholder="Subject"
                className="border-b border-blue-gray p-2 placeholder:text-base placeholder:text-dark-gray placeholder:leading-primary pl-0 outline-none col-span-2"
                />
                <textarea
                rows="4"
                placeholder="Message"
                className="border-b border-blue-gray p-2 placeholder:text-base placeholder:text-dark-gray placeholder:leading-primary pl-0 outline-none col-span-2 resize-none"
                />
                <button
                    type="submit"
                    className="bg-blue-gray w-20 h-20 rounded-full text-white text-sm font-medium leading-primary p-2 mt-2 col-span-2
                                transition-transform duration-300 transform hover:scale-95 hover:shadow-lg cursor-pointer"
                    >
                    Let's Talk
                </button>

            </form>
            </div>
       </div>
      </div>
    </section>
  );
};

export default ContactOne;
