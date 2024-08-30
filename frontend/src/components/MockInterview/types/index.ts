// Define the type for the stage of the mock interview
export type InterviewStage = 'start' | 'session' | 'results';

// Define the props for the MockInterviewStart component
export interface MockInterviewStartProps {
  onStart: () => void;
}

// Define the props for the MockInterviewSession component
export interface MockInterviewSessionProps {
  onComplete: () => void;
}

// Define the props for the MockInterviewResults component
export interface MockInterviewResultsProps {
  // Add any specific props needed for results component here
}

// Define the props for the Timer component
export interface TimerProps {
  // Add any specific props needed for Timer component here
}

// Define the props for the SpeechRecognition component
export interface SpeechRecognitionProps {
  // Add any specific props needed for SpeechRecognition component here
}

// Define the props for the AIChatbot component
export interface AIChatbotProps {
  // Add any specific props needed for AIChatbot component here
}

// Define the props for the UserProfile component
export interface UserProfileProps {
  // Add any specific props needed for UserProfile component here
}

// Define the props for the VideoRecorder component
export interface VideoRecorderProps {
  // Add any specific props needed for VideoRecorder component here
}
