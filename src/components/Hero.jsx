import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import HeroImage from '../assets/aboutme-image.png';

const Hero = () => {
  return (
    <div className="bg-black text-white py-20 px-4 sm:px-6 lg:px-12 text-center relative">
      {/* Hero Image */}
      <div className="flex justify-center">
        <img
          src={HeroImage}
          alt="Poovarasan Sandhanam"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg border-4 border-gradient-to-tr from-green-400 to-blue-500 transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Name + Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-6 leading-snug">
        I'm{' '}
        <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Poovarasan Sandhanam
        </span>
        <br className="hidden sm:block" /> Full-Stack Developer
      </h1>

      {/* Availability Badges */}
      <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm font-semibold">
        <span className="px-4 py-1 rounded-full bg-blue-800 bg-opacity-20 text-blue-400">
          🔍 Open to Opportunities
        </span>
        <span className="px-4 py-1 rounded-full bg-pink-800 bg-opacity-20 text-pink-300">
          🌍 Ready to Relocate
        </span>
        <span className="px-4 py-1 rounded-full bg-green-800 bg-opacity-20 text-green-400">
          ✅ Eligible to Work in the UK
        </span>
      </div>

      {/* Sub Text */}
      <p className="mt-6 text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
        I specialize in building fast, scalable, and responsive web and mobile applications that deliver exceptional user experiences.
      </p>

      {/* Social Icons */}
      <div className="mt-6 flex justify-center space-x-6 text-2xl">
        <a
          href="https://www.linkedin.com/in/poovarasan-sandhanam-aa29481b0"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Poovarasan-Sandhanam"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition"
        >
          <FaGithub />
        </a>
      </div>

      {/* CTA Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
        {/* Contact Me Button */}
        <a href="#contact">
          <button className="px-6 py-3 rounded-full font-medium bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 transition duration-300 shadow-lg">
            Contact Me
          </button>
        </a>

        {/* Download Resume Button */}
        <a
          href="/resume.pdf"
          download="Poovarasan_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-6 py-3 rounded-full font-medium bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-yellow-500 hover:to-pink-500 transition duration-300 shadow-lg">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
