import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
    id: 1,
    title: "MLFlowX – Scalable ML/AI Platform Infrastructure",
    description: "Microservices-based ML platform for model training and inference using Kubernetes and Docker. Integrated Spark and Flink pipelines, REST/gRPC APIs, and automated scaling, reducing inference latency by 35%.",
    technologies: ["Kubernetes", "Docker", "Apache Spark", "Flink", "Node.js", "gRPC", "REST API"],
    image: "mlflowx",
    status: "in progress",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "EasyFlow-Bank – SaaS Platform",
    description: "Secure SaaS banking software serving 100+ users with real-time transaction monitoring and audit trails. Implemented AWS Cognito + Lambda authentication, Docker deployments, and optimized SQL queries, boosting performance by 25%.",
    technologies: ["React", "Node.js", "AWS Cognito", "AWS Lambda", "Docker", "CI/CD", "SQL"],
    image: "easyflow-bank",
    status: "Completed",
    liveUrl: "https://easy-flow-bank.vercel.app/",
    githubUrl: "https://github.com/Akash7016/EasyFlow-Bank"
  },
  {
    id: 3,
    title: "Creator Agent – AI Video Script Generator",
    description: "AI-driven content generation platform using YouTube API for transcript extraction and semantic text analysis. Built Python pipelines for ML inference and ensured 98% production reliability with code reviews and scalable architecture.",
    technologies: ["Python", "Machine Learning", "YouTube API", "Data Pipelines", "AI", "Semantic Analysis"],
    image: "creator-agent",
    status: "Completed",
    liveUrl: "#",
    githubUrl: "https://github.com/Akash7016/Creator_AI_Agent"
  }
  ];

  const ProjectCard = ({ project }) => (
    <div className="project-card">
      <div className="project-card__image">
        <div className={`project-placeholder project-placeholder--${project.image}`}>
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <rect x="10" y="10" width="80" height="60" rx="4" fill="currentColor" opacity="0.2"/>
            <rect x="15" y="15" width="70" height="8" rx="2" fill="currentColor" opacity="0.4"/>
            <rect x="15" y="27" width="50" height="4" rx="2" fill="currentColor" opacity="0.3"/>
            <rect x="15" y="35" width="60" height="4" rx="2" fill="currentColor" opacity="0.3"/>
            <circle cx="75" cy="25" r="8" fill="currentColor" opacity="0.3"/>
          </svg>
        </div>
        <div className="project-card__status">
          <span className={`status status--${project.status.toLowerCase().replace(' ', '-')}`}>
            {project.status}
          </span>
        </div>
      </div>
      
      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        
        <div className="project-card__technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        
        <div className="project-card__links">
          <a target='_blank' href={project.liveUrl} className="project-link project-link--primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15,3 21,3 21,9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Live Demo
          </a>
          <a target='_blank' href={project.githubUrl} className="project-link project-link--secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <div className="projects__header">
          <h2 className="projects__title">My Projects</h2>
          <p className="projects__subtitle">
            Here are some of my recent works that showcase my skills and experience
          </p>
        </div>
        
        <div className="projects__grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;