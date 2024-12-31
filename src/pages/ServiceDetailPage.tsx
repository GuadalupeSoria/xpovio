import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { services } from '../data/services';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="text-orange-500 mb-4">
            <Icon className="w-12 h-12" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">{service.title}</h1>
          <p className="text-xl text-gray-400">{service.fullDescription}</p>
        </div>

        <div className="bg-zinc-900 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;