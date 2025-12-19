import React from 'react';
import myImage from '../assets/pixarme.png';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section hero">
      <div className="container hero-content">
        <div className="hero-text">
          <span className="greeting">Hello, I'm</span>
          <h1 className="name">Seemanth Raju<br />Kurapati</h1>
          <h2 className="title">AI / Generative AI Engineer</h2>
          <p className="description">
            AI / Generative AI Engineer with experience in Python-based backend systems, LLM-integrated applications, and real-time inference pipelines.
            Skilled in building production-ready AI services including GenAI voicebots, multimodal systems, and cloud-hosted microservices.
          </p>
          <div className="cta-buttons">
            <a href="/resume.pdf" download="Seemanth_Raju_Kurapati_Resume.pdf" className="btn btn-primary">
              Download Resume
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="image-blob"></div>
          <img src={myImage} alt="Seemanth Raju Kurapati" className="profile-image" />
        </div>
      </div>
    </section>
  );
};

export default About;
