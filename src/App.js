import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [initialState, setInitialState] = useState(0);

  const getSeconds = () => {
    return ("0" + (initialState % 60)).slice(-2);
  };

  const getMinutes = () => {
    return Math.floor(initialState / 60);
  };

  const handleStartClick = () => {
    this.increment = setInterval(() => {
      setInitialState(pretime => pretime + 1);
    }, 1000);
  };

  const handleStopClick = () => {
    clearInterval(this.increment);
  };

  const handleReset = () => {
    setInitialState(0);
  };

  React.useEffect(() => {
    handleStartClick();
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h1>
        {getMinutes()} : {getSeconds()}
      </h1>

      <button onClick={handleStartClick}>start</button>
      <button onClick={handleStopClick}>stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}
