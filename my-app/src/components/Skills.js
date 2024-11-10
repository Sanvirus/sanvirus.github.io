import React from 'react';
import './SkillsStyle.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaFigma } from 'react-icons/fa';

const Skills = () => {
  return (
    <div className="skills">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {/* Example skill cards with icons */}
        <div className="skill-card">
          <FaHtml5 className="skill-icon" />
          <p>HTML5</p>
        </div>
        <div className="skill-card">
          <FaCss3Alt className="skill-icon" />
          <p>CSS3</p>
        </div>
        <div className="skill-card">
          <FaJs className="skill-icon" />
          <p>JavaScript</p>
        </div>
        <div className="skill-card">
          <FaReact className="skill-icon" />
          <p>React</p>
        </div>
        <div className="skill-card">
          <FaNodeJs className="skill-icon" />
          <p>Node.js</p>
        </div>
        <div className="skill-card">
          <FaGit className="skill-icon" />
          <p>Git</p>
        </div>
        <div className="skill-card">
          <FaFigma className="skill-icon" />
          <p>Figma</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
