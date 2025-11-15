import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-br from-purple-100 to-indigo-200 fixed w-full shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center py-4">
          {/* Logo */}
          <div className="text-xl font-bold text-blue-600 text-center md:text-left mb-2 md:mb-0">
            My Portfolio
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-2">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2">About</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2">Skills</a>
            <a href="#experience" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2">Experience</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2">Projects</a>
            <a
              href="/AmanResume.pdf"
              download="Aman-Singh-Resume.pdf"
              className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2"
            >
              Resume
            </a>

            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
