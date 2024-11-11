import React from 'react';
import './ProjectsStyle.css';

const Projects = () => {
    const projectList = [
        {
            title: 'Project One',
            description: 'Description of project one.',
            image: '/path/to/image1.jpg',
            link: '/project-one'
        },
        {
            title: 'Project Two',
            description: 'Description of project two.',
            image: '/path/to/image2.jpg',
            link: '/project-two'
        },
        // Add more projects as needed
    ];

    return (
        <section className="projects">
            <h2 className="section-title">My Projects</h2>
            <div className="projects-grid">
                {projectList.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} className="btn btn-primary">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
