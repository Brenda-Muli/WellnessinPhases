import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useInView } from 'react-intersection-observer';

function ContactUs({ contactFormRef }) {
  const form = useRef();
  const { ref: paragraphInViewRef, inView: paragraphInView } = useInView({ triggerOnce: true });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6wdtoe1', 'template_3eq92me', form.current, {
        publicKey: 'oCcffnG49y4B5X1iP',
      })
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div ref={contactFormRef} className="flex flex-col max-w-6xl mx-4">
      {/* Text Content */}
      <div className="w-full  mb-6">
        <div
          ref={paragraphInViewRef}
          className={`w-full p-5 pt-24 transition-transform duration-1000 ${paragraphInView ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <h2 className="text-3xl font-semibold text-[#622915] mb-4">Contact Us</h2>
          <p className="text-[#622915]">
            Do you have any questions for us? If so, kindly feel free to reach out to us. We are here to help!
            <br /> Our team will get back to you as soon as possible. <br /> 
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-3xl">
      <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-[] p-6 rounded-lg shadow-lg space-y-4 w-full"
        >
          {/* Name Fields */}
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label className="block text-white font-medium">First Name</label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Enter first name"
                className="w-full p-3 rounded-md border border-[#9A3F06] bg-white"
              />
            </div>
            <div className="flex-1">
              <label className="block text-white font-medium">Last Name</label>
              <input
                type="text"
                name="user_lastname"
                required
                placeholder="Enter last name"
                className="w-full p-3 rounded-md border border-[#9A3F06] bg-white"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-white font-medium">Email</label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="Enter email"
              className="w-full p-3 rounded-md border border-[#9A3F06] bg-white"
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label className="block text-white font-medium">Message</label>
            <textarea
              name="message"
              required
              placeholder="Enter message"
              className="w-full p-3 rounded-md border border-[#9A3F06] bg-white h-24"
            ></textarea>
          </div>

          <input
            type="submit" 
            value="Send"
            className="w-full bg-[#81340F] text-white py-3 rounded-md cursor-pointer hover:bg-[#622915]"
          />
        </form>
      </div>
    </div>
  );
}

export default ContactUs;