import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./home.jsx";
import Donate from "./home/donate.jsx";
import Volunteer from "./home/volunteer.jsx";
import Educate from "./home/educate.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/educate" element={<Educate />} />
      </Routes>
    </Router>
  </StrictMode>
);
