import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';
import ProjectInfo from '../components/ProjectInfo';
import ProjectStats from '../components/ProjectStats';

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">{project.title}</h1>
          <p className="text-xl text-gray-400">{project.description}</p>
        </div>

        <div className="relative mb-12">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ProjectInfo title="Client" content={project.client} />
          <ProjectInfo title="Challenge" content={project.challenge} />
        </div>

        <div className="mb-12">
          <ProjectInfo title="Solution" content={project.solution} />
        </div>

        <ProjectStats results={project.results} />
      </div>
    </div>
  );
};

export default ProjectDetailPage;