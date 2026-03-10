import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login.jsx";
import Counter from "./Counter.jsx";
import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
