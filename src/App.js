import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(5);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }
  function countWords() {
    let count = text.trim().split(" ").length;
    return count.filter((word) => word !== "").length;
  }

  useEffect(() => {
    if (timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    }
  }, [timeRemaining]);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea onChange={handleChange} value={text} />
      <h4>Time remaining: ???</h4>
      <button onClick={countWords}>Start</button>
      <h1>Word count: {timeRemaining}</h1>
    </div>
  );
}

export default App;
