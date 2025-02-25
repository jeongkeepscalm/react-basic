import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);

// JSX 코드를 사용하지 않을 경우
// ReactDOM.createRoot(entryPoint).render(React.createElement); 
