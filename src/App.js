import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import Home from "./components/Home"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {

  return (
    <div>
      <Home/>
      {/* <Router>
            <Switch>
                <Route path="/QuestionBox" component={QuestionBox} />
                <Route path="/" component={Home} />
            </Switch>
        </Router> */}
    </div>
  );
}

export default App;