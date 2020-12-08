import { useEffect } from "react";
import axios from "axios";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const user = "fellypeq";
  return (
    <div className="App dfdc">
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
