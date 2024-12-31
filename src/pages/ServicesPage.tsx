import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

const ServicesPage = () => {
  return (
    <div className="py-16">
      <h1 className="text-4xl lg:text-6xl font-bold mb-12">Our Services</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <ServiceCard
              key={index}
              icon={<Icon className="w-8 h-8" />}
              title={service.title}
              description={service.description}
              slug={service.slug}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ServicesPage;