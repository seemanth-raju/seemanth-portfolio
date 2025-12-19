import React from 'react';
import './Experience.css';

const experiences = [
  {
    role: "AI Engineer",
    company: "Purview India Consulting and Services LLP",
    location: "Hyderabad, India",
    period: "Jul 2024 – Present",
    description: "Building production-grade AI services including a telephony GenAI voicebot, smart glasses backend, and multimodal query systems. Optimizing backend performance and reliability.",
    skills: ["Python", "FastAPI", "GenAI", "LLMs", "PostgreSQL", "Docker"]
  },
  {
    role: "Data Analyst Intern",
    company: "IBM India",
    location: "Remote / Hybrid",
    period: "Jul 2023 – Aug 2023",
    description: "Cleaned and preprocessed enterprise datasets, improving model accuracy by 15%. Performed EDA and automated reporting tasks with Python scripts.",
    skills: ["Python", "Pandas", "Matplotlib", "Data Analysis"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          Experience building scalable AI applications and data pipelines.
        </p>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="exp-header">
                <div className="exp-role-company">
                  <h3 className="exp-role">{exp.role}</h3>
                  <h4 className="exp-company">{exp.company}</h4>
                </div>
                <div className="exp-meta">
                  <span className="exp-period">{exp.period}</span>
                  <span className="exp-location">{exp.location}</span>
                </div>
              </div>
              <p className="exp-description">{exp.description}</p>
              <div className="exp-skills">
                {exp.skills.map((skill, idx) => (
                  <span key={idx} className="exp-skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
