import React from 'react';
import './All.css';

// Sample GIF imports (replace with your own local gif files)
import htmlGif from './images/skill1.gif';
import cssGif from './images/skill1.gif';
import jsGif from './images/skill1.gif';
import uiGif from './images/skill1.gif';

const skills = [
  { name: 'HTML5', gif: htmlGif, level: 95 },
  { name: 'CSS3', gif: cssGif, level: 90 },
  { name: 'JavaScript', gif: jsGif, level: 70 },
  { name: 'UX/UI', gif: uiGif, level: 90 },
];

const Skill = () => {
  return (
    <div className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <p className="skills-description">
        I am a skilled software developer with expertise in front-end and full-stack development.
        My technical stack includes HTML, CSS, React, Angular, MySQL, Spring Boot, and development tools like VS Code and Eclipse.
        I have experience building clean, maintainable, and scalable applications, ensuring efficient performance and user-friendly interfaces.
        Passionate about learning and staying updated with the latest technologies, I thrive in collaborative environments and enjoy solving complex challenges in software development.
      </p>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-box" key={skill.name}>
            <img src={skill.gif} alt={skill.name} className="skill-gif" />
            <h3>{skill.name}</h3>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${skill.level}%` }}>
                <span>{skill.level}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
