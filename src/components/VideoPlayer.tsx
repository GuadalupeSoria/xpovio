import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  poster: string;
}

const VideoPlayer = ({ src, poster }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
      } else {
        video.pause();
      }
    } catch (error) {
      console.error('Error toggling video playback:', error);
    }
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        className="rounded-lg w-full object-cover h-[300px] lg:h-[400px]"
        loop
        muted
        playsInline
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>
      <button 
        onClick={togglePlay}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4 hover:bg-orange-500 transition-colors group"
      >
        {isPlaying ? (
          <Pause className="w-8 h-8 text-black group-hover:text-white" />
        ) : (
          <Play className="w-8 h-8 text-black group-hover:text-white" />
        )}
      </button>
    </div>
  );
};

export default VideoPlayer;