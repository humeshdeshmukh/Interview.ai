// SpeechRecognition.tsx

import React, { useState } from 'react';

const SpeechRecognition: React.FC = () => {
  const [transcript, setTranscript] = useState<string>('');

  const startRecognition = () => {
    // Implement speech recognition functionality here
    // Example: using the Web Speech API
  };

  return (
    <div className="speech-recognition">
      <button onClick={startRecognition} className="btn-record">Start Recording</button>
      <p>{transcript}</p>
    </div>
  );
};

export default SpeechRecognition;
