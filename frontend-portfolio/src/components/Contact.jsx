import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 px-8 text-black bg-gradient-to-br from-blue-100 to-indigo-200"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg mb-10">
          I'm always open to new opportunities — let’s connect!
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          
          <div className="p-6 border rounded-lg shadow-lg border-gray-700 bg-gradient-to-br from-purple-100 to-indigo-200">
            <FaEnvelope className="text-3xl mb-3 mx-auto text-blue-600" />
            <p className="font-semibold">Email</p>
            <a
              href="mailto:rvst2311@gmail.com"
              className="text-blue-600 hover:underline"
            >
              rvst2311@gmail.com
            </a>
          </div>

          <div className="p-6 border rounded-lg shadow-lg border-gray-700 bg-gradient-to-br from-purple-100 to-indigo-200">
            <FaPhoneAlt className="text-3xl mb-3 mx-auto text-blue-600" />
            <p className="font-semibold">Phone</p>
            <a href="tel:+918400336370" className="text-blue-600 hover:underline">
              +91 8400336370
            </a>
          </div>

          <div className="p-6 border rounded-lg shadow-lg border-gray-700 bg-gradient-to-br from-purple-100 to-indigo-200">
            <FaLinkedin className="text-3xl mb-3 mx-auto text-blue-600" />
            <p className="font-semibold">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/aman-singh-347871276/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              linkedin.com/in/aman23singh
            </a>
          </div>

          <div className="p-6 border rounded-lg shadow-lg border-gray-700 bg-gradient-to-br from-purple-100 to-indigo-200">
            <FaGithub className="text-3xl mb-3 mx-auto text-blue-600" />
            <p className="font-semibold">GitHub</p>
            <a
              href="https://github.com/Aman23Singh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              github.com/Aman23Singh
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
