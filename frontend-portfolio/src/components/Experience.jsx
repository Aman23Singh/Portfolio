import React from 'react';

const experiences = [
  {
    title: 'Web Development Intern',
    company: 'Banaras Locomotive Works (Indian Railways), Varanasi',
    duration: 'july 2025 - Aug 2025',
    description: 'Developed a full-stack Railway Tools Management System using the MERN stack. Implemented secure login, department-based tool tracking, and CRUD operations for tool inventory. Designed responsive UI with Tailwind CSS.',
    tech: 'React.js, Node.js, Express.js, MongoDB, Tailwind CSS'
  }
  // {
  //   title: 'Web Development Intern',
  //   company: 'Tech Startup',
  //   duration: 'June 2023 - Aug 2023',
  //   description: 'Built responsive React components and integrated REST APIs.',
  //   tech: 'React, Tailwind, Node.js, MongoDB'
  // }
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 px-8 text-black bg-gradient-to-br from-blue-100 to-indigo-200"
      style={{ backgroundColor: '#264653' }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">💼 Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="p-6 border rounded-lg shadow border-gray-700 bg-gradient-to-br from-purple-100 to-indigo-200">
              <h3 className="text-xl font-semibold">{exp.title} @ {exp.company}</h3>
              <p className="text-sm text-black">{exp.duration}</p>
              <p className="mt-2">{exp.description}</p>
              <p className="mt-1 text-sm text-blue-600">Tech: {exp.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
