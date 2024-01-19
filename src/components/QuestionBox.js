import React, { useState, useEffect } from 'react';
import questions from '../questions';
import './Question.css';

export default function QuestionBox() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);

  // Dark-light functionality
  useEffect(() => {
    const container = document.getElementById('container-2');
    if (container) {
      container.className = isDarkMode ? 'dark-mode' : 'light-mode';
    }
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const highlightQuestion = () => {
    setIsHighlighted(!isHighlighted);
  };

  return (
    <div>
      <nav>
        <h2>01/05</h2>
        <button id='toggle' onClick={toggleMode}>
          {/* Changing the text to dark or light */}
          <h2>{isDarkMode ? 'Light' : 'Dark'}</h2>
        </button>
      </nav>

      <hr />
      <div id='container-2' className='light-mode'>
        <div className='bg' id='back'>
          <h2 id="question" style={{ color: isHighlighted ? 'red' : 'inherit' }}>
            Hello
          </h2>

          <div className='options'>
            <button id='op-1' className='but'>
              <h2>Option</h2>
            </button>
            <button id='op-2' className='but'>
              <h2>Option</h2>
            </button>
            <button id='op-3' className='but'>
              <h2>Option</h2>
            </button>
            <button id='op-4' className='but'>
              <h2>Option</h2>
            </button>
          </div>

          <div>
            <button id='highlight' onClick={highlightQuestion}>
              {/* Changing the text based on the isHighlighted state */}
              <h2>{isHighlighted ? 'Remove Highlight' : 'Highlight'}</h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
