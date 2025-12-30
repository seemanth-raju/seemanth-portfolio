import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      container.style.setProperty('--mouse-x', `${x}px`);
      container.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Router>
      <div className="App" ref={containerRef}>
        <div className="global-spotlight-overlay"></div>
        <Navbar />
        <Home />
        <div id="about" className="page-content">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </Router>
  );
}

export default App;
