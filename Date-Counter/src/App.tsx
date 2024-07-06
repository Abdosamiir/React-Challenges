import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  function handelReset() {
    setCount(0);
    setStep(1);
  }
  const date = new Date("july 5 2024");
  date.setDate(date.getDate() + count);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className="card">
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step} : Step </span>
      </div>
      <div className="card">
        <button onClick={() => setCount((s) => s - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((s) => s + step)}>+</button>

        <p>
          <span>
            {count === 0
              ? "To day is "
              : count > 0
              ? `${count} days from to day is `
              : ` ${Math.abs(count)} days ago `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
        {count !== 0 || step !== 1 ? (
          <button onClick={handelReset}>reset</button>
        ) : null}
      </div>
    </>
  );
}

export default App;
