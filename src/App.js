import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handlePreviousStep() {
    if (step > 0) setStep((s) => s - 1);
  }

  function handleNextStep() {
    setStep((s) => s + 1);
  }

  function handlePreviousCount() {
    setCount((s) => s - step);
  }

  function handleNextCount() {
    setCount((s) => s + step);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div className="count">
        <button className="btn" onClick={handlePreviousStep}>
          -
        </button>
        <h3>Step : {step} </h3>
        <button className="btn" onClick={handleNextStep}>
          +
        </button>
      </div>

      <div className="count">
        <button className="btn" onClick={handlePreviousCount}>
          -
        </button>
        <h3>Count : {count} </h3>
        <button className="btn" onClick={handleNextCount}>
          +
        </button>
      </div>

      <div className="date">
        <p>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} days ago was`}
        </p>
        {date.toDateString()}
      </div>
    </div>
  );
}
