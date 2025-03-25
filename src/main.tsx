import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AOSInitializer } from "./components/AosInitializer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AOSInitializer />
    <App />
  </StrictMode>
);
