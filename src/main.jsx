import React from "react";
import ReactDOM from "react-dom/client";
import { IconContext } from "react-icons";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <IconContext.Provider value={{ color: "red" }}>
    <App />
  </IconContext.Provider>,
  document.getElementById("root")
);
