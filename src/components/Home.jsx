import React, { useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      // Use client coordinates for fixed background alignment
      const x = e.clientX;
      const y = e.clientY;
      
      container.style.setProperty('--mouse-x', `${x}px`);
      container.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="home-container" ref={containerRef}>
      <div className="spotlight-overlay"></div>
      <div className="content-wrapper">
        <h1 className="main-title">SEEMANTH</h1>
        <p className="subtitle">AI & Generative Engineering</p>
      </div>
    </div>
  );
};

export default Home;
