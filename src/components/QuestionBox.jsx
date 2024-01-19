import React, { useState, useEffect } from "react";
import questions from "../questions";
import "./Question.css";

// QuestionBox Component
export default function QuestionBox() {
  // State variables
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [rightAnswersCount, setRightAnswersCount] = useState(0);

  // Dark-light functionality
  useEffect(() => {
    const container = document.getElementById("container-2");
    if (container) {
      // Apply dark or light mode based on state
      container.className = isDarkMode ? "dark-mode" : "light-mode";
    }
  }, [isDarkMode]);

  // Toggle dark/light mode
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Highlight/unhighlight current question
  const highlightQuestion = () => {
    setIsHighlighted(!isHighlighted);
  };

  // Handle option click (Move to the next question or finish the quiz)
  const handleOptionClick = () => {
    // Move to the next question if not the last one
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Handle the case when the last question is reached
      alert(
        "Quiz completed! Right answers count: " +
          rightAnswersCount +
          " " +
          "  Percentage: " +
          Math.round((rightAnswersCount / 5) * 100)+
          "%"
      );
    }
  };

  // Get the current question
  const currentQuestion = questions[currentQuestionIndex];

  // JSX structure for the QuestionBox component
  return (
    <div>
      {/* Navigation bar */}
      <nav>
        <h2>{`${currentQuestionIndex + 1}/5`}</h2>
        <button id="toggle" onClick={toggleMode}>
          {/* Toggle between dark and light mode */}
          <h2>{isDarkMode ? "Light" : "Dark"}</h2>
        </button>
      </nav>

      {/* Main content container */}
      <div id="container-2" className="light-mode">
        <div className="bg" id="back">
          {/* Display the current question */}
          <h2
            id="question"
            style={{ color: isHighlighted ? "red" : "inherit" }}
          >
            {currentQuestion.text}
          </h2>

          {/* Options for the current question */}
          <div className="options">
            {currentQuestion.options.map((option) => (
              <button
                key={option.id}
                className="but"
                onClick={() => {
                  // Update rightAnswersCount if the option is correct
                  if (option.isCorrect) {
                    setRightAnswersCount(rightAnswersCount + 1);
                  }
                  // Move to the next question
                  handleOptionClick();
                }}
              >
                <h2>{option.text}</h2>
              </button>
            ))}
          </div>

          {/* Button to highlight/unhighlight the current question */}
          <div>
            <button id="highlight" onClick={highlightQuestion}>
              {/* Toggle text based on the isHighlighted state */}
              <h2>{isHighlighted ? "Remove Highlight" : "Highlight"}</h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
