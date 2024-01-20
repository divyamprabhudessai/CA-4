import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import "./Home.css";
import logo from "../assets/logo.png";
import play from "../assets/play.png";
import QuestionBox from './QuestionBox';

const Home = () => {
  
const [isRedirected, setIsRedirected] = useState(false);

const handlePlayClick = () => {
    setIsRedirected(true);
  };

  if (isRedirected) {
    return <QuestionBox />;
  }

  return (
    <div className='container-1'>
      <div>
        <img src={logo} id='logo' alt='Logo'></img>
      </div>

      <div>
        <button className='but-1' onClick={handlePlayClick}>
          <img src={play} id='play' alt='Play'></img>
        </button>
      </div>
    </div>
  );
}

export default Home;
