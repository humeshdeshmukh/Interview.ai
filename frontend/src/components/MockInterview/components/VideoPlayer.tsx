import React, { useState } from 'react';
import '../styles/VideoPlayer.css'; // Import custom styling

const VideoPlayer: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const handlePlayback = (url: string) => {
    setVideoUrl(url);
  };

  return (
    <div className="video-player">
      <h3>Video Player</h3>
      <div className="video-controls">
        <button onClick={() => handlePlayback('path/to/your/video.mp4')} className="btn-play">
          Load Video
        </button>
        <button onClick={() => setVideoUrl(null)} className="btn-stop">
          Stop Video
        </button>
      </div>
      {videoUrl && (
        <div className="video-container">
          <video src={videoUrl} controls className="video-element" />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
