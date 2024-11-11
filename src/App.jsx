import React from 'react';
import './index.css';
import Navigation from './Navigation';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Qualifications from './Qualifications';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Navigation />
      <About />
      <Qualifications />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
