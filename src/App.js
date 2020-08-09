import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const STARTING_TIME = 5;
  const keepfocus = useRef();
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [gameRunning, setgameRunning] = useState(false);
  const [wordCount, setwordCount] = useState("");

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }
  function countWords() {
    let count = text.trim().split(" ");
    return setwordCount(count.filter((word) => word !== "").length);
  }
  function startGame() {
    setgameRunning(true);
    keepfocus.current.disabled = false;

    keepfocus.current.focus();

    setTimeRemaining(STARTING_TIME);
    setText("");
    setwordCount(0);
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
      <textarea
        ref={keepfocus}
        onChange={handleChange}
        value={text}
        disabled={!gameRunning}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button disabled={gameRunning} onClick={startGame}>
        Start
      </button>
      <h1>Word count:{wordCount} </h1>
    </div>
  );
}

export default App;
