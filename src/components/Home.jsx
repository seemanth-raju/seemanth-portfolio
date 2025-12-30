import React, { useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (titleRef.current) {
        const rect = titleRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        titleRef.current.style.setProperty('--mouse-x', `${x}%`);
        titleRef.current.style.setProperty('--mouse-y', `${y}%`);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="home-container" ref={containerRef}>
      <div className="content-wrapper">
        <h1 className="main-title" ref={titleRef} data-text="SEEMANTH">
          <span className="letter-wrapper">
            {'SEEMANTH'.split('').map((char, index) => (
              <span key={index} className="letter">{char}</span>
            ))}
          </span>
        </h1>
        <p className="subtitle">AI & Generative Engineering</p>
      </div>
    </div>
  );
};

export default Home;