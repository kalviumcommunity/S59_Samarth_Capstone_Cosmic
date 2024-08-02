// src/NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaServicestack, FaPhone } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 to-indigo-500 p-4 shadow-lg">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white text-3xl font-bold tracking-wider">
          COSMIC
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
        <ul className={`md:flex space-x-8 md:space-x-4 mt-4 md:mt-0 ${isOpen ? 'block' : 'hidden'}`}>
          <li className="hover:scale-105 transform transition-transform duration-200">
            <Link to="/home" className="text-white hover:text-gray-300 flex items-center">
              <FaHome className="mr-1" /> Home
            </Link>
          </li>
          <li className="hover:scale-105 transform transition-transform duration-200">
            <Link to="/about" className="text-white hover:text-gray-300 flex items-center">
              <FaInfoCircle className="mr-1" /> About
            </Link>
          </li>
          <li className="hover:scale-105 transform transition-transform duration-200">
            <Link to="/services" className="text-white hover:text-gray-300 flex items-center">
              <FaServicestack className="mr-1" /> Services
            </Link>
          </li>
          <li className="hover:scale-105 transform transition-transform duration-200">
            <Link to="/contact" className="text-white hover:text-gray-300 flex items-center">
              <FaPhone className="mr-1" /> Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
