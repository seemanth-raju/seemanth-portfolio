import React from 'react';
import './Skills.css';

const skills = [
  { category: "Languages", items: ["Python", "SQL", "JavaScript", "TypeScript"] },
  { category: "AI / ML", items: ["LLMs", "RAG", "GenAI", "PyTorch", "TensorFlow", "LangChain", "pipecat"] },
  { category: "Frameworks", items: ["FastAPI", "Flask", "ReactJS"] },
  { category: "Cloud & Tools", items: ["GCP", "Azure", "Docker", "Git", "Linux", "PostgreSQL", "Firebase"] }
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-card">
              <h3 className="skill-category">{skillGroup.category}</h3>
              <div className="skill-tags">
                {skillGroup.items.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
