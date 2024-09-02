import React, { useState } from 'react';
import { Container, Card, Button, Form, ProgressBar, Modal, Spinner, InputGroup, Collapse } from 'react-bootstrap';

interface Question {
  id: number;
  question: string;
  answer: string;
}

interface PracticeTest {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  questions: Question[];
}

const PracticeTests: React.FC = () => {
  const [tests, setTests] = useState<PracticeTest[]>([
    {
      id: 1,
      title: 'JavaScript Basics',
      description: 'Test your knowledge on JavaScript fundamentals.',
      isCompleted: false,
      questions: [
        { id: 1, question: 'What is a closure?', answer: 'A closure is a function that has access to the parent scope, even after the parent function has closed.' },
        { id: 2, question: 'Explain the concept of hoisting in JavaScript.', answer: 'Hoisting is JavaScript’s default behavior of moving declarations to the top of the current scope.' },
        { id: 3, question: 'What is an IIFE?', answer: 'An IIFE (Immediately Invoked Function Expression) is a function that is executed immediately after it is defined.' },
        { id: 4, question: 'What is the difference between == and ===?', answer: '== checks for equality of value, while === checks for equality of value and type.' },
        { id: 5, question: 'What is the event loop?', answer: 'The event loop is a mechanism that allows JavaScript to perform non-blocking I/O operations by executing callbacks.' },
        { id: 6, question: 'What is a promise?', answer: 'A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.' },
        { id: 7, question: 'What is the use of the arrow function?', answer: 'Arrow functions provide a shorter syntax and lexical scoping for "this" compared to regular functions.' },
        { id: 8, question: 'What is "use strict"?', answer: '"use strict" is a directive that enforces stricter parsing and error handling in JavaScript code.' },
        { id: 9, question: 'What is a callback function?', answer: 'A callback function is a function passed as an argument to another function, which is then invoked inside the outer function.' },
        { id: 10, question: 'What is the difference between null and undefined?', answer: 'undefined means a variable has been declared but not yet assigned a value, while null is an assignment value representing no value.' },
      ],
    },
    {
      id: 2,
      title: 'React Fundamentals',
      description: 'Assess your understanding of core React concepts.',
      isCompleted: false,
      questions: [
        { id: 1, question: 'What is JSX?', answer: 'JSX is a syntax extension for JavaScript that looks similar to XML or HTML and is used with React to describe the UI.' },
        { id: 2, question: 'What is a component in React?', answer: 'A component is a self-contained module that renders some output and manages its own state and props.' },
        { id: 3, question: 'What are props?', answer: 'Props (short for properties) are read-only attributes passed from a parent component to a child component.' },
        { id: 4, question: 'What is state in React?', answer: 'State is an object that represents the dynamic data of a component and determines how that component renders and behaves.' },
        { id: 5, question: 'What is the difference between functional and class components?', answer: 'Functional components are stateless and use hooks for state management, while class components have state and lifecycle methods.' },
        { id: 6, question: 'What is the virtual DOM?', answer: 'The virtual DOM is an in-memory representation of the real DOM, used by React to optimize UI updates.' },
        { id: 7, question: 'What is a React hook?', answer: 'Hooks are functions that let you use React state and lifecycle features in functional components.' },
        { id: 8, question: 'What is the purpose of useEffect?', answer: 'useEffect is a hook that lets you perform side effects in function components, like data fetching or subscriptions.' },
        { id: 9, question: 'What is context in React?', answer: 'Context provides a way to pass data through the component tree without having to pass props down manually at every level.' },
        { id: 10, question: 'What is React.memo?', answer: 'React.memo is a higher-order component that memoizes the result of a component and prevents unnecessary re-renders.' },
      ],
    },
    {
      id: 3,
      title: 'CSS Layouts',
      description: 'Evaluate your skills in CSS layouts and styling.',
      isCompleted: false,
      questions: [
        { id: 1, question: 'What is the box model in CSS?', answer: 'The CSS box model describes the rectangular boxes generated for elements, consisting of margins, borders, padding, and the content area.' },
        { id: 2, question: 'Explain the difference between inline and block elements.', answer: 'Inline elements do not start on a new line and only take up as much width as necessary, while block elements start on a new line and take up the full width available.' },
        { id: 3, question: 'What is Flexbox?', answer: 'Flexbox is a layout model that allows items to align and distribute space within a container efficiently.' },
        { id: 4, question: 'What is CSS Grid?', answer: 'CSS Grid is a layout system for creating complex, responsive grid-based layouts using rows and columns.' },
        { id: 5, question: 'How do you center a div horizontally?', answer: 'You can center a div horizontally using margin: 0 auto; or by setting display: flex; and justify-content: center; on the parent.' },
        { id: 6, question: 'What is the difference between relative and absolute positioning?', answer: 'Relative positioning positions an element relative to its normal position, while absolute positioning positions an element relative to its nearest positioned ancestor.' },
        { id: 7, question: 'What are media queries?', answer: 'Media queries are used to apply different styles to elements based on the conditions like screen size, orientation, and resolution.' },
        { id: 8, question: 'What is z-index?', answer: 'z-index is a CSS property that determines the stack order of elements on the z-axis.' },
        { id: 9, question: 'What is a responsive design?', answer: 'Responsive design refers to the approach of designing web content that adjusts smoothly across different screen sizes and devices.' },
        { id: 10, question: 'How do you create a sticky element in CSS?', answer: 'You create a sticky element using position: sticky; along with the top, bottom, left, or right property to define its sticky position.' },
      ],
    },
    {
      id: 4,
      title: 'TypeScript Essentials',
      description: 'Check your grasp of TypeScript basics and advanced features.',
      isCompleted: false,
      questions: [
        { id: 1, question: 'What is TypeScript?', answer: 'TypeScript is a superset of JavaScript that adds static typing and other features to the language.' },
        { id: 2, question: 'What are types in TypeScript?', answer: 'Types are annotations in TypeScript that define the kind of value a variable can hold.' },
        { id: 3, question: 'What is an interface in TypeScript?', answer: 'An interface is a structure in TypeScript that defines the shape of an object, outlining what properties and types the object should have.' },
        { id: 4, question: 'What is the difference between type and interface?', answer: 'Both type and interface can be used to define object shapes, but types can also define unions and intersections, while interfaces are more extensible.' },
        { id: 5, question: 'What is generics in TypeScript?', answer: 'Generics allow you to write functions, classes, and interfaces that can work with different types without losing type safety.' },
        { id: 6, question: 'What is the "unknown" type in TypeScript?', answer: 'The "unknown" type is a safer alternative to "any" because it forces you to perform type-checking before using the value.' },
        { id: 7, question: 'How do you create a function with optional parameters?', answer: 'You can create a function with optional parameters by adding a question mark (?) after the parameter name.' },
        { id: 8, question: 'What are type guards in TypeScript?', answer: 'Type guards are functions or expressions that narrow down the type of a variable within a conditional block.' },
        { id: 9, question: 'What is a union type?', answer: 'A union type is a type that can be one of several specified types.' },
        { id: 10, question: 'What is the purpose of "readonly" in TypeScript?', answer: 'The "readonly" modifier makes a property immutable, preventing it from being reassigned after it has been initialized.' },
      ],
    },
    {
      id: 5,
      title: 'Database Management',
      description: 'Test your knowledge on database design and SQL queries.',
      isCompleted: false,
      questions: [
        { id: 1, question: 'What is a primary key?', answer: 'A primary key is a unique identifier for a record in a database table.' },
        { id: 2, question: 'What is a foreign key?', answer: 'A foreign key is a field in one table that uniquely identifies a row in another table, creating a relationship between the two tables.' },
        { id: 3, question: 'What is normalization?', answer: 'Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity.' },
        { id: 4, question: 'What are the different types of JOINs?', answer: 'The different types of JOINs include INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN, which are used to combine rows from two or more tables.' },
        { id: 5, question: 'What is an index in a database?', answer: 'An index is a database object that improves the speed of data retrieval operations on a table.' },
        { id: 6, question: 'What is SQL injection?', answer: 'SQL injection is a code injection technique that exploits a vulnerability in an application’s software by inserting malicious SQL statements into an input field.' },
        { id: 7, question: 'What is ACID in database transactions?', answer: 'ACID stands for Atomicity, Consistency, Isolation, and Durability, which are the properties that ensure reliable processing of database transactions.' },
        { id: 8, question: 'What is a NoSQL database?', answer: 'A NoSQL database is a type of database that stores and retrieves data without using the traditional relational database schema.' },
        { id: 9, question: 'What is a view in SQL?', answer: 'A view is a virtual table based on the result of an SQL query, which can be used to simplify complex queries or provide security by restricting access to specific data.' },
        { id: 10, question: 'What is the difference between DELETE and TRUNCATE?', answer: 'DELETE removes rows one by one and can be rolled back, while TRUNCATE removes all rows in a table without logging individual row deletions and cannot be rolled back in most systems.' },
      ],
    },
    {
      id: 6,
      title: 'Algorithm Design',
      description: 'Evaluate your skills in designing and analyzing algorithms.',
      isCompleted: false,
      questions: [
        { id: 1, question: 'What is Big O notation?', answer: 'Big O notation is a mathematical notation used to describe the upper bound of an algorithm’s runtime in terms of input size.' },
        { id: 2, question: 'What is a recursive algorithm?', answer: 'A recursive algorithm is one that solves a problem by solving smaller instances of the same problem.' },
        { id: 3, question: 'What is dynamic programming?', answer: 'Dynamic programming is a method for solving complex problems by breaking them down into simpler subproblems and solving each subproblem only once, storing the solutions for future use.' },
        { id: 4, question: 'What is a greedy algorithm?', answer: 'A greedy algorithm is an algorithm that makes locally optimal choices at each step, hoping to find the global optimum.' },
        { id: 5, question: 'What is a divide-and-conquer algorithm?', answer: 'A divide-and-conquer algorithm is one that divides the problem into smaller subproblems, solves each subproblem independently, and then combines the solutions.' },
        { id: 6, question: 'What is the difference between depth-first search (DFS) and breadth-first search (BFS)?', answer: 'DFS explores as far as possible along each branch before backtracking, while BFS explores all nodes at the present depth level before moving on to nodes at the next depth level.' },
        { id: 7, question: 'What is a hash table?', answer: 'A hash table is a data structure that stores key-value pairs and uses a hash function to map keys to their corresponding values.' },
        { id: 8, question: 'What is a binary search?', answer: 'Binary search is an efficient algorithm for finding an item from a sorted list of items by repeatedly dividing the search interval in half.' },
        { id: 9, question: 'What is memoization?', answer: 'Memoization is a technique used to speed up function calls by storing the results of expensive function calls and reusing the cached results when the same inputs occur again.' },
        { id: 10, question: 'What is the traveling salesman problem?', answer: 'The traveling salesman problem is a classic optimization problem that asks for the shortest possible route that visits each city exactly once and returns to the origin city.' },
      ],
    },
    {
      id: 7,
      title: 'Operating Systems',
      description: 'Test your understanding of operating systems concepts.',
      isCompleted: false,
      questions: [
        { id: 1, question: 'What is an operating system?', answer: 'An operating system is system software that manages computer hardware, software resources, and provides common services for computer programs.' },
        { id: 2, question: 'What is a process?', answer: 'A process is an instance of a program that is being executed by a computer system.' },
        { id: 3, question: 'What is a thread?', answer: 'A thread is the smallest unit of processing that can be performed in an operating system.' },
        { id: 4, question: 'What is the difference between multitasking and multiprocessing?', answer: 'Multitasking refers to running multiple processes on a single CPU, while multiprocessing refers to using multiple CPUs to perform multiple processes simultaneously.' },
        { id: 5, question: 'What is virtual memory?', answer: 'Virtual memory is a memory management technique that provides an "idealized abstraction" of the storage resources that are actually available on a given machine.' },
        { id: 6, question: 'What is a deadlock?', answer: 'A deadlock is a situation in operating systems where two or more processes are unable to proceed because each is waiting for the other to release a resource.' },
        { id: 7, question: 'What is a file system?', answer: 'A file system is a method and data structure that the operating system uses to control how data is stored and retrieved.' },
        { id: 8, question: 'What is paging?', answer: 'Paging is a memory management scheme that eliminates the need for contiguous allocation of physical memory by dividing memory into fixed-sized pages.' },
        { id: 9, question: 'What is the purpose of a kernel?', answer: 'The kernel is the core component of an operating system, responsible for managing system resources and communication between hardware and software.' },
        { id: 10, question: 'What is a context switch?', answer: 'A context switch is the process of storing the state of a process or thread and restoring it at a later time, allowing multiple processes or threads to share a single CPU.' },
      ],
    },
    {
      id: 8,
      title: 'Data Structures',
      description: 'Assess your knowledge of data structures and their operations.',
      isCompleted: false,
      questions: [
        { id: 1, question: 'What is an array?', answer: 'An array is a collection of elements, identified by index or key, where each element is stored at contiguous memory locations.' },
        { id: 2, question: 'What is a linked list?', answer: 'A linked list is a linear data structure where each element (node) contains a reference (link) to the next element in the sequence.' },
        { id: 3, question: 'What is a stack?', answer: 'A stack is a linear data structure that follows the Last In First Out (LIFO) principle, where elements are added and removed from the same end.' },
        { id: 4, question: 'What is a queue?', answer: 'A queue is a linear data structure that follows the First In First Out (FIFO) principle, where elements are added from one end and removed from the other end.' },
        { id: 5, question: 'What is a tree?', answer: 'A tree is a hierarchical data structure consisting of nodes, where each node has a value and references to its child nodes.' },
        { id: 6, question: 'What is a binary search tree (BST)?', answer: 'A binary search tree is a binary tree where each node has a value greater than all the values in its left subtree and less than all the values in its right subtree.' },
        { id: 7, question: 'What is a graph?', answer: 'A graph is a collection of nodes (vertices) and edges connecting pairs of nodes, used to represent relationships between objects.' },
        { id: 8, question: 'What is a heap?', answer: 'A heap is a special tree-based data structure that satisfies the heap property, where the key of the parent node is always greater (max heap) or smaller (min heap) than the keys of its children.' },
        { id: 9, question: 'What is a hash map?', answer: 'A hash map is a data structure that implements an associative array, mapping keys to values using a hash function.' },
        { id: 10, question: 'What is the difference between an array and a linked list?', answer: 'An array has fixed size and provides fast access to elements via index, while a linked list has dynamic size and allows for efficient insertion and deletion of elements.' },
      ],
    },
    {
      id: 9,
      title: 'Software Engineering',
      description: 'Evaluate your understanding of software development principles and practices.',
      isCompleted: false,
      questions: [
        { id: 1, question: 'What is the software development life cycle (SDLC)?', answer: 'The software development life cycle (SDLC) is a process used by software developers to design, develop, and test software, consisting of phases such as planning, analysis, design, implementation, testing, deployment, and maintenance.' },
        { id: 2, question: 'What is Agile methodology?', answer: 'Agile methodology is an iterative and incremental approach to software development that emphasizes flexibility, collaboration, and customer feedback.' },
        { id: 3, question: 'What is version control?', answer: 'Version control is a system that records changes to files or sets of files over time, allowing developers to track revisions and collaborate effectively.' },
        { id: 4, question: 'What is a design pattern?', answer: 'A design pattern is a reusable solution to a common problem in software design, providing a template for how to structure and solve similar problems.' },
        { id: 5, question: 'What is unit testing?', answer: 'Unit testing is a software testing method where individual units or components of a software are tested to ensure they work as expected.' },
        { id: 6, question: 'What is continuous integration (CI)?', answer: 'Continuous integration (CI) is a practice in software development where developers integrate code into a shared repository frequently, with automated builds and tests to detect issues early.' },
        { id: 7, question: 'What is object-oriented programming (OOP)?', answer: 'Object-oriented programming (OOP) is a programming paradigm based on the concept of objects, which contain data and methods, and promotes principles such as encapsulation, inheritance, and polymorphism.' },
        { id: 8, question: 'What is a software requirement specification (SRS)?', answer: 'A software requirement specification (SRS) is a document that describes the functional and non-functional requirements of a software system, providing a blueprint for development.' },
        { id: 9, question: 'What is refactoring?', answer: 'Refactoring is the process of restructuring existing code without changing its external behavior, to improve its readability, maintainability, and performance.' },
        { id: 10, question: 'What is DevOps?', answer: 'DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development life cycle and deliver high-quality software continuously.' },
      ],
    },
    {
      id: 10,
      title: 'Cybersecurity',
      description: 'Assess your knowledge of cybersecurity principles and practices.',
      isCompleted: false,
      questions: [
        { id: 1, question: 'What is cybersecurity?', answer: 'Cybersecurity is the practice of protecting systems, networks, and data from digital attacks, unauthorized access, and damage.' },
        { id: 2, question: 'What is encryption?', answer: 'Encryption is the process of converting data into a coded format to prevent unauthorized access, ensuring data confidentiality and integrity.' },
        { id: 3, question: 'What is a firewall?', answer: 'A firewall is a network security device that monitors and controls incoming and outgoing network traffic based on predetermined security rules.' },
        { id: 4, question: 'What is malware?', answer: 'Malware is any software designed to harm, exploit, or otherwise compromise the security of a computer system, including viruses, worms, and ransomware.' },
        { id: 5, question: 'What is phishing?', answer: 'Phishing is a cyber attack technique where attackers impersonate legitimate organizations or individuals to deceive people into revealing sensitive information.' },
        { id: 6, question: 'What is a zero-day vulnerability?', answer: 'A zero-day vulnerability is a software security flaw that is unknown to the vendor and is exploited by attackers before a patch is released.' },
        { id: 7, question: 'What is multi-factor authentication (MFA)?', answer: 'Multi-factor authentication (MFA) is a security process that requires two or more forms of verification to grant access to a system or application.' },
        { id: 8, question: 'What is a denial-of-service (DoS) attack?', answer: 'A denial-of-service (DoS) attack is a cyber attack that aims to make a machine or network resource unavailable to users by overwhelming it with a flood of traffic or requests.' },
        { id: 9, question: 'What is a VPN?', answer: 'A virtual private network (VPN) is a service that encrypts your internet connection and hides your online activity, providing privacy and security when using the internet.' },
        { id: 10, question: 'What is social engineering?', answer: 'Social engineering is a psychological manipulation technique used by attackers to trick individuals into divulging confidential information or performing actions that compromise security.' },
      ],
    },
  ]);

  const [selectedTest, setSelectedTest] = useState<PracticeTest | null>(null);
  const [showTestModal, setShowTestModal] = useState<boolean>(false);
  const [showAnswers, setShowAnswers] = useState<boolean>(false);

  const handleViewTest = (test: PracticeTest) => {
    setSelectedTest(test);
    setShowTestModal(true);
    setShowAnswers(false);
  };

  const handleCompleteTest = () => {
    if (selectedTest) {
      setTests((prevTests) =>
        prevTests.map((t) => (t.id === selectedTest.id ? { ...t, isCompleted: true } : t))
      );
      setShowAnswers(true);
    }
  };

  const handleCloseModal = () => {
    setShowTestModal(false);
    setSelectedTest(null);
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Practice Tests</h1>

      <div className="row">
        {tests.length > 0 ? (
          tests.map((test) => (
            <div className="col-md-4 mb-3" key={test.id}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{test.title}</Card.Title>
                  <Card.Text>{test.description}</Card.Text>
                  <Button variant="primary" onClick={() => handleViewTest(test)}>
                    Start Test
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <p className="text-muted text-center">No tests to display.</p>
        )}
      </div>

      {/* Test Modal */}
      <Modal show={showTestModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedTest?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTest ? (
            <>
              <p>{selectedTest.description}</p>
              {selectedTest.questions.map((q) => (
                <div key={q.id} className="mb-3">
                  <h5>{q.question}</h5>
                  <Collapse in={showAnswers}>
                    <div>
                      <p className="text-success"><strong>Answer:</strong> {q.answer}</p>
                    </div>
                  </Collapse>
                </div>
              ))}
            </>
          ) : (
            <Spinner animation="border" />
          )}
        </Modal.Body>
        <Modal.Footer>
          {!showAnswers && (
            <Button variant="success" onClick={handleCompleteTest}>
              Complete Test
            </Button>
          )}
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default PracticeTests;
