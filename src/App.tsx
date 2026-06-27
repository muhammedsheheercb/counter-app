import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [time, setTime] = useState(0);

  const increment = () => {
    setCount(count + 1);
    // setData("Incremented By 1");
    data.push("Incremented By 1");
  };

  const reset = () => {
    setCount(0);
    // setData("Count Reset");
    data.push("Count Reset");
  };

  const deleteBtn = (id) => {
    data.splice(id, 1);
  };

  const decrement = () => {
    if (count >= 1) {
      setCount(count - 1);
      // setData("Decremented By 1");
      data.push("Decremented By 1");
    }
  };

  return (
    <>
      <section className="section">
        <div className="counter-div">
          <h1 className="counter">Counter</h1>
        </div>
        <div className="second-div">
          <p>count</p>
          <span className="count-spa">{count}</span>
        </div>

        <div className="third-div">
          <button onClick={decrement} className="decr-btn">
            -Decrement
          </button>
          <button onClick={reset} className="res-btn">
            Reset
          </button>
          <button onClick={increment} className="icre-btn">
            +Increment
          </button>
        </div>

        <div className="fourth-div">
          <ul className="fourth-ul">
            {data.map((val, i) => (
              <div>
                <span key={i}>{val}</span>
                <button onClick={() => deleteBtn(i)}>delete</button>
              </div>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
