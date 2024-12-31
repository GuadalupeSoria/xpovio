import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Services = () => {
  return (
    <section className="py-16">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <span className="text-orange-500">WELCOME</span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-4">
            We Are Digital Creative Agency In London
          </h2>
          <p className="mt-6 text-gray-400">
            Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal has evolved from generation on the runway heading towards.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex justify-between items-center">
              <span>Website design</span>
              <span>75%</span>
            </div>
            <div className="w-full bg-gray-800 h-2 rounded-full">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: '75%' }} />
            </div>
            <div className="flex justify-between items-center">
              <span>Digital Marketing</span>
              <span>90%</span>
            </div>
            <div className="w-full bg-gray-800 h-2 rounded-full">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: '90%' }} />
            </div>
          </div>
          <button className="mt-8 px-6 py-3 bg-orange-500 rounded-full flex items-center gap-2">
            KNOW MORE
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80"
            alt="Team collaboration"
            className="rounded-lg w-full h-full object-cover"
          />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-8 h-8" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;