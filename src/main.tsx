import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import NavContextProvider from "./context/NavOverlayContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NavContextProvider>
      <App />
    </NavContextProvider>
  </React.StrictMode>
);
