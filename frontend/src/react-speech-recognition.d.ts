// src/react-speech-recognition.d.ts
declare module 'react-speech-recognition' {
    export const useSpeechRecognition: () => {
      transcript: string;
      listening: boolean;
      resetTranscript: () => void;
      browserSupportsSpeechRecognition: boolean;
    };
  
    export const SpeechRecognition: {
      startListening: (options?: { continuous: boolean; language: string }) => Promise<void>;
      stopListening: () => void;
      abortListening: () => void;
    };
  
    export default SpeechRecognition;
  }
  