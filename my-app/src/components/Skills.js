import React from 'react';
import './Skills.css';

const Skills = () => {
    const skills = ["HTML", "CSS", "JavaScript", "React", "Adobe Photoshop", "Illustrator", "Figma"];

    return (
        <section id="skills" className="skills">
            <h2>Skills</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
