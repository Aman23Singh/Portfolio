import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaArrowUp, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#264653] text-white px-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Portfolio Info */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Aman's Portfolio</h2>
                    <p className="text-gray-300">
                        Thank you for visiting my portfolio website. If you have any questions or would like to discuss
                        potential opportunities, please do not hesitate to contact me.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                    <ul className="text-gray-300 space-y-2">
                        <li className="flex items-center gap-2">▶
                            <a href="#home">Home</a>
                        </li>
                        <li className="flex items-center gap-2">▶
                            <a href="#about">About</a>
                        </li>
                        <li className="flex items-center gap-2">▶
                            <a href="#skills">Skill</a>
                        </li>
                        <li className="flex items-center gap-2">▶
                            <a href="#projects">Project</a>
                        </li>
                        <li className="flex items-center gap-2">▶
                            <a href="#experience">Experence</a>
                        </li>

                        <li className="flex items-center gap-2">▶
                            <a
                                href="/AmanResume.pdf"
                                download="Aman-Singh-Resume.pdf"
                                // className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2"
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
                    <ul className="text-gray-300 space-y-3">
                        <li className="flex items-center gap-2">
                            <FaPhoneAlt className="text-yellow-400" /> +91 8400336370
                        </li>
                        <li className="flex items-center gap-2">
                            <FaEnvelope className="text-yellow-400" /> rvst2311@gmail.com
                        </li>
                        <li className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-yellow-400" /> Bhadohi, India–221303
                        </li>
                        <li className="flex items-center gap-4 pt-2">
                            <a href="https://www.linkedin.com/in/aman-singh-347871276/" className="hover:text-yellow-400">
                                <FaLinkedin size={20} />
                            </a>

                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-200">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                                    alt="LeetCode"
                                    className="w-6 h-6"
                                />

                            </a>
                            <a href="https://github.com/Aman23Singh" className="hover:text-yellow-400">
                                <FaGithub size={20} />
                            </a>
                            <a href="rvst2311@gmail.com" className="hover:text-yellow-400">
                                <FaEnvelope size={20} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-200">
                                <FaTwitter />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Footer Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-400 border-t border-gray-600 mt-8">
                <div className="w-full text-center md:text-center">
                    <p>
                        Designed With <span className="text-red-500">❤️</span> By
                        <span className="text-yellow-400 font-medium"> Aman Singh</span>
                    </p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
// backgroundColor: '#264653'