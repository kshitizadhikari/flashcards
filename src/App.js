import { useState } from "react";

export default function App() {
  return (
    <div className="app">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
  {
    id: 5624,
    question: "What is the purpose of the useEffect hook in React?",
    answer: "To perform side effects in functional components.",
  },
  {
    id: 7891,
    question: "Explain the concept of virtual DOM in React.",
    answer:
      "Virtual DOM is a lightweight copy of the real DOM for faster rendering.",
  },
  {
    id: 4532,
    question: "What is the significance of keys in React lists?",
    answer:
      "Keys help React identify which items have changed, been added, or removed.",
  },
  {
    id: 1478,
    question: "How can you optimize performance in a React application?",
    answer:
      "Memoization, lazy loading, and code splitting are common techniques.",
  },
  {
    id: 6325,
    question: "What is Redux and how does it relate to React?",
    answer:
      "Redux is a state management library often used with React to manage global state.",
  },
  {
    id: 8745,
    question: "Explain the concept of lifting state up in React.",
    answer:
      "Lifting state up involves moving the state to a common ancestor component.",
  },
  {
    id: 3412,
    question: "What is the purpose of the useCallback hook?",
    answer: "It memoizes callback functions to prevent unnecessary re-renders.",
  },
  {
    id: 5983,
    question:
      "How does React Router help in navigation within a React application?",
    answer:
      "React Router enables declarative navigation and routing in a React app.",
  },
  {
    id: 1234,
    question: "What is the role of the useContext hook in React?",
    answer:
      "useContext provides a way to access the values in the context without rendering a consumer.",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div>
      <div className="heading">
        <h1>FlashCards</h1>
      </div>
      <div className="flashcards">
        {questions.map((question) => (
          <div
            key={question.id}
            onClick={() =>
              setSelectedId(question.id !== selectedId ? question.id : null)
            }
            className={question.id === selectedId ? "selected" : ""}
          >
            <p>
              {question.id === selectedId ? question.answer : question.question}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
