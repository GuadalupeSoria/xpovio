import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const WorkPage = () => {
  return (
    <div className="py-16">
      <h1 className="text-4xl lg:text-6xl font-bold mb-12">Our Work</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            slug={project.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkPage;