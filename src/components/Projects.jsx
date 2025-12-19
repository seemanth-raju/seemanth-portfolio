import React from 'react';
import './Projects.css';

// Placeholder images since we don't have project screenshots yet. 
// Using gradients or abstract patterns would be better than broken links.
const projects = [
  {
    title: "Telephony GenAI Voicebot",
    description: "End-to-end telephony GenAI voicebot for customer support, integrating streaming ASR, LLM, and TTS for sub-second latency conversions.",
    tags: ["Twilio/Plivo", "FastAPI", "OpenAI", "WebSockets"],
    link: "https://github.com/seemanth-raju",
    demo: "#"
  },
  {
    title: "Smart Glasses Backend",
    description: "Python backend for AR smart glasses featuring scene description, OCR, object detection, and LLM Q&A with 95% uptime.",
    tags: ["Python", "Computer Vision", "OCR", "LLM"],
    link: "https://github.com/seemanth-raju",
    demo: "#"
  },
  {
    title: "PCAP Flow Analysis Pipeline",
    description: "High-performance pipeline processing 1GB+ PCAP files to detect anomalies and SYN flood attacks using K-Means clustering.",
    tags: ["Python", "Scapy", "Scikit-learn", "Cybersecurity"],
    link: "https://github.com/seemanth-raju",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
               <div className="project-image-placeholder">
                  <div className={`project-icon icon-${index % 3}`}></div>
               </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link code-link">
                    Code
                  </a>
                  {project.demo !== "#" && (
                     <a href={project.demo} className="project-link demo-link">
                       Demo
                     </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
