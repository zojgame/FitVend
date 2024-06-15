import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./reset.css";
import { MainPage } from "./pages";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);
