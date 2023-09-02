// eslint-disable-next-line no-unused-vars
import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { 
  Navbar,
  Hero,
  About,
  Education,
  Experience,
  Tech,
  Works,
  Feedbacks,
  Contact,
  StarsCanvas
  } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
