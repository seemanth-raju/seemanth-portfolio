import React from 'react';
import './Projects.css';
import ganImg from '../assets/GAN.jpeg';
import captionImg from '../assets/imagecaptioning.jpeg';
import fakeNewsImg from '../assets/fakenews.jpeg';

const projects = [
  {
    title: "PCAP Flow Analysis Pipeline",
    description: "High-performance pipeline processing 1GB+ PCAP files to detect anomalies and SYN flood attacks using K-Means clustering.",
    tags: ["Python", "Scapy", "Scikit-learn", "Cybersecurity"],
    link: "https://github.com/seemanth-raju",
    demo: "#",
    image: null // No image provided for this one yet
  },
  {
    title: "Fake News Detector",
    description: "Machine Learning model to identify and classify fake news articles with high accuracy.",
    tags: ["Python", "ML", "NLP", "Scikit-learn"],
    link: "https://github.com/seemanth-raju/Fake_News_Detector",
    demo: "#",
    image: fakeNewsImg
  },
  {
    title: "Image Captioning",
    description: "Deep Learning model using CNN encoder and Transformer decoder to generate descriptive captions for images.",
    tags: ["Python", "PyTorch", "CNN", "Transformer"],
    link: "https://github.com/seemanth-raju/Image_captioning",
    demo: "#",
    image: captionImg
  },
  {
    title: "GAN Face Generation",
    description: "Generative Adversarial Network architecture trained to generate realistic human faces from random noise.",
    tags: ["Python", "TensorFlow/Keras", "GAN", "Deep Learning"],
    link: "https://github.com/seemanth-raju/GAN",
    demo: "#",
    image: ganImg
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
               <div className="project-image-wrapper">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="project-image" />
                  ) : (
                    <div className={`project-icon icon-${index % 3}`}></div>
                  )}
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
