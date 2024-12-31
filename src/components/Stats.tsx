import React from 'react';

const Stats = () => {
  return (
    <section className="py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <p className="text-4xl font-bold">12+</p>
        <p className="text-gray-400">Years Of Experience</p>
      </div>
      <div>
        <p className="text-4xl font-bold">25k</p>
        <p className="text-gray-400">Completed Projects</p>
      </div>
      <div>
        <p className="text-4xl font-bold">95%</p>
        <p className="text-gray-400">Success Rate</p>
      </div>
      <div>
        <p className="text-4xl font-bold">100+</p>
        <p className="text-gray-400">Active Clients</p>
      </div>
    </section>
  );
}

export default Stats;