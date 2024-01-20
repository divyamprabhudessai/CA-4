import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import "./Home.css";
import logo from "../assets/logo.png";
import play from "../assets/play.png";
import QuestionBox from './QuestionBox';

// Home component
const Home = () => {
  // State to track whether redirection is triggered
  const [isRedirected, setIsRedirected] = useState(false);

  // Function to handle the "Play" button click
  const handlePlayClick = () => {
    // Set isRedirected to true to trigger redirection
    setIsRedirected(true);
  };

  // If redirection is triggered, render the QuestionBox component
  if (isRedirected) {
    return <QuestionBox />;
  }

  // If not redirected, render the home screen
  return (
    <div className='container-1'>
      {/* Logo */}
      <div>
        <img src={logo} id='logo' alt='Logo'></img>
      </div>

      {/* "Play" button */}
      <div>
        <button className='but-1' onClick={handlePlayClick}>
          <img src={play} id='play' alt='Play'></img>
        </button>
      </div>
    </div>
  );
}

export default Home;
