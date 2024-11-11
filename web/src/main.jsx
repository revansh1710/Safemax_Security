import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Consultation from "./components/Consultation.jsx";
import StatusCheck from "./components/Statuscheck.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/consultation-form" element={<StatusCheck />} />
      </Routes>
    </Router>
  </StrictMode>
);
