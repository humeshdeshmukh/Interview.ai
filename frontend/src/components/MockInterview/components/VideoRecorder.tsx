import React, { useState, useRef } from 'react';
import '../styles/VideoRecorder.css'; // Import custom styling

const VideoRecorder: React.FC = () => {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          const videoBlob = new Blob([event.data], { type: 'video/webm' });
          const url = URL.createObjectURL(videoBlob);
          setVideoUrl(url);
        }
      };
      mediaRecorderRef.current.start();
      setIsRecording(true);
      setIsPaused(false);
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
    setIsPaused(false);
  };

  const pauseRecording = () => {
    mediaRecorderRef.current?.pause();
    setIsPaused(true);
  };

  const resumeRecording = () => {
    mediaRecorderRef.current?.resume();
    setIsPaused(false);
  };

  const downloadRecording = () => {
    if (videoUrl) {
      const link = document.createElement('a');
      link.href = videoUrl;
      link.download = 'recording.webm';
      link.click();
    }
  };

  const clearRecording = () => {
    setVideoUrl(null);
  };

  return (
    <div className="video-recorder">
      <h3>Video Recorder</h3>
      <div className="controls">
        <button onClick={startRecording} disabled={isRecording} className="btn-record">Start Recording</button>
        <button onClick={stopRecording} disabled={!isRecording} className="btn-stop">Stop Recording</button>
        <button onClick={pauseRecording} disabled={!isRecording || isPaused} className="btn-pause">Pause Recording</button>
        <button onClick={resumeRecording} disabled={!isRecording || !isPaused} className="btn-resume">Resume Recording</button>
        <button onClick={downloadRecording} disabled={!videoUrl} className="btn-download">Download Recording</button>
        <button onClick={clearRecording} disabled={!videoUrl} className="btn-clear">Clear Recording</button>
      </div>
      {videoUrl && (
        <div className="video-container">
          <video src={videoUrl} controls className="video-preview" />
        </div>
      )}
    </div>
  );
};

export default VideoRecorder;
