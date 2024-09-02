import React, { useState, useRef, useEffect } from 'react';
import { Button, Form, Modal, Card, Spinner, Container, Dropdown } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import MicIcon from '@mui/icons-material/Mic';
import VideocamIcon from '@mui/icons-material/Videocam';
import { Question } from './types'; // Assuming you have a types file for Question

import './MockInterview.css'; // Import CSS for animations and styling

const questions: Question[] = [
  // JavaScript Questions
  { id: 1, question: 'What is a closure in JavaScript?', answer: 'A closure is a function that has access to the parent scope, even after the parent function has closed.', category: 'Technical' },
  { id: 2, question: 'What is the purpose of React hooks?', answer: 'React hooks allow functional components to have state and lifecycle features.', category: 'Technical' },
  { id: 3, question: 'Explain the concept of virtual DOM in React.', answer: 'The virtual DOM is a lightweight copy of the real DOM that React uses to optimize updates and rendering.', category: 'Technical' },
  { id: 4, question: 'What is the difference between `null` and `undefined` in JavaScript?', answer: '`null` is a value assigned to a variable to indicate that it has no value, while `undefined` indicates that a variable has been declared but not yet assigned a value.', category: 'Technical' },
  { id: 5, question: 'What is event delegation in JavaScript?', answer: 'Event delegation is a technique where a single event listener is attached to a parent element to handle events for its child elements.', category: 'Technical' },
  { id: 6, question: 'Explain the concept of promises in JavaScript.', answer: 'A promise is an object representing the eventual completion or failure of an asynchronous operation.', category: 'Technical' },
  { id: 7, question: 'What are the differences between `let`, `const`, and `var`?', answer: '`let` and `const` are block-scoped, while `var` is function-scoped. `const` cannot be reassigned.', category: 'Technical' },
  { id: 8, question: 'How do you handle errors in asynchronous code?', answer: 'You can handle errors using `.catch()` for promises or try/catch blocks with async/await.', category: 'Technical' },
  { id: 9, question: 'What is the purpose of the `bind()` method in JavaScript?', answer: 'The `bind()` method creates a new function that, when called, has its `this` keyword set to the provided value.', category: 'Technical' },
  { id: 10, question: 'What is a higher-order function?', answer: 'A higher-order function is a function that takes one or more functions as arguments or returns a function as its result.', category: 'Technical' },

  // React Questions
  { id: 11, question: 'What is the difference between a functional component and a class component in React?', answer: 'Functional components are simpler and use hooks for state and lifecycle methods, while class components use `this` and have their own state and lifecycle methods.', category: 'Technical' },
  { id: 12, question: 'What are React hooks?', answer: 'React hooks are functions that let you use state and other React features in functional components.', category: 'Technical' },
  { id: 13, question: 'How do you optimize performance in a React application?', answer: 'You can use memoization, React.memo, PureComponent, and lazy loading to optimize performance.', category: 'Technical' },
  { id: 14, question: 'What is Redux and why is it used?', answer: 'Redux is a state management library used to manage the state of an application in a predictable way.', category: 'Technical' },
  { id: 15, question: 'Explain the concept of lifting state up in React.', answer: 'Lifting state up involves moving state to the closest common ancestor of components that need it, allowing them to share data.', category: 'Technical' },
  { id: 16, question: 'What is the difference between `useEffect` and `useLayoutEffect`?', answer: '`useEffect` runs after the DOM has been updated, while `useLayoutEffect` runs synchronously after all DOM mutations.', category: 'Technical' },
  { id: 17, question: 'What are controlled and uncontrolled components in React?', answer: 'Controlled components are those whose value is controlled by React state, while uncontrolled components manage their own state internally.', category: 'Technical' },
  { id: 18, question: 'What is JSX and how does it work?', answer: 'JSX is a syntax extension that allows you to write HTML elements in JavaScript. It is transpiled to `React.createElement` calls.', category: 'Technical' },
  { id: 19, question: 'How do you handle forms in React?', answer: 'Forms in React can be handled using controlled components with `useState` or uncontrolled components using refs.', category: 'Technical' },
  { id: 20, question: 'What is the significance of keys in React lists?', answer: 'Keys help React identify which items have changed, are added, or are removed, improving performance in lists.', category: 'Technical' },

  // General Behavioral Questions
  { id: 21, question: 'Tell me about yourself.', answer: 'This is a common introductory question where you should give a brief summary of your background, skills, and experiences.', category: 'Behavioral' },
  { id: 22, question: 'Describe a challenging situation you faced and how you handled it.', answer: 'Discuss a specific challenge, the actions you took, and the outcome. Focus on demonstrating problem-solving skills.', category: 'Behavioral' },
  { id: 23, question: 'What motivates you in your work?', answer: 'Explain what drives you to perform well in your role, such as personal goals, career aspirations, or passion for the industry.', category: 'Behavioral' },
  { id: 24, question: 'How do you handle conflict at work?', answer: 'Describe a specific example of how you resolved a conflict, emphasizing communication, empathy, and problem-solving skills.', category: 'Behavioral' },
  { id: 25, question: 'Tell me about a time when you worked on a team project.', answer: 'Discuss your role in the team, how you collaborated with others, and the outcome of the project.', category: 'Behavioral' },
  { id: 26, question: 'What are your strengths and weaknesses?', answer: 'Provide a balanced view of your key strengths and areas for improvement, focusing on how you are working to improve your weaknesses.', category: 'Behavioral' },
  { id: 27, question: 'How do you prioritize tasks when working on multiple projects?', answer: 'Explain your approach to task management, including any tools or techniques you use to stay organized and meet deadlines.', category: 'Behavioral' },
  { id: 28, question: 'Describe a time when you had to learn something new quickly.', answer: 'Provide an example of how you acquired new knowledge or skills under pressure and how it helped you succeed.', category: 'Behavioral' },
  { id: 29, question: 'How do you handle criticism?', answer: 'Discuss how you receive and act on feedback to improve your performance and professional growth.', category: 'Behavioral' },
  { id: 30, question: 'What is your approach to problem-solving?', answer: 'Describe your method for analyzing and solving problems, including any strategies or frameworks you use.', category: 'Behavioral' },

  // Technical Problem-Solving Questions
  { id: 31, question: 'How would you reverse a string in JavaScript?', answer: 'You can reverse a string by splitting it into an array of characters, reversing the array, and then joining it back into a string.', category: 'Technical' },
  { id: 32, question: 'How do you find the largest number in an array?', answer: 'You can use the `Math.max` function along with the `spread` operator or iterate through the array to find the maximum value.', category: 'Technical' },
  { id: 33, question: 'How would you implement a debounce function in JavaScript?', answer: 'A debounce function limits the rate at which a function is executed by waiting for a specified delay before running the function.', category: 'Technical' },
  { id: 34, question: 'Write a function to check if a string is a palindrome.', answer: 'A palindrome is a string that reads the same forward and backward. You can check this by comparing the string to its reversed version.', category: 'Technical' },
  { id: 35, question: 'How would you implement a basic version of the `map()` method in JavaScript?', answer: 'The `map()` method creates a new array with the results of calling a provided function on every element in the calling array.', category: 'Technical' },
  { id: 36, question: 'How do you check if a number is prime?', answer: 'A prime number is only divisible by 1 and itself. You can check this by testing divisibility from 2 to the square root of the number.', category: 'Technical' },
  { id: 37, question: 'How would you implement a basic caching mechanism?', answer: 'You can implement a cache using a JavaScript object to store key-value pairs and check the cache before making a new request.', category: 'Technical' },
  { id: 38, question: 'Write a function to flatten a nested array.', answer: 'Flattening a nested array involves converting a multi-dimensional array into a single-dimensional array using recursion or iteration.', category: 'Technical' },
  { id: 39, question: 'How do you handle asynchronous operations in JavaScript?', answer: 'You can handle asynchronous operations using callbacks, promises, or async/await syntax.', category: 'Technical' },
  { id: 40, question: 'Write a function to merge two sorted arrays into a single sorted array.', answer: 'You can merge two sorted arrays by iterating through both arrays and comparing their elements, adding the smaller element to the result array.', category: 'Technical' },

  // System Design Questions
  { id: 41, question: 'How would you design a scalable URL shortening service?', answer: 'Discuss components like a database for storing URLs, a hashing algorithm for generating short URLs, and load balancing for handling traffic.', category: 'Technical' },
  { id: 42, question: 'How do you design a notification system?', answer: 'Consider features like real-time notifications, user preferences, and scalability. Discuss components like a messaging service and a frontend interface.', category: 'Technical' },
  { id: 43, question: 'How would you design a recommendation system?', answer: 'Discuss algorithms like collaborative filtering or content-based recommendations, and components like data storage, user profiles, and recommendation engines.', category: 'Technical' },
  { id: 44, question: 'What are some key considerations when designing a distributed system?', answer: 'Consider factors like consistency, availability, partition tolerance, fault tolerance, and scalability.', category: 'Technical' },
  { id: 45, question: 'How would you design a real-time chat application?', answer: 'Discuss components like WebSockets for real-time communication, a server for managing messages, and a frontend interface for user interaction.', category: 'Technical' },
  { id: 46, question: 'How do you ensure data consistency in a microservices architecture?', answer: 'Discuss strategies like eventual consistency, distributed transactions, and using a message broker for communication between services.', category: 'Technical' },
  { id: 47, question: 'How would you design an online booking system?', answer: 'Consider components like a database for managing bookings, a payment gateway, and a user interface for making and managing bookings.', category: 'Technical' },
  { id: 48, question: 'What are the key principles of RESTful API design?', answer: 'Discuss principles like statelessness, resource-based URIs, and proper use of HTTP methods (GET, POST, PUT, DELETE).', category: 'Technical' },
  { id: 49, question: 'How do you handle user authentication and authorization in a web application?', answer: 'Discuss methods like token-based authentication (JWT), OAuth, and user roles for authorization.', category: 'Technical' },
  { id: 50, question: 'How would you design a file storage system?', answer: 'Consider features like file uploading, storage management, and access control. Discuss components like a file storage service and a database for metadata.', category: 'Technical' },

  // Behavioral Questions (continued)
  { id: 51, question: 'Describe a time when you had to meet a tight deadline.', answer: 'Discuss how you managed your time, prioritized tasks, and the outcome of the project.', category: 'Behavioral' },
  { id: 52, question: 'Tell me about a time you disagreed with a team member.', answer: 'Explain the situation, how you communicated your disagreement, and how you reached a resolution.', category: 'Behavioral' },
  { id: 53, question: 'How do you stay current with industry trends and developments?', answer: 'Discuss your approach to continuous learning, such as following industry blogs, attending conferences, or taking courses.', category: 'Behavioral' },
  { id: 54, question: 'What is your approach to setting and achieving goals?', answer: 'Describe your goal-setting process, including how you set priorities and measure progress.', category: 'Behavioral' },
  { id: 55, question: 'Describe a time when you had to adapt to a significant change at work.', answer: 'Discuss how you adjusted to the change, the challenges you faced, and how you overcame them.', category: 'Behavioral' },
  { id: 56, question: 'Tell me about a time when you received constructive feedback.', answer: 'Explain how you received the feedback, how you implemented it, and the impact it had on your performance.', category: 'Behavioral' },
  { id: 57, question: 'How do you handle tight deadlines and pressure?', answer: 'Discuss your approach to managing stress and ensuring that you deliver quality work on time.', category: 'Behavioral' },
  { id: 58, question: 'Describe a project where you had to collaborate with multiple teams.', answer: 'Explain how you coordinated with different teams, managed communication, and ensured project success.', category: 'Behavioral' },
  { id: 59, question: 'Tell me about a time when you had to make a difficult decision.', answer: 'Discuss the decision-making process, the factors you considered, and the outcome of your decision.', category: 'Behavioral' },
  { id: 60, question: 'How do you ensure effective communication in your team?', answer: 'Discuss your communication strategies, such as regular meetings, feedback mechanisms, and collaboration tools.', category: 'Behavioral' },

  // Advanced Technical Questions
  { id: 61, question: 'Explain the concept of asynchronous programming in JavaScript.', answer: 'Asynchronous programming allows code to run in a non-blocking manner, enabling operations like I/O to be handled concurrently.', category: 'Technical' },
  { id: 62, question: 'How would you implement a simple caching mechanism in a web application?', answer: 'You can use browser cache or localStorage for simple caching or implement an in-memory cache on the server side.', category: 'Technical' },
  { id: 63, question: 'What are some strategies for optimizing a slow web application?', answer: 'Strategies include optimizing assets (images, CSS, JS), lazy loading, minimizing HTTP requests, and using CDNs.', category: 'Technical' },
  { id: 64, question: 'How do you manage state in a large-scale React application?', answer: 'Use state management libraries like Redux or Context API, and consider using middleware for side effects.', category: 'Technical' },
  { id: 65, question: 'What are the differences between SQL and NoSQL databases?', answer: 'SQL databases are relational and use structured query language, while NoSQL databases are non-relational and can handle unstructured data.', category: 'Technical' },
  { id: 66, question: 'Explain the concept of microservices architecture.', answer: 'Microservices architecture involves breaking down an application into smaller, independent services that communicate over APIs.', category: 'Technical' },
  { id: 67, question: 'How would you design a logging system for a web application?', answer: 'Consider features like log levels, log rotation, and integration with monitoring tools. Use a centralized logging service if needed.', category: 'Technical' },
  { id: 68, question: 'What are some common security vulnerabilities in web applications?', answer: 'Common vulnerabilities include cross-site scripting (XSS), SQL injection, cross-site request forgery (CSRF), and insecure direct object references (IDOR).', category: 'Technical' },
  { id: 69, question: 'How do you implement rate limiting in a web service?', answer: 'Rate limiting can be implemented using middleware to track the number of requests from each client and limit them accordingly.', category: 'Technical' },
  { id: 70, question: 'How would you design an efficient search algorithm?', answer: 'Consider using data structures like binary search trees or hash tables to improve search efficiency.', category: 'Technical' },

  // Data Structures and Algorithms
  { id: 71, question: 'How would you implement a stack data structure?', answer: 'A stack can be implemented using an array or linked list with push and pop operations.', category: 'Technical' },
  { id: 72, question: 'Explain the concept of a binary search tree.', answer: 'A binary search tree is a tree data structure where each node has at most two children, and the left child is less than the parent node while the right child is greater.', category: 'Technical' },
  { id: 73, question: 'How do you implement a queue using two stacks?', answer: 'Use two stacks to manage enqueue and dequeue operations, transferring elements between stacks as needed.', category: 'Technical' },
  { id: 74, question: 'What is a hash table and how does it work?', answer: 'A hash table is a data structure that maps keys to values using a hash function to compute an index for efficient data retrieval.', category: 'Technical' },
  { id: 75, question: 'How do you implement depth-first search (DFS) and breadth-first search (BFS)?', answer: 'DFS uses a stack or recursion to explore as far as possible along each branch before backtracking, while BFS uses a queue to explore nodes level by level.', category: 'Technical' },
  { id: 76, question: 'What is dynamic programming and how is it used?', answer: 'Dynamic programming is a technique for solving problems by breaking them down into simpler subproblems and storing results to avoid redundant calculations.', category: 'Technical' },
  { id: 77, question: 'Explain the difference between quicksort and mergesort.', answer: 'Quicksort is a divide-and-conquer algorithm that selects a pivot to partition the array, while mergesort divides the array into subarrays and merges them in sorted order.', category: 'Technical' },
  { id: 78, question: 'How would you implement a linked list?', answer: 'A linked list can be implemented with nodes that have pointers to the next node. Operations include insertion, deletion, and traversal.', category: 'Technical' },
  { id: 79, question: 'What is the time complexity of binary search?', answer: 'The time complexity of binary search is O(log n), where n is the number of elements in the sorted array.', category: 'Technical' },
  { id: 80, question: 'How do you handle collisions in a hash table?', answer: 'Collisions can be handled using techniques like chaining (linked lists) or open addressing (probing).', category: 'Technical' },

  // Miscellaneous
  { id: 81, question: 'What is the purpose of code reviews?', answer: 'Code reviews help identify bugs, ensure adherence to coding standards, and improve code quality through peer feedback.', category: 'Technical' },
  { id: 82, question: 'How do you handle version control in a team environment?', answer: 'Use version control systems like Git to manage code changes, track revisions, and collaborate with team members.', category: 'Technical' },
  { id: 83, question: 'What is the importance of documentation in software development?', answer: 'Documentation provides a record of code functionality, usage, and design decisions, making it easier for others to understand and maintain the code.', category: 'Technical' },
  { id: 84, question: 'How do you test your code?', answer: 'Code testing can be done using unit tests, integration tests, and end-to-end tests to ensure functionality and catch bugs.', category: 'Technical' },
  { id: 85, question: 'Explain the concept of Continuous Integration and Continuous Deployment (CI/CD).', answer: 'CI/CD is a set of practices for automating the process of integrating code changes and deploying them to production, improving efficiency and reducing errors.', category: 'Technical' },
  { id: 86, question: 'How do you ensure code quality?', answer: 'Ensure code quality through practices like code reviews, writing tests, adhering to coding standards, and using static analysis tools.', category: 'Technical' },
  { id: 87, question: 'What are some common design patterns in software development?', answer: 'Common design patterns include Singleton, Factory, Observer, and Strategy patterns, which provide solutions to common design problems.', category: 'Technical' },
  { id: 88, question: 'How do you handle performance optimization in a web application?', answer: 'Consider techniques like lazy loading, minimizing re-renders, optimizing assets, and using efficient algorithms.', category: 'Technical' },
  { id: 89, question: 'What are the benefits of using TypeScript over JavaScript?', answer: 'TypeScript provides static type checking, improved tooling support, and better code maintainability compared to JavaScript.', category: 'Technical' },
  { id: 90, question: 'How do you manage dependencies in a JavaScript project?', answer: 'Manage dependencies using package managers like npm or Yarn, and keep them updated to avoid security vulnerabilities and compatibility issues.', category: 'Technical' },

  // More Behavioral Questions
  { id: 91, question: 'Describe a time when you had to lead a project.', answer: 'Explain how you managed the project, including planning, execution, and team coordination.', category: 'Behavioral' },
  { id: 92, question: 'How do you approach problem-solving in your work?', answer: 'Discuss your problem-solving process, including identifying the problem, brainstorming solutions, and implementing the best approach.', category: 'Behavioral' },
  { id: 93, question: 'Tell me about a time when you improved a process.', answer: 'Describe the process you improved, the changes you made, and the impact of those changes.', category: 'Behavioral' },
  { id: 94, question: 'How do you handle conflicts within a team?', answer: 'Discuss your approach to resolving conflicts, including communication strategies and finding common ground.', category: 'Behavioral' },
  { id: 95, question: 'What motivates you to perform well in your job?', answer: 'Discuss factors that drive you to succeed, such as personal goals, team success, or career growth.', category: 'Behavioral' },
  { id: 96, question: 'How do you prioritize tasks when you have multiple deadlines?', answer: 'Explain your approach to task prioritization, including how you determine what needs to be done first and how you manage your time.', category: 'Behavioral' },
  { id: 97, question: 'Describe a situation where you had to learn a new skill quickly.', answer: 'Discuss how you approached learning the new skill, any challenges you faced, and how you applied it successfully.', category: 'Behavioral' },
  { id: 98, question: 'How do you balance work and personal life?', answer: 'Share your strategies for maintaining a healthy work-life balance, including time management and setting boundaries.', category: 'Behavioral' },
  { id: 99, question: 'What is your approach to working with difficult team members?', answer: 'Discuss how you handle challenging team dynamics and work towards a positive outcome.', category: 'Behavioral' },
  { id: 100, question: 'Tell me about a time when you had to work under tight constraints.', answer: 'Explain the constraints you faced, how you managed them, and the results of your work.', category: 'Behavioral' },

  // Additional Technical Questions
  { id: 101, question: 'How do you handle asynchronous operations in Node.js?', answer: 'Use callbacks, promises, or async/await syntax to handle asynchronous operations in Node.js.', category: 'Technical' },
  { id: 102, question: 'What is a RESTful API and how is it different from GraphQL?', answer: 'A RESTful API uses HTTP methods to interact with resources, while GraphQL allows clients to query exactly the data they need and provides a more flexible API.', category: 'Technical' },
  { id: 103, question: 'Explain the concept of containerization with Docker.', answer: 'Containerization with Docker involves packaging an application and its dependencies into a container to ensure consistency across different environments.', category: 'Technical' },
  { id: 104, question: 'What is the purpose of a service worker in a web application?', answer: 'A service worker is a script that runs in the background to handle tasks like caching assets and offline functionality.', category: 'Technical' },
  { id: 105, question: 'How do you optimize a database query for performance?', answer: 'Use indexing, query optimization techniques, and database profiling to improve query performance.', category: 'Technical' },
  { id: 106, question: 'What are WebSockets and how are they used?', answer: 'WebSockets provide a full-duplex communication channel over a single TCP connection, used for real-time updates in web applications.', category: 'Technical' },
  { id: 107, question: 'How would you design a system for handling high traffic loads?', answer: 'Use load balancing, caching, database optimization, and horizontal scaling to handle high traffic loads.', category: 'Technical' },
  { id: 108, question: 'What are the benefits of using a CDN?', answer: 'CDNs provide faster content delivery, reduce server load, and improve availability by distributing content across multiple servers.', category: 'Technical' },
  { id: 109, question: 'How do you handle security in a web application?', answer: 'Implement security best practices such as HTTPS, input validation, authentication, and authorization to protect against vulnerabilities.', category: 'Technical' },
  { id: 110, question: 'What is a load balancer and how does it work?', answer: 'A load balancer distributes incoming network traffic across multiple servers to ensure no single server becomes overwhelmed.', category: 'Technical' }
];


