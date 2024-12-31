import React from 'react';
import VideoPlayer from './VideoPlayer';

const Hero = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="relative">
        <h1 className="text-4xl lg:text-7xl font-bold mb-4">
          WE ARE<span className="text-orange-500">CREATIVE</span>
          <br />
          DIGITAL AGENCY
        </h1>
        <div className="absolute top-0 right-0 lg:w-96 aspect-square rounded-full bg-gradient-to-br from-orange-500/20 to-transparent blur-xl" />
        <div className="mt-8">
          <VideoPlayer 
            src="https://player.vimeo.com/progressive_redirect/playback/689862475/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=e0672b9d46e2887e6d2d5e6dc9d42d2f2f0d3b3f1c3f5b98c6dae4c7f5e8d6f5"
            poster="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;