import React from 'react';

interface ProjectInfoProps {
  title: string;
  content: string;
}

const ProjectInfo = ({ title, content }: ProjectInfoProps) => {
  return (
    <div className="bg-zinc-900 rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-400">{content}</p>
    </div>
  );
};

export default ProjectInfo;