import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [gameRunning, setgameRunning] = useState(false);
  const [wordCount, setwordCount] = useState("");

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }
  function countWords() {
    setgameRunning(true);
    let count = text.trim().split(" ");
    return setwordCount(count.filter((word) => word !== "").length);
  }

  useEffect(() => {
    if (timeRemaining > 0 && gameRunning) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      countWords();
      setgameRunning(false);
    }
  }, [timeRemaining, gameRunning]);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea onChange={handleChange} value={text} />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={countWords}>Start</button>
      <h1>Word count:{wordCount} </h1>
    </div>
  );
}

export default App;
