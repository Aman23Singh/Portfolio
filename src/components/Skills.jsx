import React from 'react';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDatabase,
  FaJava,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiRedux,
  SiChakraui,
  SiNpm,
  SiMongoose,
  SiPostgresql,
  SiHibernate,
} from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3 /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'ReactJS', icon: <FaReact /> },
  { name: 'NodeJS', icon: <FaNodeJs /> },
  { name: 'NPM', icon: <SiNpm /> },

  {
    name: 'Express.js',
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
        alt="Express.js"
        className="w-6 h-6 object-contain"
      />
    ),
  },

  { name: 'MongoDB', icon: <SiMongodb /> },

  {
    name: 'Java',
    icon: (
      <img
        src="https://cdn.worldvectorlogo.com/logos/java-4.svg"
        alt="Java"
        className="w-6 h-6 object-contain"
      />
    ),
  },
  {
    name: 'JDBC',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
        alt="JDBC"
        className="w-6 h-6"
      />
    ),
  },
  {
    name: 'JSP',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
        alt="JSP"
        className="w-6 h-6"
      />
    ),
  },
  {
    name: 'Servlet',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
        alt="Servlet"
        className="w-6 h-6"
      />
    ),
  },
  {
    name: 'Hibernate',
    icon: <SiHibernate />,
  },
  {
    name: 'Spring Boot',
    icon: (
      <img
        src="https://cdn.worldvectorlogo.com/logos/spring-3.svg"
        alt="Spring Boot"
        className="w-6 h-6 object-contain"
      />
    ),
  },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql />,
  },
  {
    name: 'MySQL',
    icon: (
      <img
        src="https://cdn.worldvectorlogo.com/logos/mysql-6.svg"
        alt="MySQL"
        className="w-6 h-6 object-contain"
      />
    ),
  },
  {
    name: 'Python',
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
        className="w-6 h-6"
      />
    ),
  },

  { name: 'GitHub', icon: <FaGithub /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 text-black bg-gradient-to-br from-blue-100 to-indigo-200"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 bg-gradient-to-br from-purple-100 to-indigo-200 rounded shadow hover:shadow-lg transition"
            >
              <div className="text-4xl text-green-400 mb-2 flex justify-center items-center">
                {skill.icon}
              </div>
              <p className="text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
