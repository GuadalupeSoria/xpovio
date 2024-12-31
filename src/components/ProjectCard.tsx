import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

const ProjectCard = ({ title, description, image, slug }: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
        <Link 
          to={`/work/${slug}`} 
          className="mt-4 flex items-center gap-2 text-orange-500"
        >
          View Project <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;