const MockInterview: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [interviewMode, setInterviewMode] = useState('Text Practice');
  const [isRecording, setIsRecording] = useState(false);
  const [videoURL, setVideoURL] = useState<string | null>(null);
  const [timer, setTimer] = useState<number>(60); // 1 minute timer
  const [showTimer, setShowTimer] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (showTimer) {
      intervalRef.current = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 0) {
            clearInterval(intervalRef.current as NodeJS.Timeout);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [showTimer]);

  const handleModeSelect = (mode: string) => {
    setInterviewMode(mode);
    if (mode === 'Text Practice') {
      setShowTimer(false);
    } else if (mode === 'Video Recording' || mode === 'Speech-to-Text') {
      setShowTimer(true);
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentQuestionIndex(0); // Reset to the first question
  };

  const handleAnswerSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      const currentQuestion = questions[currentQuestionIndex];
      const aiResponse = simulateAIResponse(userAnswer, currentQuestion.answer);
      setFeedback(aiResponse);
      setIsSubmitting(false);
      setShowModal(true);
    }, 2000);
  };

  const handleNextQuestion = () => {
    setShowModal(false);
    setUserAnswer('');
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert('You have completed the mock interview!');
    }
  };

  const handleSkipQuestion = () => {
    setUserAnswer('');
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert('No more questions to skip.');
    }
  };

  const simulateAIResponse = (userInput: string, correctAnswer: string) => {
    if (userInput.toLowerCase() === correctAnswer.toLowerCase()) {
      return 'Correct! You have a good understanding of the concept.';
    } else if (userInput.length < 10) {
      return 'Your answer is too short. Try to elaborate more on the concept.';
    } else {
      return 'Not quite right. The correct answer is: ' + correctAnswer;
    }
  };

  const startRecording = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunksRef.current.push(event.data);
        }
      };
      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(recordedChunksRef.current, { type: 'video/webm' });
        setVideoURL(URL.createObjectURL(blob));
      };
      mediaRecorderRef.current.start();
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const deleteRecording = () => {
    setVideoURL(null);
  };

  const handleSpeechToText = () => {
    alert('Speech-to-text mode activated.');
  };

  const filteredQuestions = selectedCategory === 'All' 
    ? questions 
    : questions.filter(q => q.category === selectedCategory);

  return (
    <Container className="mock-interview-container mt-5">
      <Card>
        <Card.Body>
          <h4>Mock Interview</h4>
          <Dropdown onSelect={handleModeSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {interviewMode}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="Text Practice">Text Practice</Dropdown.Item>
              <Dropdown.Item eventKey="Video Recording">Video Recording</Dropdown.Item>
              <Dropdown.Item eventKey="Speech-to-Text">Speech-to-Text</Dropdown.Item>
              {/* Add more modes as needed */}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown onSelect={handleCategorySelect} className="mt-3">
            <Dropdown.Toggle variant="info" id="dropdown-category">
              {selectedCategory}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="All">All Categories</Dropdown.Item>
              <Dropdown.Item eventKey="Technical">Technical</Dropdown.Item>
              <Dropdown.Item eventKey="Behavioral">Behavioral</Dropdown.Item>
              {/* Add more categories as needed */}
            </Dropdown.Menu>
          </Dropdown>

          <p><strong>Question {currentQuestionIndex + 1}:</strong> {filteredQuestions[currentQuestionIndex].question}</p>

          {interviewMode === 'Text Practice' && (
            <Form>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Type your answer here..."
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  disabled={isSubmitting}
                />
              </Form.Group>
              <Button
                variant="primary"
                onClick={handleAnswerSubmit}
                disabled={isSubmitting || userAnswer.trim() === ''}
              >
                {isSubmitting ? <Spinner animation="border" size="sm" /> : 'Submit Answer'}
              </Button>
            </Form>
          )}

          {interviewMode === 'Video Recording' && (
            <div>
              <Button variant="danger" onClick={isRecording ? stopRecording : startRecording}>
                {isRecording ? 'Stop Recording' : 'Start Recording'}
              </Button>
              <Button variant="warning" onClick={deleteRecording} disabled={!videoURL}>
                Delete Recording
              </Button>
              {videoURL && (
                <div className="mt-3">
                  <video controls width="100%" src={videoURL} />
                </div>
              )}
              <video ref={videoRef} style={{ display: 'none' }} />
            </div>
          )}

          {interviewMode === 'Speech-to-Text' && (
            <div>
              <Button variant="info" onClick={handleSpeechToText}>
                <MicIcon /> Start Speech-to-Text
              </Button>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Your speech will be converted to text here..."
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                />
              </Form.Group>
            </div>
          )}

          {showTimer && (
            <div className="mt-3">
              <p>Time Remaining: {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, '0')}</p>
            </div>
          )}

          <Button variant="secondary" onClick={handleSkipQuestion} className="mt-3">
            Skip Question
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{feedback}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleNextQuestion}>
            Next Question
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default MockInterview;
