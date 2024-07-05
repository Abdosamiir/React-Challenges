import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
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
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <button onClick={() => setStep((s) => s + 1)}>Step is {step}</button>
      </div>
      <div className="card">
        <button onClick={() => setCount((s) => s - step)}>-</button>
        <button onClick={() => setCount((s) => s + step)}>
          Count is {count}
        </button>
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
      </div>
    </>
  );
}

export default App;
