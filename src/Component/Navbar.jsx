import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icon library

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-950 text-white px-6 md:px-16 lg:px-24">
      <div className="container py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Marvkidflows</div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About me
          </a>
          <a href="#services" className="hover:text-gray-400">
            Services
          </a>
          <a href="#projects" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>

        {/* Desktop Button */}
        <button className="hidden md:inline bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Connect Me
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pb-6">
          <a href="#home" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="#about" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>
            About me
          </a>
          <a href="#services" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>
            Services
          </a>
          <a href="#projects" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>
            Contact
          </a>
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full">
            Connect Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
