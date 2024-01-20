import React from 'react'
import "./Result.css"
import { useState, useEffect } from "react";
import result from "../assets/result.png"
import { rightAnswersCount } from './QuestionBox';
import Exam from "../assets/exam.png"

export default function Result() {

  const [isDarkMode, setIsDarkMode] = useState(false);

    // Dark-light functionality
    useEffect(() => {
      const main = document.getElementById("maincont");
      if (main) {
        // Apply dark or light mode based on state
        main.className = isDarkMode ? "dark-mode" : "light-mode";
      }
    }, [isDarkMode]);

     // Toggle dark/light mode
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const restartQuiz = () => {
    window.location.reload(); // Reload the page to restart the quiz
  };

  return (
    
    
    <div>
      <nav className='top'>
      <div>
            <img src={Exam} id='icon2'  />
      </div>

          <button id='newtog' className='hi' onClick={toggleMode}>
           
              {/* Toggle between dark and light mode */}
              <h2>{isDarkMode ? "Light" : "Dark"}</h2>
          </button>
      </nav>

      <div id='maincont' className='light-mode'>
          <div className='bg' id='back'>
                <img src={result} alt="" id='resimg' />
            <div className='info'>
            <h1 className='values'>{`${rightAnswersCount} out of 5 correct`}</h1>
            <h1 className='values'>{`Percentage :  ${Math.round((rightAnswersCount/5)*100)}%`}</h1>
          </div>

          <div>
            <button id='restart' onClick={restartQuiz}><h2>RESTART</h2></button>
          </div>
          </div>
          
          

      </div>
    </div>
  )
}
