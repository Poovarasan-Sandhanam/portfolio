import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Poovarasan
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {['home', 'about', 'service', 'project', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative group transition-all duration-200"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 transition-transform font-semibold">
            Connect Me
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-6 text-center space-y-4 transition-all duration-300">
          {['home', 'about', 'service', 'project', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setIsOpen(false)}
              className="block py-1 border-b border-gray-700 hover:text-green-400"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <button className="mt-4 w-full py-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full font-semibold">
            Connect Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
