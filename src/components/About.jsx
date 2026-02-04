import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-blue-100 to-indigo-200">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-black mb-6">About Me</h2>
        <p className="text-lg text-black mb-4">
          I'm a passionate full stack developer with experience in building web applications using MERN stack. I Love solving algorithmic challenges on LeetCode.
        </p>
        <h3 className="text-xl font-semibold text-black mb-2">Education</h3>
        <div className="bg-gradient-to-br from-purple-100 to-indigo-200 p-4 rounded shadow mb-4">
          <p className="font-medium">B.Tech in Computer Science</p>
          <p className="text-sm">Rajkiya Engineering College, Sonbhadra | 2022 - 2026 | CGPA: 8</p>
        </div>

        <div className="bg-gradient-to-br from-purple-100 to-indigo-200 p-4 rounded shadow mb-4">
          <p className="font-medium">Class-12 in PCM</p>
          <p className="text-sm">MahaDev Singh InterMediate College (UP Board) | 2020 - 2021 | percentage: 82%</p>
        </div>

        <div className="bg-gradient-to-br from-purple-100 to-indigo-200 p-4 rounded shadow mb-4">
          <p className="font-medium">Class-10</p>
          <p className="text-sm">K.P Convent School (CBSE) | 2018 - 2019 | percentage: 87 %</p>
        </div>

        <blockquote className="italic text-fuchsia-500 mt-4">
          "Education Is Not The Learning Of Facts, But The Training Of The Mind To Think."
        </blockquote>
      </div>
    </section>
  );
};

export default About;
