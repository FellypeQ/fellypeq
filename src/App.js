import { useEffect } from "react";
import axios from "axios";

import logo from "./logo.svg";
import "./App.css";
//className="App dfdc"
function App() {
  const user = "fellypeq";
  return (
    <div style={{ backgroundColor: "black" }}>
      <h1 style={{ color: "white" }}>Hi there 👋</h1>
      <img
        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&theme=dark`}
      />
      <img
        src={`https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&theme=dark`}
      />
    </div>
  );
}

export default App;
