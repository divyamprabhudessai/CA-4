import React, { useState, useEffect } from "react";
import questions from "../questions";
import "./Question.css";
import Result from "./Result";
import icon from "../assets/Qicon.png"

// Define rightAnswersCount variable
let rightAnswersCount = 0;

// QuestionBox Component
export default function QuestionBox() {
  // State variables
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

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
      setQuizCompleted(true);
    }
  };

  const optionColors = {
    0: "#F03986",
    1: "#43DD65",
    2: "#F2CA3C",
    3: "#3C9BF2",
  };

  // Get the current question
  const currentQuestion = questions[currentQuestionIndex];

  // JSX structure for the QuestionBox component
  return (
    <>
      {!quizCompleted && (
        <div>
          {/* Navigation bar */}
          <nav id="quesnav">
          <img src={icon} id="icon" />
            <div className="minicont">
            
            <h2 id="page">{`Question ${currentQuestionIndex + 1} out of 5`}</h2>
            </div>
            <button id="toggle" onClick={toggleMode}>
              {/* Toggle between dark and light mode */}
              <h2>{isDarkMode ? "Light" : "Dark"}</h2>
            </button>
          </nav>

          {/* Main content container */}
          <div id="container-2" className="light-mode">
            <div  className="bg" id="back">
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
                    style={{ backgroundColor: optionColors[option.id] }}
                    onClick={() => {
                      // Update rightAnswersCount if the option is correct
                      if (option.isCorrect) {
                        rightAnswersCount = (rightAnswersCount || 0) + 1;
                      }

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
      )}

      {/* Render Result component if quiz is completed */}
      {quizCompleted && <Result />}
    </>
  );
}

export { rightAnswersCount };
