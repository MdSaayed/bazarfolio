import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Description, Subtitle } from "../../components";
import useEmailJS from "../../hooks/useEmailJS";
import FormInput from "./FormInput";

const ContactOne = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const { sendEmail, isSending } = useEmailJS();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    if (!formData.subject) tempErrors.subject = 'Subject is required';
    if (!formData.message) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      await sendEmail(formData);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact">
      <div className="container bg-[url('/assets/images/contact-sec-bg.png')] bg-left-top bg-no-repeat">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span className="subtitle-black text-dark-gray">Contact Us</span>
            <h2 className="text-blue-gray text-3xl sm:text-4xl max-w-lg font-semibold tracking-desc leading-primary mb-6">
              <span>Design that speaks.</span>
              <span className="font-normal"> Brands that connect.</span>
            </h2>
            <p className="text text-dark-gray tracking-desc">I help brands stand out through strategic design, clean visuals, and memorable digital experiences.</p>

            <div className="grid sm:grid-cols-2 gap-10 md:gap-6 xl:gap-12 text-[10px] mt-20">
              <div>
                <h4 className="font-medium text-xl leading-primary text-blue-gray mb-4 lg:mb-8">Address</h4>
                <p className="text-dark-gray text-lg lg:text-base leading-normal tracking-desc">
                  2972 Westheimer Rd. Santa Ana,<br /> Illinois 85486
                </p>
                <p className="text-blue-gray text-xl font-medium mt-4 lg:mt-6">
                  +23 (603) 555-0123
                </p>
              </div>
              <div>
                <h4 className="font-medium text-xl leading-primary text-blue-gray mb-4 lg:mb-8">Email</h4>
                <p className="text-dark-gray text-lg lg:text-base leading-normal tracking-desc">
                  support@uibazar.com
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-blue-gray text-3xl sm:text-4xl font-semibold tracking-desc leading-primary mb-10 lg:mb-20">
              Send <span className="font-normal"> a Message</span>
            </h3>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <FormInput
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                error={errors.name}
                colSpan="col-span-2 md:col-span-1"
              />
              <FormInput
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                error={errors.email}
                colSpan="col-span-2 md:col-span-1"
              />
              <FormInput
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                error={errors.subject}
                colSpan="col-span-2"
              />
              <FormInput
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                error={errors.message}
                isTextArea
                rows={4}
                colSpan="col-span-2"
              />
              <button
                type="submit"
                className="bg-blue-gray w-20 h-20 rounded-full text-white text-[10px] font-medium leading-primary p-2 mt-2 col-span-2
                  transition-transform duration-300 transform hover:scale-95 hover:shadow-lg cursor-pointer"
              >
                {isSending ? 'Sending...' : "Let's Talk"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactOne;
