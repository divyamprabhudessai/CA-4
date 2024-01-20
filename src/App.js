import React, { useState } from "react";
import QuestionBox from "./components/QuestionBox";
import Home from "./components/Home";
import Result from "./components/Result";

function App() {
  const [showHome, setShowHome] = useState(true);

  return (
    <div>
      
       <Home/>

    </div>
  );
}

export default App;
