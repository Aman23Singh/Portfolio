import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
// import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <DarkModeToggle />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      {/* <Resume /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;