import React from 'react';
import Navigation from './Navigation';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Qualifications from './Qualifications';

function App() {
  return (
    <div>
      <Navigation />
      <About />
      <Qualifications />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;