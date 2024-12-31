import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProjectStatsProps {
  results: string[];
}

const ProjectStats = ({ results }: ProjectStatsProps) => {
  return (
    <div className="bg-zinc-900 rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-6">Results</h2>
      <ul className="space-y-4">
        {results.map((result, index) => (
          <li key={index} className="flex items-center gap-2">
            <ArrowUpRight className="w-5 h-5 text-orange-500" />
            <span>{result}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectStats;