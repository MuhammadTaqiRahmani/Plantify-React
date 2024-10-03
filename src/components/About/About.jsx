// About.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const About = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100 text-gray-800">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>

        {/* Company Overview */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
          <p className="text-lg">
            We are a team of passionate individuals dedicated to delivering the best products and services to our customers. Our mission is to innovate and provide high-quality solutions that meet your needs.
          </p>
        </section>

        {/* Interactive Accordion Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
          <div className="space-y-4">

            {/* Accordion Item 1 */}
            <div className="border-b border-gray-300">
              <button
                onClick={() => toggleAccordion(1)}
                className="flex justify-between w-full py-3 text-left"
              >
                <span className="text-xl font-medium">Our Mission</span>
                <span>{activeAccordion === 1 ? '-' : '+'}</span>
              </button>
              {activeAccordion === 1 && (
                <div className="text-lg mb-4">
                  Our mission is to create innovative solutions that solve real-world problems. We aim to empower individuals and businesses by providing exceptional products and outstanding customer support.
                </div>
              )}
            </div>

            {/* Accordion Item 2 */}
            <div className="border-b border-gray-300">
              <button
                onClick={() => toggleAccordion(2)}
                className="flex justify-between w-full py-3 text-left"
              >
                <span className="text-xl font-medium">Our Vision</span>
                <span>{activeAccordion === 2 ? '-' : '+'}</span>
              </button>
              {activeAccordion === 2 && (
                <div className="text-lg mb-4">
                  Our vision is to be a global leader in innovation and technology, transforming the way people live, work, and connect with each other.
                </div>
              )}
            </div>

            {/* Accordion Item 3 */}
            <div className="border-b border-gray-300">
              <button
                onClick={() => toggleAccordion(3)}
                className="flex justify-between w-full py-3 text-left"
              >
                <span className="text-xl font-medium">Our Values</span>
                <span>{activeAccordion === 3 ? '-' : '+'}</span>
              </button>
              {activeAccordion === 3 && (
                <div className="text-lg mb-4">
                  We value integrity, innovation, and customer satisfaction. These principles guide everything we do and help us to build lasting relationships with our clients and partners.
                </div>
              )}
            </div>

          </div>
        </section>

        {/* Team Members Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 1"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h3 className="text-lg font-medium">Alice Johnson</h3>
              <p className="text-gray-500">CEO & Founder</p>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 2"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h3 className="text-lg font-medium">Bob Williams</h3>
              <p className="text-gray-500">Chief Technology Officer</p>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 3"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h3 className="text-lg font-medium">Carol Smith</h3>
              <p className="text-gray-500">Head of Marketing</p>
            </div>
          </div>
        </section>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
