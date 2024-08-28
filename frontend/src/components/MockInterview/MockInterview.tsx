import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Button, Container, Row, Col, Card, ProgressBar, Form, Modal } from 'react-bootstrap';

const MockInterview: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string>('https://www.example.com/interview-video.mp4');
  const [progress, setProgress] = useState<number>(0);
  const [mediaBlobUrl, setMediaBlobUrl] = useState<string | null>(null);
  const [recording, setRecording] = useState<boolean>(false);
  const [recordingDuration, setRecordingDuration] = useState<number>(0);
  const [chunks, setChunks] = useState<Blob[]>([]);
  const [showFeedbackModal, setShowFeedbackModal] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<string>('');
  const [countdown, setCountdown] = useState<number>(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const liveStreamRef = useRef<HTMLVideoElement | null>(null);

  // Handle video playback progress
  const handleProgress = (state: { played: number }) => {
    setProgress(state.played * 100);
  };

  // Start recording
  const startRecording = async () => {
    setRecording(true);
    setCountdown(5); // Set initial countdown value

    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

    if (liveStreamRef.current) {
      liveStreamRef.current.srcObject = stream;
    }

    mediaRecorderRef.current = new MediaRecorder(stream);

    mediaRecorderRef.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        setChunks((prevChunks) => [...prevChunks, event.data]);
      }
    };

    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      setMediaBlobUrl(url);
      setChunks([]);
      setCountdown(0); // Reset countdown after recording
    };

    mediaRecorderRef.current.start();
    setRecordingDuration(0);
    const interval = setInterval(() => {
      if (recording) setRecordingDuration((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  };

  // Stop recording
  const stopRecording = () => {
    setRecording(false);
    mediaRecorderRef.current?.stop();
    if (liveStreamRef.current && liveStreamRef.current.srcObject) {
      (liveStreamRef.current.srcObject as MediaStream).getTracks().forEach(track => track.stop());
    }
  };

  // Pause recording
  const pauseRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.pause();
    }
  };

  // Resume recording
  const resumeRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'paused') {
      mediaRecorderRef.current.resume();
    }
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

  // Handle feedback submission
  const handleFeedbackSubmit = () => {
    if (feedback.trim() === '') {
      alert('Feedback cannot be empty.');
      return;
    }
    console.log('Feedback:', feedback);
    setShowFeedbackModal(false);
    setFeedback('');
  };

  useEffect(() => {
    if (countdown > 0 && recording) {
      const timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [countdown, recording]);

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
                <Button
                  variant="success"
                  onClick={startRecording}
                  disabled={recording}
                  className="me-2"
                >
                  Start Recording
                </Button>
                <Button
                  variant="warning"
                  onClick={pauseRecording}
                  disabled={!recording}
                  className="me-2"
                >
                  Pause Recording
                </Button>
                <Button
                  variant="info"
                  onClick={resumeRecording}
                  disabled={!recording || !mediaRecorderRef.current || mediaRecorderRef.current.state !== 'paused'}
                  className="me-2"
                >
                  Resume Recording
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
                <Button
                  variant="info"
                  onClick={() => setShowFeedbackModal(true)}
                  disabled={!mediaBlobUrl}
                >
                  Provide Feedback
                </Button>
                <div className="mt-3">
                  <video
                    ref={liveStreamRef}
                    autoPlay
                    muted
                    className="w-100 mb-3"
                    style={{ border: '1px solid #ccc' }}
                  />
                  {mediaBlobUrl ? (
                    <div>
                      <video
                        ref={videoRef}
                        src={mediaBlobUrl}
                        controls
                        className="w-100 mb-3"
                      />
                      <Button variant="primary" onClick={replayRecording} className="me-2">
                        Replay
                      </Button>
                      <Button variant="danger" onClick={deleteRecording}>
                        Delete
                      </Button>
                      <div className="mt-3">
                        <h5>Recording Duration: {Math.floor(recordingDuration / 60)}:{(recordingDuration % 60).toString().padStart(2, '0')}</h5>
                        {countdown > 0 && <h5>Countdown: {countdown}</h5>}
                      </div>
                    </div>
                  ) : (
                    <p className="text-muted">Recording will appear here.</p>
                  )}
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Feedback Modal */}
      <Modal show={showFeedbackModal} onHide={() => setShowFeedbackModal(false)} className="feedback-modal">
        <Modal.Header closeButton>
          <Modal.Title>Provide Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="feedback">
              <Form.Label>Feedback</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowFeedbackModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleFeedbackSubmit}>
            Submit Feedback
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default MockInterview;
