import React from 'react';
import { useHistory } from 'react-router-dom'; 
import "./Home.css";
import logo from "../assets/logo.png";
import play from "../assets/play.png";


export default function QuestionBox() {
    // const history = useHistory(); 

    return (
        <div>
            <div>
                <img src={logo} id='logo' alt='Logo'></img>
            </div>

            <div>
                <button className='but-1'>
                    <img src={play} id='play' alt='Play'></img>
                </button>
            </div>
        </div>
    );
}
