import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Counter() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
  <div className="container">
    <h2>Welcome to Counter Page 🎉</h2>

    <div className="counter-number">{count}</div>

    <div>
      <button onClick={() => setCount(count - 1)}>−</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>

    <br />

    <button onClick={() => setCount(0)}>Reset</button>

    <br />

    <button onClick={() => navigate("/")}>Logout</button>
  </div>
);
   
}

export default Counter;