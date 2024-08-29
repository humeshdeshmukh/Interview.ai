// src/questionsData.ts

export interface Question {
    id: number;
    title: string;
    description: string;
    category: 'Tech' | 'Non-Tech'; // Category for filtering
    isBookmarked: boolean;
  }
  
  export const questions: Question[] = [
    // Tech Questions
    { id: 1, title: 'Explain the concept of closures in JavaScript.', description: 'Describe what closures are and provide an example of their use.', category: 'Tech', isBookmarked: false },
    { id: 2, title: 'What is a promise in JavaScript?', description: 'Discuss the concept of promises and how they handle asynchronous operations.', category: 'Tech', isBookmarked: false },
    { id: 3, title: 'What is the difference between `let`, `const`, and `var`?', description: 'Explain the differences between `let`, `const`, and `var` in JavaScript.', category: 'Tech', isBookmarked: false },
    { id: 4, title: 'Describe the event delegation pattern.', description: 'Explain the event delegation pattern and its advantages.', category: 'Tech', isBookmarked: false },
    { id: 5, title: 'What are the different ways to handle asynchronous operations in JavaScript?', description: 'Discuss callbacks, promises, and async/await for handling asynchronous operations.', category: 'Tech', isBookmarked: false },
    { id: 6, title: 'What is the purpose of the `useEffect` hook in React?', description: 'Describe the use of the `useEffect` hook and provide examples of its applications.', category: 'Tech', isBookmarked: false },
    { id: 7, title: 'Explain the concept of virtual DOM in React.', description: 'Discuss how the virtual DOM works and its benefits.', category: 'Tech', isBookmarked: false },
    { id: 8, title: 'What is a RESTful API?', description: 'Define RESTful API and its key principles.', category: 'Tech', isBookmarked: false },
    { id: 9, title: 'What are the key differences between SQL and NoSQL databases?', description: 'Discuss the differences between SQL and NoSQL databases with examples.', category: 'Tech', isBookmarked: false },
    { id: 10, title: 'Explain the concept of inheritance in object-oriented programming.', description: 'Describe inheritance and how it works in OOP.', category: 'Tech', isBookmarked: false },
    
    // Add more tech questions here...
  
    // Non-Tech Questions
    { id: 11, title: 'Tell me about a time you resolved a conflict in a team.', description: 'Describe a situation where you resolved a conflict and the outcome.', category: 'Non-Tech', isBookmarked: false },
    { id: 12, title: 'How do you approach learning new skills?', description: 'Discuss your methods for acquiring new skills and knowledge.', category: 'Non-Tech', isBookmarked: false },
    { id: 13, title: 'Describe a challenging project you worked on.', description: 'Provide details about a challenging project and your approach to overcoming obstacles.', category: 'Non-Tech', isBookmarked: false },
    { id: 14, title: 'How do you handle criticism?', description: 'Discuss how you respond to and handle constructive criticism.', category: 'Non-Tech', isBookmarked: false },
    { id: 15, title: 'Tell me about a time when you went above and beyond in your role.', description: 'Share an example of when you exceeded expectations in your job.', category: 'Non-Tech', isBookmarked: false },
    { id: 16, title: 'How do you prioritize your tasks when handling multiple projects?', description: 'Explain your approach to managing and prioritizing tasks.', category: 'Non-Tech', isBookmarked: false },
    { id: 17, title: 'Describe a situation where you had to adapt to a significant change at work.', description: 'Discuss how you managed and adapted to a major change in your work environment.', category: 'Non-Tech', isBookmarked: false },
    { id: 18, title: 'What motivates you to do your best work?', description: 'Share what drives you to excel in your job.', category: 'Non-Tech', isBookmarked: false },
    { id: 19, title: 'Describe a time when you had to make a difficult decision.', description: 'Explain a challenging decision you faced and how you made it.', category: 'Non-Tech', isBookmarked: false },
    { id: 20, title: 'How do you handle tight deadlines and high-pressure situations?', description: 'Discuss your strategies for managing stress and meeting deadlines.', category: 'Non-Tech', isBookmarked: false },
  
    // Add more non-tech questions here...
  
    // Tech Questions (Continued)
    { id: 21, title: 'What are React hooks and how do they differ from class components?', description: 'Explain the concept of React hooks and how they are used in functional components.', category: 'Tech', isBookmarked: false },
    { id: 22, title: 'Describe the use of the `useState` hook in React.', description: 'Discuss how to use the `useState` hook to manage state in functional components.', category: 'Tech', isBookmarked: false },
    { id: 23, title: 'What is the purpose of Redux in a React application?', description: 'Explain Redux and its role in state management for React applications.', category: 'Tech', isBookmarked: false },
    { id: 24, title: 'What are the differences between SQL JOIN types?', description: 'Discuss the different types of SQL JOIN operations and their use cases.', category: 'Tech', isBookmarked: false },
    { id: 25, title: 'Explain the concept of middleware in Express.js.', description: 'Describe what middleware is and how it is used in Express.js applications.', category: 'Tech', isBookmarked: false },
    { id: 26, title: 'What are the key principles of Agile methodology?', description: 'Discuss the principles of Agile and how they apply to project management.', category: 'Tech', isBookmarked: false },
    { id: 27, title: 'Describe the concept of dependency injection.', description: 'Explain dependency injection and its benefits in software design.', category: 'Tech', isBookmarked: false },
    { id: 28, title: 'What are RESTful services and how do they work?', description: 'Discuss RESTful services and their implementation in web applications.', category: 'Tech', isBookmarked: false },
    { id: 29, title: 'How does the JavaScript event loop work?', description: 'Explain the event loop in JavaScript and its role in asynchronous programming.', category: 'Tech', isBookmarked: false },
    { id: 30, title: 'What is the difference between synchronous and asynchronous programming?', description: 'Discuss synchronous and asynchronous programming and their implications.', category: 'Tech', isBookmarked: false },
  
    // Non-Tech Questions (Continued)
    { id: 31, title: 'What are the key differences between HTTP and HTTPS?', description: 'Discuss the differences between HTTP and HTTPS protocols and their importance in web security.', category: 'Tech', isBookmarked: false },
  { id: 32, title: 'How does caching work in web applications?', description: 'Explain the concept of caching and its benefits for web performance.', category: 'Tech', isBookmarked: false },
  { id: 33, title: 'What are the differences between SQL and NoSQL databases?', description: 'Discuss the differences between SQL and NoSQL databases with examples.', category: 'Tech', isBookmarked: false },
  { id: 34, title: 'What is the role of a service worker in progressive web apps?', description: 'Describe the purpose of service workers and their role in progressive web apps.', category: 'Tech', isBookmarked: false },
  { id: 35, title: 'What is the difference between a stack and a queue?', description: 'Explain the key differences between stack and queue data structures and their use cases.', category: 'Tech', isBookmarked: false },
  { id: 36, title: 'Describe the concept of a REST API and its benefits.', description: 'Explain REST APIs, their principles, and how they are used in web services.', category: 'Tech', isBookmarked: false },
  { id: 37, title: 'How does garbage collection work in JavaScript?', description: 'Discuss the garbage collection process in JavaScript and its impact on memory management.', category: 'Tech', isBookmarked: false },
  { id: 38, title: 'What are the main differences between Angular and React?', description: 'Compare Angular and React in terms of architecture, performance, and use cases.', category: 'Tech', isBookmarked: false },
  { id: 39, title: 'What is the purpose of the `useReducer` hook in React?', description: 'Explain the `useReducer` hook and its use cases in managing state in React applications.', category: 'Tech', isBookmarked: false },
  { id: 40, title: 'What are web sockets and how are they used in real-time applications?', description: 'Describe web sockets and their role in enabling real-time communication in web apps.', category: 'Tech', isBookmarked: false },
  { id: 41, title: 'What is the difference between synchronous and asynchronous programming?', description: 'Explain the concepts of synchronous and asynchronous programming and their applications.', category: 'Tech', isBookmarked: false },
  { id: 42, title: 'What is the role of a load balancer in a web application architecture?', description: 'Discuss the purpose of a load balancer and its role in managing traffic in web applications.', category: 'Tech', isBookmarked: false },
  { id: 43, title: 'How does the `this` keyword work in JavaScript?', description: 'Explain the behavior of the `this` keyword in different contexts in JavaScript.', category: 'Tech', isBookmarked: false },
  { id: 44, title: 'What are the benefits of using TypeScript over JavaScript?', description: 'Discuss the advantages of TypeScript and how it improves development compared to plain JavaScript.', category: 'Tech', isBookmarked: false },
  { id: 45, title: 'What is a closure and how is it used in JavaScript?', description: 'Describe closures in JavaScript and provide examples of how they are used in coding.', category: 'Tech', isBookmarked: false },
  { id: 46, title: 'How do you handle errors in asynchronous code in JavaScript?', description: 'Discuss error handling techniques in asynchronous JavaScript code, such as using try/catch with async/await.', category: 'Tech', isBookmarked: false },
  { id: 47, title: 'What is the difference between `null` and `undefined` in JavaScript?', description: 'Explain the differences between `null` and `undefined` and when to use each.', category: 'Tech', isBookmarked: false },
  { id: 48, title: 'What are the principles of Object-Oriented Programming?', description: 'Discuss the key principles of OOP, such as encapsulation, inheritance, and polymorphism.', category: 'Tech', isBookmarked: false },
  { id: 49, title: 'Explain the concept of RESTful web services.', description: 'Describe what RESTful web services are and how they are used in API design.', category: 'Tech', isBookmarked: false },
  { id: 50, title: 'What is the purpose of the `async` and `await` keywords in JavaScript?', description: 'Explain how `async` and `await` work to handle asynchronous operations in JavaScript.', category: 'Tech', isBookmarked: false },
  
  // Non-Tech Questions (continued)
  { id: 41, title: 'Describe a time when you had to manage a conflict between team members.', description: 'Share how you handled a situation where team members had a conflict and how you resolved it.', category: 'Non-Tech', isBookmarked: false },
  { id: 42, title: 'How do you maintain work-life balance?', description: 'Discuss your strategies for managing your work and personal life effectively.', category: 'Non-Tech', isBookmarked: false },
  { id: 43, title: 'What do you consider to be your greatest professional achievement?', description: 'Share your most significant professional accomplishment and why it stands out.', category: 'Non-Tech', isBookmarked: false },
  { id: 44, title: 'Describe a situation where you had to quickly adapt to a change.', description: 'Discuss how you adapted to a significant change in your work or personal life.', category: 'Non-Tech', isBookmarked: false },
  { id: 45, title: 'How do you handle multiple priorities?', description: 'Explain how you manage and prioritize tasks when you have several important deadlines.', category: 'Non-Tech', isBookmarked: false },
  { id: 46, title: 'Tell me about a time when you exceeded expectations at work.', description: 'Describe an instance where you went beyond what was expected of you and the impact it had.', category: 'Non-Tech', isBookmarked: false },
  { id: 47, title: 'How do you handle feedback from supervisors or peers?', description: 'Discuss how you receive and act upon feedback in a constructive manner.', category: 'Non-Tech', isBookmarked: false },
  { id: 48, title: 'What are your long-term career goals?', description: 'Share your career aspirations and how you plan to achieve them.', category: 'Non-Tech', isBookmarked: false },
  { id: 49, title: 'How do you stay updated with industry trends and developments?', description: 'Discuss how you keep yourself informed about the latest trends and changes in your field.', category: 'Non-Tech', isBookmarked: false },
  { id: 50, title: 'Describe a time when you had to collaborate with a diverse team.', description: 'Share your experience working with a team from diverse backgrounds and the benefits and challenges.', category: 'Non-Tech', isBookmarked: false },

  // Tech Questions (additional)
  { id: 51, title: 'What are the advantages of using version control systems like Git?', description: 'Discuss the benefits of version control systems and how they aid in software development.', category: 'Tech', isBookmarked: false },
  { id: 52, title: 'Explain the concept of dependency injection in software design.', description: 'Describe dependency injection and how it helps in managing dependencies in a system.', category: 'Tech', isBookmarked: false },
  { id: 53, title: 'What is the difference between client-side and server-side rendering?', description: 'Discuss the differences between client-side and server-side rendering and their use cases.', category: 'Tech', isBookmarked: false },
  { id: 54, title: 'How do you optimize the performance of a web application?', description: 'Explain techniques and tools you use to optimize the performance of web applications.', category: 'Tech', isBookmarked: false },
  { id: 55, title: 'What is the purpose of a Content Delivery Network (CDN)?', description: 'Describe how a CDN works and its role in improving website performance.', category: 'Tech', isBookmarked: false },
  { id: 56, title: 'How do you handle state management in large-scale React applications?', description: 'Discuss approaches and tools for managing state in large React applications.', category: 'Tech', isBookmarked: false },
  { id: 57, title: 'What are some common design patterns used in software development?', description: 'Explain various design patterns and their applications in software design.', category: 'Tech', isBookmarked: false },
  { id: 58, title: 'How does the JavaScript engine execute code?', description: 'Discuss the process of code execution in the JavaScript engine, including the parsing and execution phases.', category: 'Tech', isBookmarked: false },
  { id: 59, title: 'What are the key considerations for designing a RESTful API?', description: 'Explain the important factors to consider when designing a RESTful API.', category: 'Tech', isBookmarked: false },
  { id: 60, title: 'What is the purpose of continuous integration and continuous deployment (CI/CD)?', description: 'Discuss the role of CI/CD in modern software development and its benefits.', category: 'Tech', isBookmarked: false },
  { id: 61, title: 'Describe how you would design a URL shortening service like bit.ly.', description: 'Discuss the system architecture, data storage, and scaling considerations for a URL shortening service.', category: 'Tech', isBookmarked: false },
  { id: 62, title: 'Explain how you would optimize a database query to handle large datasets.', description: 'Describe techniques for query optimization and indexing to improve performance with large datasets.', category: 'Tech', isBookmarked: false },
  { id: 63, title: 'What is the time complexity of common sorting algorithms like quicksort and mergesort?', description: 'Discuss the time complexity of quicksort, mergesort, and other common sorting algorithms, and their use cases.', category: 'Tech', isBookmarked: false },
  { id: 64, title: 'How would you implement a least-recently-used (LRU) cache?', description: 'Explain the design and implementation of an LRU cache, including data structures and eviction policies.', category: 'Tech', isBookmarked: false },
  { id: 65, title: 'What are some strategies for handling high concurrency in a web application?', description: 'Discuss techniques and tools for managing high levels of concurrency and avoiding issues such as race conditions.', category: 'Tech', isBookmarked: false },
  { id: 66, title: 'Describe the CAP theorem and its implications for distributed systems.', description: 'Explain the CAP theorem and how it affects the design and operation of distributed systems.', category: 'Tech', isBookmarked: false },
  { id: 67, title: 'How do you approach debugging a production issue in a distributed system?', description: 'Discuss your approach to identifying and resolving issues in a distributed system, including monitoring and logging.', category: 'Tech', isBookmarked: false },
  { id: 68, title: 'What are the differences between object-oriented and functional programming paradigms?', description: 'Compare object-oriented programming (OOP) and functional programming (FP), including their principles and use cases.', category: 'Tech', isBookmarked: false },
  { id: 69, title: 'Explain how you would implement a search functionality for a large dataset.', description: 'Discuss the design and algorithms for implementing efficient search functionality, including indexing and query optimization.', category: 'Tech', isBookmarked: false },
  { id: 70, title: 'What is the difference between a mutex and a semaphore?', description: 'Describe the differences between mutexes and semaphores, including their use cases and mechanisms for synchronization.', category: 'Tech', isBookmarked: false },
  
  // Common FAANG Behavioral Questions
  { id: 71, title: 'Tell me about a time when you faced a significant challenge at work and how you overcame it.', description: 'Share a specific example of a challenging situation and the steps you took to resolve it.', category: 'Non-Tech', isBookmarked: false },
  { id: 72, title: 'Describe a project you led and the impact it had on the team or organization.', description: 'Discuss a leadership experience, including the project, your role, and the results achieved.', category: 'Non-Tech', isBookmarked: false },
  { id: 73, title: 'How do you handle feedback from peers or managers?', description: 'Explain your approach to receiving and acting on feedback to improve your performance.', category: 'Non-Tech', isBookmarked: false },
  { id: 74, title: 'Can you provide an example of a time when you had to work with a difficult team member?', description: 'Share an experience of working with a challenging colleague and how you managed the situation.', category: 'Non-Tech', isBookmarked: false },
  { id: 75, title: 'How do you prioritize tasks when you have multiple deadlines?', description: 'Discuss your methods for managing and prioritizing tasks when facing competing deadlines.', category: 'Non-Tech', isBookmarked: false },
  { id: 76, title: 'Describe a situation where you had to make a decision with incomplete information.', description: 'Explain how you approached making a decision when you did not have all the necessary information.', category: 'Non-Tech', isBookmarked: false },
  { id: 77, title: 'Tell me about a time when you had to adapt to a significant change at work.', description: 'Discuss how you managed and adapted to a major change in your work environment or role.', category: 'Non-Tech', isBookmarked: false },
  { id: 78, title: 'How do you approach solving complex problems?', description: 'Describe your problem-solving process, including how you break down and tackle complex issues.', category: 'Non-Tech', isBookmarked: false },
  { id: 79, title: 'Can you give an example of a time when you successfully collaborated with a cross-functional team?', description: 'Share an experience of working with a team from different functions or departments and the outcomes.', category: 'Non-Tech', isBookmarked: false },
  { id: 80, title: 'What motivates you in your work and how do you stay motivated during challenging projects?', description: 'Discuss your sources of motivation and how you maintain it during difficult tasks or projects.', category: 'Non-Tech', isBookmarked: false },

  // More Common FAANG Technical and Behavioral Questions
  { id: 81, title: 'How do you ensure the security of sensitive data in your applications?', description: 'Discuss strategies and practices for protecting sensitive data in software applications.', category: 'Tech', isBookmarked: false },
  { id: 82, title: 'Explain the concept of event-driven architecture and its benefits.', description: 'Describe event-driven architecture and how it benefits system design and responsiveness.', category: 'Tech', isBookmarked: false },
  { id: 83, title: 'What are some common performance bottlenecks in web applications and how do you address them?', description: 'Identify common performance issues and techniques for improving web application performance.', category: 'Tech', isBookmarked: false },
  { id: 84, title: 'Describe the process of conducting a code review and its importance.', description: 'Explain how code reviews are conducted and their significance in maintaining code quality.', category: 'Tech', isBookmarked: false },
  { id: 85, title: 'How do you handle situations where you need to quickly learn a new technology?', description: 'Discuss your approach to learning and mastering new technologies in a short period of time.', category: 'Tech', isBookmarked: false },
  { id: 86, title: 'What is the purpose of using containers and orchestration tools like Docker and Kubernetes?', description: 'Explain the advantages of containerization and orchestration tools in modern software development.', category: 'Tech', isBookmarked: false },
  { id: 87, title: 'Describe a time when you implemented a new feature that significantly improved user experience.', description: 'Share an example of a feature you developed that enhanced user experience and its impact.', category: 'Tech', isBookmarked: false },
  { id: 88, title: 'What are the best practices for designing scalable and maintainable software?', description: 'Discuss principles and practices for creating software that is both scalable and easy to maintain.', category: 'Tech', isBookmarked: false },
  { id: 89, title: 'How do you handle ambiguity in project requirements?', description: 'Explain your approach to dealing with unclear or evolving project requirements.', category: 'Non-Tech', isBookmarked: false },
  { id: 90, title: 'Describe a time when you had to deliver difficult news to a client or stakeholder.', description: 'Share how you communicated challenging information and managed the situation.', category: 'Non-Tech', isBookmarked: false },
  { id: 91, title: 'How do you approach setting and achieving your professional goals?', description: 'Discuss your method for establishing and working towards career objectives.', category: 'Non-Tech', isBookmarked: false },
  { id: 92, title: 'Tell me about a time when you had to manage competing priorities from different stakeholders.', description: 'Explain how you balanced and addressed competing demands from various stakeholders.', category: 'Non-Tech', isBookmarked: false },
  { id: 93, title: 'How do you ensure effective communication within your team?', description: 'Discuss strategies for maintaining clear and effective communication among team members.', category: 'Non-Tech', isBookmarked: false },
  { id: 94, title: 'What is your approach to mentoring or coaching junior team members?', description: 'Describe your experience and methods for mentoring and supporting less experienced team members.', category: 'Non-Tech', isBookmarked: false },
  { id: 95, title: 'Can you provide an example of how you handled a project failure and what you learned from it?', description: 'Share an experience of dealing with a project failure and the lessons you took away from it.', category: 'Non-Tech', isBookmarked: false },
  { id: 96, title: 'How do you stay organized and manage your workload effectively?', description: 'Explain your strategies for staying organized and managing multiple tasks and projects.', category: 'Non-Tech', isBookmarked: false },
  { id: 97, title: 'Describe a time when you had to make a trade-off between competing technical and business requirements.', description: 'Discuss how you balanced technical and business needs in a project.', category: 'Non-Tech', isBookmarked: false },
  { id: 98, title: 'What are some methods you use to stay up-to-date with industry trends and technologies?', description: 'Share your approach to keeping current with advancements in your field.', category: 'Non-Tech', isBookmarked: false },
  { id: 99, title: 'How do you handle feedback that you disagree with?', description: 'Explain how you respond to feedback that you may not agree with and how you use it constructively.', category: 'Non-Tech', isBookmarked: false },
  { id: 100, title: 'Describe a time when you had to lead a team through a challenging project.', description: 'Share an example of your leadership during a difficult project and the outcome.', category: 'Non-Tech', isBookmarked: false },
];