import React from 'react';

const projects = [
  {
    title: 'Malaria Tracker',
    description: 'A full-stack web application for monitoring and managing malaria cases across India. The system enables hospitals to report cases in real-time, providing a centralized dashboard for active cases, recoveries, and total cases — organized state-wise and district-wise.',
    tech: 'React, Node.js, Express.js, MongoDB',
    link: 'https://malariatracter.vercel.app/'
  },
  {
    title: 'ChatApp',
    description: 'A real-time full-stack chat application enabling instant messaging between users. Built with modern web technologies, it offers a seamless and responsive messaging experience across all devices.',
    tech: 'React, Node.js, Express.js, MongoDB, Socket.io',
    link: 'https://github.com/Aman23Singh/chat-app-frontend'
  },
  {
    title: 'Railway Tools Management System',
    description: 'A full-stack web application to efficiently manage railway maintenance tools department-wise. Staff can log in to add, update, or delete tool records, ensuring real-time visibility and accountability. The system improves maintenance workflows by reducing tool misplacement and enhancing operational efficiency.',
    tech: 'React, Node.js, Express.js, MongoDB',
    link: 'https://railway-tools-management-fne7.vercel.app/'
  },
  {
    title: 'Weather App',
    description: 'A responsive web application that provides real-time weather information based on user input or current location. It fetches data from a public weather API and displays current temperature, conditions, humidity, and more.',
    tech: 'HTML, CSS, JavaScript',
    link: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'A modern personal website to showcase skills and projects.',
    tech: 'React, Tailwind CSS',
    link: 'https://portfolio.theaman.me/'
  },

];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 px-8 text-black bg-gradient-to-br from-blue-100 to-indigo-200"
      // style={{ backgroundColor: '#264653' }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">🛠️ Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div key={idx} className="p-6 border rounded-lg shadow border-gray-700 bg-gradient-to-br from-purple-100 to-indigo-200">
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="mb-2">{proj.description}</p>
              <p className="text-sm text-blue-500 mb-2">Tech: {proj.tech}</p>
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
