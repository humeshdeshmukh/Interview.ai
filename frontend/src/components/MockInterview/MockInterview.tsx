import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { Button, Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';

const MockInterview: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string>('https://www.example.com/interview-video.mp4');
  const [progress, setProgress] = useState<number>(0);
  const [mediaBlobUrl, setMediaBlobUrl] = useState<string | null>(null);
  const [recording, setRecording] = useState<boolean>(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [chunks, setChunks] = useState<Blob[]>([]);

  // Handle video playback progress
  const handleProgress = (state: { played: number }) => {
    setProgress(state.played * 100);
  };

  // Start recording
  const startRecording = async () => {
    setRecording(true);
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);

    mediaRecorderRef.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        setChunks((prevChunks) => [...prevChunks, event.data]);
      }
    };

    mediaRecorderRef.current.start();
  };

  // Stop recording and save the video
  const stopRecording = () => {
    setRecording(false);
    mediaRecorderRef.current?.stop();

    const blob = new Blob(chunks, { type: 'video/webm' });
    const url = URL.createObjectURL(blob);
    setMediaBlobUrl(url);

    // Clear chunks for next recording
    setChunks([]);
  };

  // Replay the recorded video
  const replayRecording = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  // Delete the recorded video
  const deleteRecording = () => {
    if (mediaBlobUrl) {
      URL.revokeObjectURL(mediaBlobUrl); // Free up memory by revoking the object URL
      setMediaBlobUrl(null);
    }
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Mock Interview</h1>
      <Row className="justify-content-center">
        {/* Video Simulation */}
        <Col md={6} className="mb-4">
          <Card>
            <Card.Header className="bg-primary text-white">
              <h2 className="h5 mb-0">Interview Simulation</h2>
            </Card.Header>
            <Card.Body>
              <ReactPlayer
                url={videoUrl}
                controls
                width="100%"
                height="100%"
                onProgress={handleProgress}
              />
              <ProgressBar now={progress} className="mt-3" />
            </Card.Body>
          </Card>
        </Col>

        {/* Video Recorder */}
        <Col md={6}>
          <Card>
            <Card.Header className="bg-secondary text-white">
              <h2 className="h5 mb-0">Your Response</h2>
            </Card.Header>
            <Card.Body className="text-center">
              <div>
                <div className="mb-4">
                  <Button
                    variant="success"
                    onClick={startRecording}
                    disabled={recording}
                    className="me-2"
                  >
                    Start Recording
                  </Button>
                  <Button
                    variant="danger"
                    onClick={stopRecording}
                    disabled={!recording}
                    className="me-2"
                  >
                    Stop Recording
                  </Button>
                  <Button
                    variant="danger"
                    onClick={deleteRecording}
                    disabled={!mediaBlobUrl}
                  >
                    Delete Recording
                  </Button>
                </div>
                {mediaBlobUrl ? (
                  <div>
                    <video
                      ref={videoRef}
                      src={mediaBlobUrl}
                      controls
                      autoPlay
                      loop
                      className="w-100 mb-3"
                    />
                    <Button variant="primary" onClick={replayRecording} className="me-2">
                      Replay
                    </Button>
                    <Button variant="danger" onClick={deleteRecording}>
                      Delete
                    </Button>
                  </div>
                ) : (
                  <p className="text-muted">Recording will appear here.</p>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MockInterview;
