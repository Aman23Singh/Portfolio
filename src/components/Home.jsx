import React from 'react';
import { FaGithub, FaLinkedin, FaGoogle, FaTwitter, FaFacebook, FaMedium } from 'react-icons/fa';
import heroImage from '../assets/naruto.png'; // make sure to place a matching image in src/assets

const Home = () => {
  return (
    <>
      {/* pt-55 sm:pt-24 lg:pt-10 xl:pt-10 */}
      <section
        id="home"
        className="pt-[13.75rem] sm:pt-[13.75rem] md:pt-10 lg:pt-10 xl:pt-10 bg-gradient-to-br from-blue-100 to-indigo-200 min-h-screen flex items-center justify-center text-black px-4"
      >

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Section */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold">
              Hi, I'm Aman <span className="wave">👋</span>
            </h1>
            <p className="text-xl">
              {/* Full Stack Developer 🚀 | Open Source Enthusiast 💡 | IIT (ISM) Dhanbad 🎓 */}
              MERN stack Developer 🚀 |  java Developer 🚀 | Rajkiya Engineering College, Sonbhadra🎓
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-2xl mt-4">
              <a href="https://www.linkedin.com/in/aman-singh-347871276/" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300">
                <FaLinkedin /> 
              </a>
              <a href="https://leetcode.com/u/Amansingh2311/" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-200">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                  alt="LeetCode"
                  className="w-6 h-6"
                />

              </a>
              <a href="https://github.com/Aman23Singh" target="_blank" rel="noreferrer" className="text-black hover:text-gray-400">
                <FaGithub />
              </a>
              <a href="rvst2311@gmail.com" target="_blank" rel="noreferrer" className="text-red-500 hover:text-red-400">
                <FaGoogle />
              </a>
              <a href="https://x.com/AmanSingh_2311" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-200">
                <FaTwitter />
              </a>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#" className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full">
                CONTACT ME
              </a>

              <a
                href="/AmanResume.pdf"
                download="Aman-Singh-Resume.pdf"
                className="bg-gray-100 text-gray-900 hover:bg-gray-200 py-2 px-6 rounded-full"
              >
                SEE MY RESUME
              </a>



            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2">
            <div className="p-4 rounded-xl w-fit mx-auto">
              <img src={heroImage} alt="Hero" className="w-full max-w-md" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
