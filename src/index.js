// MODULES //
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS //
import App from "./App";
import LoginPage from "./routes/LoginPage";

// ASSETS //
import "./assets/styles/base.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/login" element={<LoginPage />}></Route>
    </Routes>
  </Router>
);
