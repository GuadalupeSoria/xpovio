import React from 'react';
import { Users, Award, Target } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="py-16">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-gray-400 mb-8">
            We are a team of passionate digital creators dedicated to helping businesses grow through innovative digital solutions. With years of experience and a commitment to excellence, we deliver results that exceed expectations.
          </p>
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div>
              <Users className="w-8 h-8 text-orange-500 mb-2" />
              <h3 className="font-bold mb-1">Team</h3>
              <p className="text-sm text-gray-400">Expert professionals</p>
            </div>
            <div>
              <Award className="w-8 h-8 text-orange-500 mb-2" />
              <h3 className="font-bold mb-1">Experience</h3>
              <p className="text-sm text-gray-400">12+ years</p>
            </div>
            <div>
              <Target className="w-8 h-8 text-orange-500 mb-2" />
              <h3 className="font-bold mb-1">Focus</h3>
              <p className="text-sm text-gray-400">Results-driven</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
            alt="Our team"
            className="rounded-lg w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;