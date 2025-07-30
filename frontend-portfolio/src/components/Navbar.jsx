import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-br from-purple-100 to-indigo-200 fixed w-full shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-blue-600">My Portfolio</div>
          <div className="space-x-4">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2">About</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2">Skills</a>
            <a href="#experience" className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2">Experience</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2">Projects</a>
            <a
              href="https://drive.google.com/file/d/1Fe922-SddYGLX0mTzn-KQ0CAmojdpRxX/view?usp=sharing"
              target="_blank"
              className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2"
            >
              Resume
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;