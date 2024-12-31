import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  slug: string;
}

const ServiceCard = ({ icon, title, description, slug }: ServiceCardProps) => {
  return (
    <div className="bg-zinc-900 rounded-lg p-8 hover:bg-zinc-800 transition-colors">
      <div className="text-orange-500 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <Link to={`/services/${slug}`} className="flex items-center gap-2 text-orange-500">
        Learn More <ArrowUpRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

export default ServiceCard;